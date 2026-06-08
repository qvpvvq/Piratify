import { usePlayerStore } from "@/store/PlayerStore";
import styles from "./VolumeController.module.css";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import VolumePopup from "./VolumePopup";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";

export default function VolumeController() {
  const volume = usePlayerStore((state) => state.volume);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  function handleClickOutside() {
    setIsOpen(false);
  }

  useClickAway(ref, handleClickOutside);
  return (
    <div
      ref={ref}
      className={styles.volumeContainer}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen && <VolumePopup />}
      <button className={styles.volumeButton}>
        {volume === 0 ? <VolumeX /> : volume < 0.5 ? <Volume1 /> : <Volume2 />}
      </button>
    </div>
  );
}
