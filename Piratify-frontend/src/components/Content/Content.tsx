import { tracks } from "@/data/tracks.data";
import styles from "./Content.module.css";
import TrackInfo from "@/components/Content/TrackInfo";
import { useStore } from "@/store/PlayerStore";
export default function Content() {
  const setCurrentTrack = useStore((state) => state.setCurrentTrack);
  return (
    <div className={styles.content}>
      <div className={styles.trackList}>
        {tracks.map((track) => (
          <TrackInfo
            onClick={() => setCurrentTrack(track)}
            key={track.id}
            track={track}
          />
        ))}
      </div>
    </div>
  );
}
