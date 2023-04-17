import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import { useState } from 'react'
import Controls from '../../components/controls/Controls'
import Modal from '../../components/Ui/Modal/Modal'
const Shopping = (props) => {
  const prices={
      product1:100,
      product2:200,
      product3:300,
      product4:400,
  }
  const [shopState,setShopState]=useState({
    products:{
      product1:0,
      product2:0,
      product3:0,
      product4:0,
    },
    totalPrice:0
      })
     const addProductHandler=(type)=>{
      const prvCont=shopState.products[type]
      const updateCont=prvCont+1
      const updateProduct={
        ...shopState.products
      }
      updateProduct[type]=updateCont
     const priceAdd= prices[type]
     const prvPrice=shopState.totalPrice
     const updatePrice =prvPrice+priceAdd
     setShopState({
      totalPrice:updatePrice,
      products:updateProduct
     })
    console.log("ok add");
     }
     const removeProductHandler=(type)=>{
      //cont
      const prvCont=shopState.products[type]
      const updateCont=prvCont-1
      const updateProduct={
        ...shopState.products
      } 
      updateProduct[type]=updateProduct

      //price
      const priceSub =prices[type]
      const prvPrice=shopState.totalPrice
      const updatePrice =prvPrice-priceSub
      setShopState({
        totalPrice:updatePrice,
        products:updateProduct
       })
       console.log('remove ok');
     }
  return (
    <Wrapper>
      <Modal/>
        <Controls productAdd={addProductHandler} productRemove={removeProductHandler} total={shopState.totalPrice}/>
    </Wrapper>
  )
}

export default Shopping