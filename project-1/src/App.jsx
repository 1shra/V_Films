import { useState } from 'react'
import Hero from './components/Hero'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
