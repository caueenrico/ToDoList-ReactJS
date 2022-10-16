import style from './Input.module.css'

export function Input(){
    return(
        <div>
            <input type="text" className={style.inputDecor}/>
            <button className={style.button}>Criar </button>
        </div>
    )
}