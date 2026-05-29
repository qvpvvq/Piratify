// hooks/useRafProgress.ts
import { useEffect, useRef, useState } from "react";

export function useRafProgress(
  isPlaying: boolean,
  duration: number,
  onComplete?: () => void,
) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | undefined>(0);
  const startTimeRef = useRef<number>(0);
  const startProgressRef = useRef<number>(0);
  const onCompleteRef = useRef(onComplete);

  // Обновляем ref для onComplete
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!isPlaying) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = undefined;
      }
      return;
    }

    // Запоминаем текущий прогресс перед стартом анимации
    startProgressRef.current = progress;
    startTimeRef.current = performance.now();

    const update = (now: number) => {
      const elapsed = (now - startTimeRef.current) / 1000;
      const newProgress = Math.min(
        startProgressRef.current + elapsed,
        duration,
      );

      setProgress(newProgress);

      if (newProgress < duration) {
        rafRef.current = requestAnimationFrame(update);
      } else if (onCompleteRef.current) {
        onCompleteRef.current();
      }
    };

    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
    // progress нужен для стартовой точки, но включать его в зависимости нельзя
    // иначе анимация будет перезапускаться каждый кадр
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, duration]);

  return { progress, setProgress };
}
