import "./App.scss";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Page() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Content />
      <Player />
    </div>
  );
}
