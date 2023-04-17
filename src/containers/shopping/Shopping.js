import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import { useState } from 'react'
import Controls from '../../components/controls/Controls'
const Shopping = (props) => {
  const [shopState,setShopState]=useState({
    products:{
      product1:0,
      product2:0,
      product3:0,
      product4:0,
    },
    totalPrice:0
      })
  return (
    <Wrapper>
        <Controls/>
    </Wrapper>
  )
}

export default Shopping