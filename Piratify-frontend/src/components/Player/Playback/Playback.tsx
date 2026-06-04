import "./Playback.scss";
import { useEffect, useState } from "react";
import AppSlider from "./AppSlider";
import { formatTime } from "@/utils/formatTime";
import type { PlaybackProps } from "@/types/types";

export default function Playback({ audioRef }: PlaybackProps) {
  const [timepassed, setTimePassed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    const handleLoadedMetadata = () => {
      setDuration(audio?.duration || 0);
    };
    audio?.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () =>
      audio?.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, [audioRef]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      if (!isSeeking) {
        setTimePassed(audioRef.current?.currentTime || 0);
      }
    };
    audio?.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio?.removeEventListener("timeupdate", handleTimeUpdate);
  }, [isSeeking, audioRef]);

  return (
    <div className="playback">
      <div className="playback-timepassed">
        <span>{formatTime(timepassed)}</span>
      </div>
      <AppSlider
        value={timepassed}
        max={duration}
        onChange={(value) => setTimePassed(value)}
        onChangeCommitted={(value) => {
          if (audioRef.current) audioRef.current.currentTime = value;
        }}
        onSeekStart={() => setIsSeeking(true)}
        onSeekEnd={() => setIsSeeking(false)}
      />
      <div className="playback-duration">
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
