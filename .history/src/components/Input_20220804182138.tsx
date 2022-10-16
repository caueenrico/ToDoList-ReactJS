import style from './Input.module.css'

export function Input() {
    return (
        <div className={style.inputPosition}>


            <div>
                <input type="text" placeholder='' className={style.inputDecor} />

                
            </div>
            <button className={style.button}> Criar </button>

        </div>

    )
}