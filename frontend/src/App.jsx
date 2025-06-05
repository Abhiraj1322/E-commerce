import React from 'react'

import Home from '../components/Home'
import Layout from '../components/Layout'
import Cart from '../components/Cart'
import { Routes,Route } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
const App = () => {
  return (
    
    <Routes>
  <Route  path="/" element={<Layout/>}> 
<Route index element={<Home/>}/>
<Route path='/cart' element={<Cart/>}/>

  </Route>
<Route path='/register' element={<Register/>}/> 
<Route path='/login' element={<Login/>}/>

    </Routes>
  )
}

export default App
