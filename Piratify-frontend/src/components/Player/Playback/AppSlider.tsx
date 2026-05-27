import Slider from "@mui/material/Slider";
interface AppSliderProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
  onSeekEnd: () => void;
  onSeekStart: () => void;
}

export default function AppSlider({
  value,
  max,
  onChange,
  onSeekEnd,
  onSeekStart,
}: AppSliderProps) {
  return (
    <Slider
      value={value}
      max={max}
      onChange={(_, value) => onChange(value as number)}
      onPointerDown={onSeekStart}
      onChangeCommitted={onSeekEnd}
      sx={{
        height: 2,
        flex: 1,
        mx: 2,
        color: "#01b601",
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
