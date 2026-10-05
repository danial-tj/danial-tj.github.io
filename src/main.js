import { JourneyScene } from './scene.js';
import { JOURNEY_STOPS, characterX, chapterAt } from './journey-stops.js';

const scene = new JourneyScene(document.querySelector('#landscape'));
const root=document.documentElement;
const journey=document.querySelector('#journey');
const motionButton=document.querySelector('#motion-toggle');
const panels=[...document.querySelectorAll('[data-chapter]')];
const routeButtons=[...document.querySelectorAll('.trail-nav [data-go]')];
const progressLine=document.querySelector('#trail-progress');
const characterLabel=document.querySelector('.character-label');
const locationText=document.querySelector('#current-location');
const journeyStep=document.querySelector('#journey-step');
const reduceQuery=matchMedia('(prefers-reduced-motion: reduce)');
let activeChapter=-1, trigger, stopTimer, resizeFrame, savedProgress=0;
let manualStill=false;
try { manualStill=localStorage.getItem('scenic-still')==='true'; } catch { /* Storage is optional. */ }

function positionCharacterLabel(){
  characterLabel.style.left=`${characterX(100,savedProgress)}%`;
  characterLabel.style.top=`${(scene.floor+17-scene.characterHeight-8)/scene.h*100}%`;
  characterLabel.style.bottom='auto';
}
scene.onCharacterChange=positionCharacterLabel;

function setChapter(index, instant=false){
  if(index===activeChapter&&!instant)return;
  const animate=!instant&&!root.classList.contains('still-mode')&&!reduceQuery.matches&&window.gsap;
  activeChapter=index;
  for(let i=0;i<panels.length;i++){
    const panel=panels[i];
    const current=i===index;
    const visible=getComputedStyle(panel).visibility!=='hidden'&&Number(getComputedStyle(panel).opacity)>.001;
    // Cancelling preserves the current visual position when scrolling reverses.
    window.gsap?.killTweensOf(panel);
    // Move focus away from a chapter before making its links inert.
    if(!current && panel.contains(document.activeElement))motionButton.focus({preventScroll:true});
    panel.classList.toggle('is-active',current);
    panel.setAttribute('aria-hidden',String(!current));
    panel.inert=!current;
    const clearMotion=()=>{
      if(window.gsap){window.gsap.set(panel,{clearProps:'opacity,visibility,transform'});return;}
      for(const property of ['opacity','visibility','transform'])panel.style.removeProperty(property);
    };
    if(!animate||(!current&&!visible)){clearMotion();continue;}
    if(current&&!visible)window.gsap.set(panel,{autoAlpha:0,y:8});
    if(!current&&visible)window.gsap.set(panel,{visibility:'visible'});
    window.gsap.to(panel,{
      autoAlpha:current?1:0,y:current?0:-8,duration:.18,ease:'power2.out',overwrite:true,
      onComplete:clearMotion,
    });
  }
  routeButtons.forEach((button,i)=>{
    if(i===index)button.setAttribute('aria-current','step');
    else button.removeAttribute('aria-current');
    button.dataset.visited=String(i<index);
  });
  locationText.textContent=JOURNEY_STOPS[index].location;
  if(journeyStep)journeyStep.textContent=`${String(index+1).padStart(2,'0')} / ${String(JOURNEY_STOPS.length).padStart(2,'0')}`;
}
function update(progress, moving=true){
  savedProgress=progress;
  scene.setProgress(progress,moving);
  setChapter(chapterAt(progress),!moving);
  progressLine.style.transform=`scaleX(${Math.min(progress/JOURNEY_STOPS.at(-1).progress,1)})`;
  const introVisible=progress<.07;
  characterLabel.style.opacity=introVisible?'1':'0';
  positionCharacterLabel();
  clearTimeout(stopTimer);
  if(moving)stopTimer=setTimeout(()=>scene.stop(),130);
}
function configureMotion(){
  const still=manualStill||reduceQuery.matches;
  const progress=savedProgress;
  trigger?.kill();trigger=null;
  root.classList.toggle('still-mode',still);
  root.classList.add('enhanced');
  motionButton.setAttribute('aria-pressed',String(still));
  scene.resize();
  motionButton.innerHTML=still?'Resume walk <span aria-hidden="true">▷</span>':'Still mode <span aria-hidden="true">Ⅱ</span>';
  motionButton.disabled=reduceQuery.matches;
  if(reduceQuery.matches){motionButton.innerHTML='Reduced motion';motionButton.title='Following your device’s reduced-motion preference';}
  else motionButton.removeAttribute('title');
  if(still){update(0,false);return;}
  if(!window.gsap||!window.ScrollTrigger){root.classList.add('still-mode');motionButton.hidden=true;update(0,false);return;}
  window.gsap.registerPlugin(window.ScrollTrigger);
  trigger=window.ScrollTrigger.create({
    trigger:journey,start:'top top',end:'bottom bottom',
    onUpdate:self=>update(self.progress),
    onRefresh:self=>update(self.progress,false),
  });
  update(progress,false);
}

document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',event=>{
  const index=Number(button.dataset.go);
  if(root.classList.contains('still-mode')){
    document.querySelector(index===1?'#about':'#projects').scrollIntoView({behavior:'instant'});
    return;
  }
  const target=journey.offsetTop+JOURNEY_STOPS[index].progress*(journey.offsetHeight-window.innerHeight);
  // Keyboard jumps are immediate; pointer jumps retain an interruptible native scroll.
  window.scrollTo({top:target,behavior:event.detail===0?'instant':'smooth'});
}));
motionButton.addEventListener('click',()=>{
  manualStill=!manualStill;
  try{localStorage.setItem('scenic-still',String(manualStill));}catch{/* Keep controls usable without storage. */}
  configureMotion();
  window.scrollTo({top:0,behavior:'instant'});
});
const onPreferenceChange=()=>configureMotion();
reduceQuery.addEventListener('change',onPreferenceChange);
const resizeObserver=new ResizeObserver(()=>{
  cancelAnimationFrame(resizeFrame);
  resizeFrame=requestAnimationFrame(()=>{scene.resize();update(savedProgress,false);window.ScrollTrigger?.refresh();});
});
resizeObserver.observe(document.querySelector('.stage'));
document.fonts.ready.then(()=>scene.draw());
document.addEventListener('visibilitychange',()=>{if(document.hidden){clearTimeout(stopTimer);scene.stop();}});
configureMotion();
// Normal anchors keep the complete portfolio usable without the canvas or GSAP.
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{
  const target=document.querySelector(a.getAttribute('href'));
  if(!target)return;
  target.setAttribute('tabindex','-1');
  requestAnimationFrame(()=>target.focus({preventScroll:true}));
}));
window.addEventListener('pagehide',event=>{
  if(event.persisted){clearTimeout(stopTimer);scene.stop();return;}
  clearTimeout(stopTimer);cancelAnimationFrame(resizeFrame);
  window.gsap?.killTweensOf(panels);
  resizeObserver.disconnect();trigger?.kill();scene.destroy();
  reduceQuery.removeEventListener('change',onPreferenceChange);
});
