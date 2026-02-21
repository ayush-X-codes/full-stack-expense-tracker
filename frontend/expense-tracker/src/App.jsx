import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/Login'
import Transactions from './pages/Transactions/Transactions'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/transactions' element={<Transactions />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
