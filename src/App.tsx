import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-slate-800">
      <Navbar />
      <Header />
    </div>
  )
}

export default App
