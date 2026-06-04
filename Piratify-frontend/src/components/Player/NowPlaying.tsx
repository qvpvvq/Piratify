import type { Track } from "@/types/types";
import styles from "./NowPlaying.module.css";
export default function NowPlaying({ track }: { track: Track }) {
  return (
    <div className={styles.nowPlaying}>
      <div className={styles.imgContainer}>
        <img
          className={styles.trackImg}
          src={track.iconURL}
          alt={track.title}
        />
      </div>
      <div className={styles.trackInfo}>
        <span className={styles.artist}>{track.artist}</span>
        <span className={styles.title}>{track.title}</span>
      </div>
    </div>
  );
}
