import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputtodo from './assets/Inputtodo'
import Tododisp from './assets/Tododisp'



function App() {
  const [todolist,settodolist]=useState([])
  function inputtask(list){
    console.log(list);
    settodolist([...todolist,list])
    
  }

  function deltodo(index){
    let sampletodo=[...todolist]
    sampletodo.splice(index,1)
    settodolist(sampletodo)
  }


  return (
    <>
      <h1>ToDo App</h1>
    <Inputtodo addtask={inputtask}/>
    {
      todolist.map((t,i)=>{
        return(
          <Tododisp item = {t} key={i} deltodo={deltodo} index={i}/>
        )
      })
    }
    </>
  )
}

export default App
