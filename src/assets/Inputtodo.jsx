import React, { useState } from 'react'

function Inputtodo({addtask}) {
    const [inputto, setinputto]= useState("")
  return (
    <div>
        <input type="text" placeholder='Enter task' value={inputto} onChange={(e)=>setinputto(e.target.value)}/>
        <button onClick={()=>{addtask(inputto); setinputto("")}}>Add task</button>
    </div>
  )
}

export default Inputtodo