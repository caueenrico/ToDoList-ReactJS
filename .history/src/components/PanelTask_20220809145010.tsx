import style from "./PanelTask.module.css";
import clipBoard from "../assets/ClipB"

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

      <div>
        <img src="" />
      </div>
    </div>
  );
}
