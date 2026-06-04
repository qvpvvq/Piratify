import type { TrackInfoProps } from "@/types/types";
import styles from "./TrackInfo.module.css";

export default function TrackInfo({ track, onClick }: TrackInfoProps) {
  return (
    <div onClick={onClick} className={styles.trackItem}>
      <div className={styles.iconContainer}>
        <img
          src={track.iconURL}
          alt={track.title}
          className={styles.trackIcon}
        />
      </div>
      <div className={styles.trackInfo}>
        <h3 className={styles.title}>{track.title}</h3>
        <p className={styles.artist}>{track.artist}</p>
      </div>
    </div>
  );
}
