import { tracks } from "@/data/tracks.data";
import styles from "./Content.module.css";
import TrackCard from "./TrackCard";

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.trackList}>
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}
