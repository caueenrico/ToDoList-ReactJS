import style from './Input.module.css'
import plus from '../assets/plus.svg'


export function Input({}) {
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