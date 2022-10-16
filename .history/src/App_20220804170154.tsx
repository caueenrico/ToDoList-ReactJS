
import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import './global.css'


export function App() {
 
  return (
    <div className={style.wrapper}>
      <Header/>

      <div>
        <Input/>
      </div>
    </div>
  )
}


