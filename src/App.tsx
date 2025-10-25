import './App.css'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='bg-black flex flex-col min-h-screen text-white'>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
