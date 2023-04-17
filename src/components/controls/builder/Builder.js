import React from 'react'
import './builder.css'
const Builder = (props) => {
  return (
    <div className='builder'>
        <div>{props.title}</div>
        <button onClick={props.add} className='btn'>add</button>
        <button onClick={props.remove} className='btn'>remove</button>
    </div>
  )
}
 
export default Builder