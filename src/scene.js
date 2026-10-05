import { JOURNEY_DISTANCE, JOURNEY_STOPS, characterX, landmarkX } from './journey-stops.js';

/** A deterministic, scroll-position-driven pixel world. No autonomous game loop. */
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const SPRITE_CELL = { width: 384, height: 512, anchorX: 176, scale: 84 / 467 };
const WALK_FRAMES = [1, 2, 3, 4];
// Join below the chin; align the generated walk poses to the idle neck.
const HEAD_SEAM = -63;
const BODY_OFFSETS = [0, -1, -1, -4, 0];
function random(seed) {
  return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
}
export class JourneyScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: false });
    this.progress = 0;
    this.direction = 1;
    this.distance = 0;
    this.walking = false;
    this.image = new Image();
    this.image.onload = () => this.draw();
    this.image.onerror = () => { this.imageFailed = true; this.draw(); };
    this.image.src = new URL('../assets/vancouver-geography-v2.png', import.meta.url).href;
    this.characterImage = new Image();
    this.characterImage.onload = () => {
      this.characterImageFailed = false;
      this.draw();
      this.onCharacterChange?.();
    };
    this.characterImage.onerror = () => {
      this.characterImageFailed = true;
      this.draw();
      this.onCharacterChange?.();
    };
    this.characterImage.src = new URL('../assets/danial-subtle-stubble-v6.png', import.meta.url).href;
    const rng = random(1706);
    this.stones = Array.from({length: 900}, () => ({x:rng()*4200,y:rng()*54,w:1+rng()*6,c:rng()}));
    this.flowers = Array.from({length: 230}, () => ({x:rng()*4300,y:rng()*24,size:1+rng()*2,c:rng()}));
    this.resize();
  }
  get characterSpriteReady() {
    return !this.characterImageFailed && this.characterImage.complete &&
      this.characterImage.naturalWidth === SPRITE_CELL.width * 4 &&
      this.characterImage.naturalHeight === SPRITE_CELL.height * 2;
  }
  get characterHeight() { return this.characterSpriteReady ? 84 : 63; }
  resize() {
    const {width,height,top} = this.canvas.getBoundingClientRect();
    this.h = 540;
    this.w = Math.round(width / height * this.h);
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    const hudTop=document.querySelector('.trail-hud').getBoundingClientRect().top-top;
    this.floor=Math.round(Math.min(this.h*.815,hudTop/height*this.h-28));
    this.ctx.imageSmoothingEnabled = false;
    this.draw();
  }
  setProgress(p, moving = true) {
    const next = clamp(p,0,1);
    const delta = next-this.progress;
    if (Math.abs(delta) > .00001) this.direction = Math.sign(delta);
    this.distance += Math.abs(delta)*3800;
    this.progress=next;
    this.walking=moving && Math.abs(delta)>.00001;
    this.draw();
  }
  stop() { this.walking=false; this.draw(); }
  rect(x,y,w,h,color){this.ctx.fillStyle=color;this.ctx.fillRect(Math.round(x),Math.round(y),Math.ceil(w),Math.ceil(h));}
  draw() {
    if (!this.ctx || !this.w) return;
    const c=this.ctx,w=this.w,h=this.h,p=this.progress;
    const floor=this.floor,camera=p*JOURNEY_DISTANCE;
    c.imageSmoothingEnabled=false;
    c.fillStyle='#b4dacb';c.fillRect(0,0,w,h);
    if(this.image.complete && this.image.naturalWidth){
      // The panorama pans more slowly than the trail, creating depth.
      // Keep both shores in the desktop view instead of cropping the peninsula away.
      const bw=Math.max(w*1.16,h*1.65),bh=bw*this.image.naturalHeight/this.image.naturalWidth;
      const travel=Math.max(0,bw-w);
      const imageTop=Math.max(h*.22,floor-bh*.76);
      c.drawImage(this.image,Math.round(-travel*(.08+p*.92)),Math.round(imageTop),Math.round(bw),Math.round(bh));
    }else this.fallbackMountains();

    // A small flock shares the horizon; motion is tied to scrolling.
    for(let i=0;i<4;i++){
      const x=w*.7+i*15-p*75,y=h*.19+i%2*7;
      this.rect(x,y,3,1,'#547873');this.rect(x+3,y+1,2,1,'#547873');this.rect(x+5,y,3,1,'#547873');
    }
    // Sea wall top, grass edge, and textured sandstone path.
    this.rect(0,floor-14,w,15,'#516d48');
    this.rect(0,floor-10,w,5,'#92a66b');
    this.rect(0,floor-5,w,8,'#b8b593');
    this.rect(0,floor+3,w,37,'#c2b795');
    this.rect(0,floor+40,w,5,'#988d70');
    this.rect(0,floor+45,w,h,'#294e35');
    this.rect(0,floor+45,w,5,'#779256');
    for(let x=-((camera%68)+68)%68;x<w;x+=68){
      this.rect(x,floor-5,1,8,'#8d9571');
      this.rect(x+24,floor+27,23,1,'#a89f81');
    }
    for(const s of this.stones){const x=s.x-camera;if(x<0||x>w)continue;
      this.rect(x,floor+7+s.y*.5,s.w,1,s.c>.5?'#a69d7b':'#d6caab');
    }
    for(const f of this.flowers){const x=f.x-camera;if(x<-5||x>w+5)continue;
      const y=floor+47+f.y;this.rect(x,y-5,1,7,'#77955a');
      this.rect(x-2,y-7,4,3,f.c>.75?'#dcc995':f.c>.48?'#c48d9d':'#50713e');
    }
    for(const stop of JOURNEY_STOPS){const x=landmarkX(stop,w,p);if(x<-230||x>w+230)continue;
      if(stop.landmark==='start')this.sign(x,floor,'THE SCENIC ROUTE','VANCOUVER  →');
      if(stop.landmark==='bench')this.bench(x,floor);
      if(stop.landmark==='lookout'){this.telescope(x,floor);this.drone(x-100,floor-105);}
      if(stop.landmark==='harbour'){this.lamp(x+70,floor);this.bench(x,floor);this.sign(x+170,floor,'THE HARBOUR','STAY CURIOUS');}
    }
    this.character(characterX(w,p),floor+17);
    // Near grass at the edge moves slightly faster, without covering controls.
    for(let i=0;i<18;i++){
      const x=((i*117-camera*1.12)% (w+160)+w+160)%(w+160)-80;
      this.rect(x,h-9,2,9,'#476b39');this.rect(x-3,h-6,8,2,'#668a45');
    }
  }
  fallbackMountains(){
    const c=this.ctx;
    for(let layer=0;layer<3;layer++){
      c.fillStyle=['#91b8b4','#6e9993','#496f64'][layer];c.beginPath();c.moveTo(0,this.h);
      for(let x=0;x<=this.w+50;x+=30)c.lineTo(x,200+layer*45+Math.sin(x*.012+layer)*50);
      c.lineTo(this.w,this.h);c.fill();
    }
  }
  sign(x,y,title,sub){
    this.rect(x-3,y-62,7,64,'#68573b');this.rect(x,y-61,2,61,'#9b8759');
    this.rect(x-53,y-75,108,35,'#564d34');this.rect(x-50,y-72,102,29,'#b8bb87');
    this.rect(x-47,y-69,96,1,'#d9d4a4');
    const c=this.ctx;c.textAlign='center';c.fillStyle='#354f34';c.font='9px Pixelify, monospace';c.fillText(title,x,y-59);c.font='7px Pixelify, monospace';c.fillText(sub,x,y-49);
  }
  bench(x,y){
    this.rect(x-33,y-31,69,7,'#906d43');this.rect(x-33,y-20,69,7,'#a0804e');
    this.rect(x-38,y-7,79,6,'#b2905d');this.rect(x-32,y-30,3,43,'#3d5243');this.rect(x+29,y-30,3,43,'#3d5243');
    this.rect(x-30,y-30,60,2,'#b69b68');this.rect(x-40,y+13,84,2,'#827e62');
  }
  telescope(x,y){
    const r=(a,b,w,h,color)=>this.rect(x+a,y+b,w,h,color);
    // A weighted public-lookout pedestal and a visible swivel under the barrel.
    r(-19,11,39,2,'#898d70');r(-15,7,31,5,'#405b50');r(-11,6,23,2,'#a1b1a0');
    r(-4,-37,8,44,'#486257');r(-2,-36,2,42,'#a3b3a1');r(3,-35,2,41,'#354f45');
    r(-9,-43,19,6,'#456157');r(-10,-49,4,10,'#688476');r(7,-51,4,12,'#688476');
    // Stepped diagonal tube: a small eyepiece at left, flared objective at right.
    r(-25,-45,9,7,'#304e45');r(-23,-44,7,2,'#7e9c8c');
    r(-18,-50,8,12,'#49665c');r(-16,-49,7,9,'#a8bbae');
    r(-11,-54,13,14,'#526e63');r(-10,-53,13,10,'#b9c8b7');
    r(1,-59,18,15,'#536f63');r(2,-58,18,11,'#bccdbc');
    r(-10,-53,12,2,'#e1e6cd');r(2,-58,16,2,'#e1e6cd');
    r(-8,-44,10,2,'#839d8f');r(3,-49,16,2,'#839d8f');
    r(18,-64,7,2,'#36564b');r(16,-62,12,17,'#36564b');r(18,-45,7,2,'#36564b');
    r(18,-61,6,15,'#8cae9e');r(22,-59,4,11,'#274e49');
    r(23,-58,2,7,'#639c96');r(23,-58,1,3,'#c0dcd0');
    // The warm pivot pin separates the optical tube from its support.
    r(-3,-44,7,7,'#36564b');r(-1,-42,3,3,'#c8af78');
  }
  lamp(x,y){
    this.rect(x,y-112,4,125,'#34544b');this.rect(x-7,y-111,17,3,'#29493e');this.rect(x-5,y-125,13,14,'#dfd5a2');this.rect(x-7,y-128,17,4,'#375445');this.rect(x-2,y-130,7,2,'#375445');this.rect(x-4,y+12,12,3,'#34544b');
  }
  drone(x,y){
    const phase=this.distance*.08,dy=Math.round(Math.sin(phase)*2);
    const r=(a,b,w,h,color)=>this.rect(x+a,y+b+dy,w,h,color);
    // Four separated motor pods and staggered rotors make the quad layout legible.
    r(-13,-9,3,6,'#59796d');r(-11,-5,6,3,'#59796d');
    r(10,-9,3,6,'#59796d');r(5,-5,6,3,'#59796d');
    r(-18,-11,15,2,'#34554e');r(4,-11,15,2,'#34554e');
    r(-12,-12,3,4,'#c5d1bd');r(10,-12,3,4,'#c5d1bd');
    // Landing skids sit below the fuselage, leaving room for a suspended camera.
    r(-8,3,3,8,'#466358');r(6,3,3,8,'#466358');
    r(-10,10,3,4,'#466358');r(8,10,3,4,'#466358');
    r(-13,13,8,2,'#34554e');r(6,13,8,2,'#34554e');
    r(-17,-1,11,3,'#426258');r(7,-1,11,3,'#426258');
    r(-19,-3,4,6,'#8ba99a');r(16,-3,4,6,'#8ba99a');
    r(-25,-4,17,2,'#2f5149');r(10,-4,17,2,'#2f5149');
    r(-18,-5,2,3,'#dbe3cc');r(17,-5,2,3,'#dbe3cc');
    // The stepped, pale shell reads as a small aircraft rather than a flat bar.
    r(-7,-7,14,2,'#47665b');r(-9,-5,18,7,'#47665b');r(-6,2,13,3,'#47665b');
    r(-6,-6,12,2,'#e7ead4');r(-8,-4,16,5,'#cfdbc6');r(-5,1,11,2,'#9bb5a2');
    r(-3,-4,6,2,'#f0eed8');r(5,-2,2,2,'#d3a25a');
    r(-1,4,3,3,'#8aa696');r(-4,7,9,5,'#2e5048');
    r(-2,8,5,3,'#75a49b');r(-1,8,2,2,'#c2dbca');
  }
  character(x,y){
    this.rect(x-14,y+1,32,3,'#8d906e');
    if(!this.characterSpriteReady){this.fallbackCharacter(x,y);return;}
    const c=this.ctx;
    const frame=this.walking?WALK_FRAMES[Math.floor(this.distance/12)%WALK_FRAMES.length]:0;
    const column=frame%4,row=Math.floor(frame/4);
    const {width,height,anchorX,scale}=SPRITE_CELL;
    // The second row sits eight source pixels higher.
    const baseline=row===0?491:483;
    const drawX=Math.round(-anchorX*scale);
    const drawWidth=Math.round(width*scale),drawHeight=Math.round(height*scale);
    c.save();
    c.translate(Math.round(x),Math.round(y));
    c.scale(this.direction,1);
    c.imageSmoothingEnabled=false;

    c.save();
    c.beginPath();c.rect(-drawWidth,HEAD_SEAM,drawWidth*2,drawHeight);c.clip();
    c.drawImage(this.characterImage,column*width,row*height,width,height,
      drawX+BODY_OFFSETS[frame],Math.round(-baseline*scale),drawWidth,drawHeight);
    c.restore();

    // Reuse the idle head at the identical pixel sampling phase. Tiny variations
    // between generated faces otherwise make the one-pixel brows blink at this size.
    c.save();
    c.beginPath();c.rect(-drawWidth,-drawHeight,drawWidth*2,drawHeight+HEAD_SEAM);c.clip();
    c.drawImage(this.characterImage,0,0,width,height,
      drawX,Math.round(-491*scale),drawWidth,drawHeight);
    c.restore();
    c.restore();
  }
  fallbackCharacter(x,y){
    const c=this.ctx;
    const frame=this.walking?Math.floor(this.distance/9)%4:0;
    const stride=this.walking?[0,3,0,-3][frame]:0;
    const bob=this.walking&&frame%2===1?-1:0;
    c.save();c.translate(Math.round(x),Math.round(y));c.scale(this.direction*1.8,1.8);
    const r=(a,b,d,e,col)=>this.rect(a,b+bob,d,e,col);
    // Rear leg and boot.
    r(-3-stride,-12,5,9,'#344947');r(-4-stride,-4,7,4,'#263d35');r(-4-stride,-1,8,1,'#d4c9a0');
    // Backpack, hair silhouette, face, and amber jacket.
    r(-10,-26,7,14,'#354e40');r(-11,-23,2,8,'#263e35');r(-9,-25,4,10,'#758065');r(-10,-24,2,2,'#afad80');
    r(-5,-35,9,3,'#293c32');r(-7,-32,13,7,'#293c32');r(-5,-34,8,3,'#3b4935');
    r(-3,-30,9,8,'#d1a27b');r(5,-28,2,4,'#d1a27b');r(-4,-28,3,4,'#b98361');r(3,-29,2,2,'#2f4137');r(3,-23,3,1,'#a16d53');r(-2,-23,5,3,'#c29168');
    r(-6,-22,11,12,'#b16a3e');r(-4,-21,9,10,'#cf8e4d');r(-6,-22,3,11,'#885a3b');r(1,-21,2,10,'#e7ad66');r(-6,-12,12,3,'#93623c');r(-4,-21,2,10,'#425b43');
    // Front arm counter-swings against the legs.
    r(3+stride,-20,4,8,'#b77741');r(4+stride,-12,3,3,'#d4a77d');
    r(1+stride,-10,5,8,'#405650');r(1+stride,-3,8,3,'#293f35');r(1+stride,-1,9,1,'#d4c9a0');
    c.restore();
  }
  destroy(){
    this.image.onload=null;this.image.onerror=null;
    this.characterImage.onload=null;this.characterImage.onerror=null;
    this.onCharacterChange=null;
  }
}
