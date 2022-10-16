import style from "./PanelTask.module.css";
import clipBoard from "../assets/Clipboard.svg"

export function PanelTasks() {
  return (
    <div >
      <div className={style.container}>

        <div>
          <p>Tarefas criadas</p>
          <p>0</p>
        </div>

        <div>
          <p>Concluidas</p>
          <p>0</p>
        </div>
      </div>

      <div className={styled.panelEmpty}>
        <img src={clipBoard}/>
        <span> <strong>Você ainda não tem tarefas cadastradas</strong></span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
