import style from "./PanelTask.module.css";
import clipBoard from "../assets/Clipboard.svg";
import { Trash } from "phosphor-react";
import { Tasks } from "./Tasks";
import { useState } from "react";
import { Itask } from "../App";

interface Props {
  tasks: Itask[];
}

export function PanelTasks({ tasks }: Props) {
  const tasksQuantity = tasks.length;

  return (
    <div className={style.containerPai}>

      <div className={style.container}>

        <div className={style.position}>
          <p className={style.createTask}>Tarefas criadas</p>
          <p className={style.numberTask}>{tasksQuantity}</p>
        </div>

        <div className={style.position}>
          <p className={style.createConclud}>Concluidas</p>
          <p className={style.numberTask}>1 de {}</p>
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
          <Tasks key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
