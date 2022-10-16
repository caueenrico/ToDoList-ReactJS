import style from './Input.module.css'
import plus from '../assets/plus.svg'

interface Props{
    onAddTask: (tas) => void;
}

export function Input({onAddTask}: Props) {
    return (
        <div className={style.inputPosition}>

            <div>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    className={style.inputDecor}
                />

            </div>
            <button className={style.button}>Criar<img src={plus}/>
            </button>

        </div>

    )
}