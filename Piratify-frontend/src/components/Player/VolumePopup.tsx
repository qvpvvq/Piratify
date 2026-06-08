import styles from "./VolumePopup.module.css";
import { Slider } from "@mui/material";
import { usePlayerStore } from "@/store/PlayerStore";

export default function VolumePopup() {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.popupWindow}>
      <Slider
        value={volume * 100}
        max={100}
        onChange={(_, value) => {
          setVolume(value / 100);
        }}
        sx={{
          color: "var(--primary-text-color)",
          "& .MuiSlider-thumb": {
            width: 10,
            height: 10,
            "&:hover, &.Mui-focusVisible, &.Mui-active": {
              boxShadow: "none",
            },
          },
        }}
        orientation="vertical"
      />
    </div>
  );
}
