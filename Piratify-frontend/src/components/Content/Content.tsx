import { tracks } from "@/data/tracks.data";
import styles from "./Content.module.css";
import TrackInfo from "@/components/Content/TrackInfo";
import { usePlayerStore } from "@/store/PlayerStore";
export default function Content() {
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const setCurrentTrack = usePlayerStore((state) => state.setCurrentTrack);
  return (
    <div className={styles.content}>
      <div className={styles.trackList}>
        {tracks.map((track) => (
          <TrackInfo
            isActive={track.id === currentTrack?.id}
            key={track.id}
            track={track}
            setCurrentTrack={setCurrentTrack}
          />
        ))}
      </div>
    </div>
  );
}
