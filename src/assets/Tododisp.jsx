import React from 'react'
import { MdDeleteSweep } from "react-icons/md";


function Tododisp(props) {
  return (
    <div>
        <ul>
            <li>{props.item}
                <span onClick={()=>props.deltodo(props.index)}><MdDeleteSweep /></span>
            </li>
        </ul>
    </div>
  )
}

export default Tododisp