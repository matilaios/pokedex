import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './pages/Components/navbar';



function App() {
  

  return <>
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<HomePage/>} />




 </Routes>
 
 
 
 
 </BrowserRouter>








    </>
}

export default App