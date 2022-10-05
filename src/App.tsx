import { useState } from 'react'
import './App.css'
import Activities from './components/Activities'
import Comments from './components/Comments'
import Contents from './components/Contents'
import GetEary from './components/GetEary'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <main className='md:w-3/4 bg-[#181E2A] mx-auto'>
        <Navbar />
        <Header />
        <div className=''>  
          <section className='w-[90%] mx-auto pb-72'>
            <Activities />
            <Contents />
            <Comments />
            <GetEary />
          </section>
          <section className='bg-slate-400 relative'>
            <div className="absolute top-[20px]">

            <Comments />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
