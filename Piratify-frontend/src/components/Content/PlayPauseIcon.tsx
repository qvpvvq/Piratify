import { Play, Pause } from "lucide-react";
import { usePlayerStore } from "@/store/PlayerStore";
import styles from "./TrackInfo.module.css";

export default function PlayPauseIcon({ isHovered }: { isHovered: boolean }) {
  const isPlaying = usePlayerStore((state) => state.isPlaying);

  return isPlaying ? (
    <Pause className={styles.isPlayingIcon} />
  ) : isHovered ? (
    <Play className={styles.isPlayingIcon} />
  ) : null;
}
