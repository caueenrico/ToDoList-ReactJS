import { useState } from "react";
import style from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { PanelTasks } from "./components/PanelTask";
import { Tasks } from "./components/Tasks";
import "./global.css";

export interface Itask {
  id: string;
  title: string;
  IsCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Itask[]>([
    { 
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        IsCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newtask = tasks.filter((task) => task.id !== taskId);
    setTasks(newtask);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          IsCompleted: !task.IsCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header />
     
      <Input onAddTask={addTask} />
     
      <PanelTasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  );
}
