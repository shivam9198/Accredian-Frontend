import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Landingpage from './components/Landingpage'

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path = "/" element = {<Body/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App