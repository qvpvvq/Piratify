import type { Track } from "@/types/types";
import styles from "./TrackCard.module.css";
import { useStore } from "@/store/PlayerStore";

export default function TrackCard({ track }: { track: Track }) {
  const setCurrentTrack = useStore((state) => state.setCurrentTrack);
  return (
    <div onClick={() => setCurrentTrack(track)} className={styles.trackItem}>
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
      <audio src={track.fileURL} className={styles.trackPlayer} />
    </div>
  );
}
