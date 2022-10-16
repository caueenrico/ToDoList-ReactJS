import style from './Input.module.css'

export function Input(){
    return(
        <div className={style.}>
            <input type="text" />
            <button>Criar </button>
        </div>
    )
}