import React from 'react'
import './controls.css' 
import Builder from './builder/Builder'
const Controls = (props) => {
    const product =[
        {title:"product1",type:"product1"},
        {title:"product2",type:"product2"},
        {title:"product3",type:"product3"},
        {title:"product4",type:"product4"},
    ]
  return (
    <div  className='controls'>
        <div>
            <p>totalPrice:{props.total}</p>
        </div>
    {product.map((item)=>{ 
                           return <Builder key={item.title}
                                           title={item.title} 
                                           add={()=>props.productAdd(item.type)}
                                           remove={()=>{props.productRemove(item.type)}}
                            />})}
                            <button className='order-btn'>order</button>
    </div>
  )
}

export default Controls