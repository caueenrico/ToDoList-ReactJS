import style from './Input.module.css'
import plus from '../assets/plus.svg'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props{
    onAddTask: (taskTitle:string) => void;
}

export function Input({onAddTask}: Props) {
    const [title, setTitle] = useState ('')

    function handleSubmit (event: FormEvent){
        event.preventDefault();

        onAddTask(title);
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle
    }

    return (
        <form className={style.inputPosition} onSubmit={handleSubmit} >

            <div>
                <input
                    placeholder='Adicione uma nova tarefa'
                    onChange={onChangeTitle}
                    value={title}
                    className={style.inputDecor}
                />

            </div>
            <button className={style.button}>Criar<img src={plus}/>
            </button>

        </form>

    )
}