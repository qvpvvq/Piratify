import "./ListButton.scss";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { LucideProps } from "lucide-react";

type IconComponent = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

interface ListButtonProps {
  children: React.ReactNode;
  Icon?: IconComponent;
}
export default function ListButton({ children, Icon }: ListButtonProps) {
  return (
    <button className="list-button">
      {Icon && <Icon className="list-button__icon" />}
      <span>{children}</span>
    </button>
  );
}
