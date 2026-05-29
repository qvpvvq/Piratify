import "./Sidebar.scss";
import ListButton from "./ListButton";
import { ListMusic, Heart, History } from "lucide-react";
import tokyo from "@/assets/video/tokyo-ghoul-kaneki-ken.mp4";

const SidebarItems = [
  { id: "playlists", label: "Плейлисты", icon: ListMusic },
  { id: "favorite", label: "Избранное", icon: Heart },
  { id: "history", label: "История", icon: History },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {SidebarItems.map((item) => (
          <li className="sidebar-item" key={item.id}>
            <ListButton Icon={item.icon}>{item.label}</ListButton>
          </li>
        ))}
      </ul>
      <video src={tokyo} autoPlay muted loop></video>
    </div>
  );
}
