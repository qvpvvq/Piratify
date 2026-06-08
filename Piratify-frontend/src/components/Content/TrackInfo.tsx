import type { TrackInfoProps } from "@/types/types";
import styles from "./TrackInfo.module.css";
import { memo, useState } from "react";
import PlayPauseIcon from "./PlayPauseIcon";
import { Play } from "lucide-react";
import { usePlayerStore } from "@/store/PlayerStore";

export default memo(function TrackInfo({
  track,
  setCurrentTrack,
  isActive,
}: TrackInfoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const togglePlay = usePlayerStore((state) => state.togglePlay);
  console.log(`rendered ${track.title}`);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (isActive ? togglePlay() : setCurrentTrack(track))}
      className={`${styles.trackItem} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.iconContainer}>
        <button className={styles.isPlaying}>
          {isActive && <PlayPauseIcon />}
          {!isActive && isHovered && <Play className={styles.isPlayingIcon} />}
          <img
            src={track.iconURL}
            alt={track.title}
            className={styles.trackIcon}
          />
        </button>
      </div>
      <div className={styles.trackInfo}>
        <h3 className={styles.title}>{track.title}</h3>
        <p className={styles.artist}>{track.artist}</p>
      </div>
    </div>
  );
});
