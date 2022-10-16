import style from "./PanelTask.module.css"


export function PanelTasks(){
  return(
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
  )
}