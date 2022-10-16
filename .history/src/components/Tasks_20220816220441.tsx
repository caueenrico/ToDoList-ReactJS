import { Trash } from "phosphor-react"
import { Itask } from "../App"
import style from "./Tasks.module.css"

interface Props{
  task: Itask;
  onDelete:()
}

export function Tasks( { task }: Props ){
  return(
<div className={style.labelContainer}>
        <button className={style.checkContainer}>
          <div />
        </button>
        <p>
          {task.title}
        </p>
        <button className={style.trash}>
          <Trash size={24} />
        
        </button>
      </div>
  )
}