import style from './Input.module.css'
import plus from '../assets/plus.svg'
import { FormEvent } from 'react';

interface Props{
    onAddTask: (taskTitle:string) => void;
}

export function Input({onAddTask}: Props) {
    const [title, set]

    function handleSubmit (event: FormEvent){
        event.preventDefault();

        onAddTask();
    }


    return (
        <form className={style.inputPosition} onSubmit={handleSubmit} >

            <div>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    className={style.inputDecor}
                />

            </div>
            <button className={style.button}>Criar<img src={plus}/>
            </button>

        </form>

    )
}