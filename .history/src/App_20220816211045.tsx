import { useState } from "react";
import style from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { PanelTasks } from "./components/PanelTask";
import { Tasks } from "./components/Tasks";
import "./global.css";

export interface Itask{
  id: string;
  title: string;
  IsCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState <Itask []> ([
    {
      id: "teste"
    },
  ])

  return (
    <>
      <Header />
      <Input />
      <PanelTasks tasks={tasks} />
      

    </>
  );
}
