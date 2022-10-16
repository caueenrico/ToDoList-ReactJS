import style from './Input.module.css'
import plus from '../assets/plus.svg'

interface Props{
    onAddTask: (taskTitle:string) => void;
}

export function Input({onAddTask}: Props) {

    function hand


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