import styles from "./VolumePopup.module.css";

interface VolumePopupProps {
  isHovered: boolean;
}
export default function VolumePopup({ isHovered }: VolumePopupProps) {
  return (
    <p
      className={
        isHovered ? (styles.popupWindow, styles.opened) : styles.popupWindow
      }
    >
      aura
    </p>
  );
}
