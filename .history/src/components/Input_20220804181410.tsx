import style from './Input.module.css'

export function Input() {
    return (
        <div className=''>


            <div>
                <input type="text" className={style.inputDecor} />

                
            </div>
            <button className={style.button}> Criar </button>

        </div>

    )
}