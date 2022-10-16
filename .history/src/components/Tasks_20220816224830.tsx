import { Trash } from "phosphor-react";
import { Itask } from "../App";
import style from "./Tasks.module.css";
import {BsFillCheckCircleFill} from 'react-icons/bs'

interface Props {
  task: Itask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ task, onDelete, onComplete }: Props) {
 

  return (
    <div className={style.labelContainer}>
      <button className={style.checkContainer} onClick={() => onComplete(task.id)} >
        {task.IsCompleted ? <BsFillCheckCircleFill/> : <div />}

      </button>
      <p className={task.IsCompleted ? style} >{task.title}</p>
      <button className={style.trash} onClick={() => onDelete(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
