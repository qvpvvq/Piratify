import "./Playback.scss";
import { useEffect, useState } from "react";
import AppSlider from "./AppSlider";
import { formatTime } from "@/utils/formatTime";

export default function Playback({ isPlaying }: { isPlaying: boolean }) {
  const [timepassed, setTimePassed] = useState(0);
  const duration = 98;
  const [isSeeking, setIsSeeking] = useState(false);
  useEffect(() => {
    const handleMouseUp = () => setIsSeeking(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  useEffect(() => {
    const tick = () =>
      setTimePassed((prev) => {
        if (prev >= duration) return prev;
        return prev + 1;
      });
    if (!isPlaying || isSeeking) return;
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, isSeeking]);

  return (
    <div className="playback">
      <div className="playback-timepassed">
        <span>{formatTime(timepassed)}</span>
      </div>
      <AppSlider
        value={timepassed}
        max={duration}
        onChange={(value) => setTimePassed(value)}
        onSeekStart={() => setIsSeeking(true)}
        onSeekEnd={() => setIsSeeking(false)}
      />
      <div className="playback-duration">
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
