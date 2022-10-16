import style from "./PanelTask.module.css";
import clipBoard from "../assets/Clipboard.svg";
import { Trash } from "phosphor-react";
import { Tasks } from "./Tasks";

import { useState } from 'react'

export interface Itask{
  id: string;
  title: string;
  isComplete: boolean;
}

export function PanelTasks() {
  const [tasks, setTasks] = useState <Itask[]> ([]);

  return (
    <div className={style.containerPai}>
      <div className={style.container}>
        <div className={style.position}>
          <p className={style.createTask}>Tarefas criadas</p>
          <p className={style.numberTask}>0</p>
        </div>

        <div className={style.position}>
          <p className={style.createConclud}>Concluidas</p>
          <p className={style.numberTask}>1 de 2</p>
        </div>
      </div>

      {/* <div className={style.panelEmpty}>
        <img src={clipBoard}/>
        <span> <strong>Você ainda não tem tarefas cadastradas </strong>
        Crie tarefas e organize seus itens a fazer
        </span>
        
      </div> */}

      <div>
        <Tasks/>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}
