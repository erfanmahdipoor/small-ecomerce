import React from 'react'
import './controls.css' 
import Builder from './builder/Builder'
const Controls = () => {
    const product =[
        {title:"product1",type:"product1"},
        {title:"product2",type:"product2"},
        {title:"product3",type:"product3"},
        {title:"product4",type:"product4"},
    ]
  return (
    <div  className='controls'>
    {product.map((item)=>{ 
                           return <Builder key={item.title} title={item.title}/>})}
    </div>
  )
}

export default Controls