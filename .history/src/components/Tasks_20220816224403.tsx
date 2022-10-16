import { Trash } from "phosphor-react";
import { Itask } from "../App";
import style from "./Tasks.module.css";
import {BsFillCheckCircleFill} from 'react-icons/bs'

interface Props {
  task: Itask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ task, onDelete }: Props) {
 const isCompleted = true;

  return (
    <div className={style.labelContainer}>
      <button className={style.checkContainer}>
        {isCompleted ? <BsFillCheckCircleFill/> : <div />}
      </button>
      <p>{task.title}</p>
      <button className={style.trash} onClick={() => onDelete(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
