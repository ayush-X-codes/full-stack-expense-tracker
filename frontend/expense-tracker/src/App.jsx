import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
