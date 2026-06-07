import styles from "./NowPlaying.module.css";
import { usePlayerStore } from "@/store/PlayerStore";
import { useEffect, memo } from "react";
export default memo(function NowPlaying() {
  const currentTrack = usePlayerStore((state) => state.currentTrack);

  useEffect(() => {
    if (currentTrack) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentTrack.title,
        artist: currentTrack.artist,
        artwork: [
          { src: currentTrack.iconURL, sizes: "96x96", type: "image/jpg" },
        ],
      });
    }
  }, [currentTrack]);
  if (!currentTrack) return null;
  return (
    <div className={styles.nowPlaying}>
      <div className={styles.imgContainer}>
        <img
          className={styles.trackImg}
          src={currentTrack.iconURL}
          alt={currentTrack.title}
        />
      </div>
      <div className={styles.trackInfo}>
        <span className={styles.artist}>{currentTrack.artist}</span>
        <span className={styles.title}>{currentTrack.title}</span>
      </div>
    </div>
  );
});
