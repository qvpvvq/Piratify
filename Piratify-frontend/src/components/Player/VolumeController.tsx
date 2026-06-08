import { usePlayerStore } from "@/store/PlayerStore";
import styles from "./VolumeController.module.css";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import VolumePopup from "./VolumePopup";
import { useState } from "react";
export default function VolumeController() {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const [isHovered, setIsHovered] = useState(true);

  return (
    <div
      className={styles.volumeContainer}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
    >
      <VolumePopup isHovered={isHovered} />
      <button className={styles.volumeButton} onClick={() => setVolume(0)}>
        {volume === 0 ? <VolumeX /> : volume < 0.5 ? <Volume1 /> : <Volume2 />}
      </button>
    </div>
  );
}
