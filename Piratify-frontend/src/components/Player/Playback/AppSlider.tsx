import Slider from "@mui/material/Slider";
interface AppSliderProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
  onSeekEnd: () => void;
  onSeekStart: () => void;
  onChangeCommitted: (value: number) => void;
}

export default function AppSlider({
  value,
  max,
  onChange,
  onSeekEnd,
  onSeekStart,
  onChangeCommitted,
}: AppSliderProps) {
  return (
    <Slider
      value={value}
      max={max}
      onChange={(_, value) => onChange(value as number)}
      onChangeCommitted={(_, value) => {
        onChangeCommitted(value as number);
        onSeekEnd();
      }}
      onPointerDown={onSeekStart}
      sx={{
        height: 2,
        flex: 1,
        mx: 2,
        color: "var(--brand-color)",
        "& .MuiSlider-thumb": {
          width: 10,
          height: 10,
          opacity: 0,
          "&:hover, &.Mui-focusVisible, &.Mui-active": {
            boxShadow: "none",
            opacity: 1,
          },
        },
        "&:hover .MuiSlider-thumb": {
          opacity: 1,
        },
      }}
    />
  );
}
