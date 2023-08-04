import { useState } from 'react'
import './App.css'
import Home from './pages/home'
                      


function App() {
  const backgroundColor= "#4682A9";
  const primaryColor= "#F6F4EB";
  document.body.style.backgroundColor = "#F6F4EB";
  return (
    <>
    <Home backgroundColor={backgroundColor} primaryColor={primaryColor}/>
    </>
  )
}

export default App
