import React from 'react'
import './builder.css'
const Builder = (props) => {
  return (
    <div className='builder'>
        <div>{props.title}</div>
        <button className='btn'>add</button>
        <button className='btn'>remove</button>
    </div>
  )
}
 
export default Builder