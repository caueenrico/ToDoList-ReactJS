import { useState } from 'react'
import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { PanelTasks } from './components/PanelTask'
import './global.css'

export interface Itask{
  id: string;
  title: string;
  isComplete: boolean;
}


export function App() {
 const [tasks, setTasks] = useState([])

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


