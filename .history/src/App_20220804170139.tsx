
import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import './global.css'


export function App() {
 
  return (
    <div .wrapper{
      width: 100%;
      max-width: 70rem;
      margin: 2rem auto;
  
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 256px 1fr;
      gap: 2rem;
      align-items: flex-start;
  }>
      <Header/>

      <div>
        <Input/>
      </div>
    </div>
  )
}


