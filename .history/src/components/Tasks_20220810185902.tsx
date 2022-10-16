import { Trash } from "phosphor-react"
import style from "./Tasks.module.css"

interface Props

export function Tasks({tasks}:Props){
  return(
<div className={style.labelContainer}>
        <button className={style.checkContainer}>
          <div />
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          voluptates praesentium odit distinctio blanditiis neque{" "}
        </p>
        <button className={style.trash}>
          <Trash size={24} />
        
        </button>
      </div>
  )
}