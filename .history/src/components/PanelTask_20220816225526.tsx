import style from "./PanelTask.module.css";
import clipBoard from "../assets/Clipboard.svg";
import { Trash } from "phosphor-react";
import { Tasks } from "./Tasks";
import { useState } from "react";
import { Itask } from "../App";

interface Props {
  tasks: Itask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function PanelTasks({ tasks, onDelete, onComplete}: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((tasks) => tasks.IsCompleted).length ;

  return (
    <div className={style.containerPai}>

      <div className={style.container}>

        <div className={style.position}>
          <p className={style.createTask}>Tarefas criadas</p>
          <p className={style.numberTask}>{tasksQuantity}</p>
        </div>

        <div className={style.position}>
          <p className={style.createConclud}>Concluidas</p>
          <p className={style.numberTask}>{completedTasks} de {tasksQuantity}</p>
        </div>
      </div>

      {/* <div className={style.panelEmpty}>
        <img src={clipBoard}/>
        <span> <strong>Você ainda não tem tarefas cadastradas </strong>
        Crie tarefas e organize seus itens a fazer
        </span>
        
      </div> */}

      <div>
        {tasks.map((task) => (
          <Tasks key={task.id} task={task}  onDelete={onDelete} onComplete={onComplete} />
        ))}

        { tasks.length <= 0 && (
          <div className={style.panelEmpty}>
          <img src={clipBoard}/>
          <span> <strong>Você ainda não tem tarefas cadastradas </strong>
          Crie tarefas e organize seus itens a fazer
          </span>
        </div>
        )}
      </div>
    </div>
  );
}
