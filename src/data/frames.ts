// Frame paths for the scrollytelling canvas sequence
export const TOTAL_FRAMES = 74;

export const getFramePath = (index: number): string => {
  const padded = String(Math.max(0, Math.min(TOTAL_FRAMES - 1, index))).padStart(2, "0");
  return `/sequence/frame_${padded}_delay-0.067s.png`;
};

export const FRAME_PATHS: string[] = Array.from({ length: TOTAL_FRAMES }, (_, i) => getFramePath(i));
