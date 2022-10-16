import style from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { PanelTasks } from "./components/PanelTask";
import { Tasks } from "./components/Tasks";
import "./global.css";




export function App() {
  const [tasks, setTasks] = useState <Itask []>([])
  
  return (
    <>
      <Header />
      <Input />
      <PanelTasks />
      

    </>
  );
}
