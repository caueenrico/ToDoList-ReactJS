import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { PanelTasks } from './components/PanelTask'
import './global.css'

export interface Itask{
  id: string,
  <title></title>

}


export function App() {
 
  return (
    <div>
      <Header/>

      <div>
        <Input/> 
      </div>

      <div>
        <PanelTasks/>
      </div>
      
    </div>
  )
}

