export const formatTime = (time: number): string => {
  const seconds = Math.floor(time);
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
};
