import style from "./PanelTask.module.css";
import clipBoard from "../assets/Clipboard.svg";
import { Trash } from "phosphor-react";

export function PanelTasks() {
  return (
    <div className={style.containerPai}>
      <div className={style.container}>
        <div className={style.position}>
          <p className={style.createTask}>Tarefas criadas</p>
          <p className={style.numberTask}>0</p>
        </div>

        <div className={style.position}>
          <p className={style.createConclud}>Concluidas</p>
          <p className={style.numberTask}>0</p>
        </div>
      </div>

      {/* <div className={style.panelEmpty}>
        <img src={clipBoard}/>
        <span> <strong>Você ainda não tem tarefas cadastradas </strong>
        Crie tarefas e organize seus itens a fazer
        </span>
        
      </div> */}

      <label>
        <input type="checkbox" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          voluptates praesentium odit distinctio blanditiis neque{" "}
        </p>

        <Trash s/>


      </label>
    </div>
  );
}
