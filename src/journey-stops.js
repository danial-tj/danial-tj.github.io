/** One route drives navigation, chapter selection, and physical landmarks. */
export const JOURNEY_DISTANCE = 3300;
export const JOURNEY_STOPS = [
  { progress: 0, location: 'The seawall', landmark: 'start', offset: 112 },
  { progress: .22, location: 'Along the shoreline', landmark: 'bench', offset: 60 },
  { progress: .46, location: 'The lookout', landmark: 'lookout', offset: 55 },
  { progress: .70, location: 'The harbour', landmark: 'harbour', offset: 60 },
  { progress: .92, location: 'A quiet corner', landmark: 'bench', offset: 60 },
];

export const characterX = (width, progress) => width * (.30 + .14 * Math.min(progress * 2, 1));

// Anchor each prop to where the walker will be when its stop is selected.
// The logical-pixel gap stays consistent on narrow and wide viewports.
export const landmarkX = (stop, width, progress) =>
  (stop.progress - progress) * JOURNEY_DISTANCE + characterX(width, stop.progress) + Math.min(stop.offset, width * .35);

export function chapterAt(progress) {
  const next = JOURNEY_STOPS.findIndex((stop, index) => index > 0 &&
    progress < (JOURNEY_STOPS[index - 1].progress + stop.progress) / 2);
  return next < 0 ? JOURNEY_STOPS.length - 1 : next - 1;
}
