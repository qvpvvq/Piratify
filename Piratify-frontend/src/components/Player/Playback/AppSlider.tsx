import Slider from "@mui/material/Slider";
interface Props {
  value: number;
  max: number;
  onChange: (value: number) => void;
}

export default function AppSlider({ value, max, onChange }: Props) {
  return (
    <Slider
      value={value}
      max={max}
      onChange={(_, value) => onChange(value as number)}
      sx={{
        flex: 1,
        mx: 2,
        color: "#01b601",
        "& .MuiSlider-thumb": {
          width: 10,
          height: 10,
          "&:hover, &.Mui-focusVisible, &.Mui-active": {
            boxShadow: "none",
          },
        },
      }}
    />
  );
}
