import { useState } from 'react'
import './App.css'
import Activities from './components/Activities'
import Contents from './components/Contents'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#181E2A]">
      <Navbar />
      <Header />
      <main className='bg-#181E2A px-10'>  
        <Activities />
        <Contents />
      </main>
    </div>
  )
}

export default App
