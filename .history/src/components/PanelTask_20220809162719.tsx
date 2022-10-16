import style from "./PanelTask.module.css";
import clipBoard from "../assets/Clipboard.svg"

export function PanelTasks() {
  return (
    <div className={style.containerPai}>
      <div className={style.container}>

        <div className={style.position}>
          <p className={style.createTask}>Tarefas criadas</p>
          <p className={style.numberTask}>0</p>
        </div>

        <div className={style.position}>
          <p>Concluidas</p>
          <p className={style.numberTask}>0</p>
        </div>
      </div>

      <div className={style.panelEmpty}>
        <img src={clipBoard}/>
        <span> <strong>Você ainda não tem tarefas cadastradas</strong></span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
