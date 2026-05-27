export const formatTime = (seconds: number): string => {
  const getMinutes = String(Math.trunc(seconds / 60));
  const getSeconds = String(seconds % 60).padStart(2, "0");
  return `${getMinutes}:${getSeconds}`;
};
