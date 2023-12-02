import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './components/navber'
import Banner from './components/Banner'
import Stack from './components/Stack'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber />
      <Banner />
      <Stack />
      <Projects/>
    </>
  )
}

export default App
