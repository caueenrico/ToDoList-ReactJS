import style from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { PanelTasks } from "./components/PanelTask";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Input />
      <PanelTasks />
      
    </>
  );
}
