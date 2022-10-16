import { Trash } from "phosphor-react"
import { Itask } from "../App"
import style from "./Tasks.module.css"

interface Props{
  task: Itask;
  onDelete:(taskId: string) => void;
}

export function Tasks( { task, onDelete }: Props ){
  return(
<div className={style.labelContainer}>
        <button className={style.checkContainer}>
          <div />
        </button>
        <p>
          {task.title}
        </p>
        <button className={style.trash} onClick={()} >
          <Trash size={24} />
        
        </button>
      </div>
  )
}