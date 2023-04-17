import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import './layout.css'
const Layout = (props) => {
  return (
    <Wrapper>
        <div>navigation</div>
        <main className='content'>{props.children}</main>
    </Wrapper>
  )
}

export default Layout