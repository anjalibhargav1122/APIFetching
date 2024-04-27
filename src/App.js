import React from 'react'
import Contact from './Contact'

import Cloth from './Cloth'
import Jewellary from './Jewellary'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Contact/>}/>
        <Route path='/cloth' element={<Cloth/>}/>
        <Route path='/jewellary' element={<Jewellary/>}/>
       


        </Routes></BrowserRouter>
        
    </div>
  )
}

export default App