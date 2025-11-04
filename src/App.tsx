import './App.css'
import { Hero } from './components/Hero'
import Introduction from './components/Introduction'
import Services from './components/Techstack'
import Projects from './components/Projects'
import Lenis from 'lenis'
import Outro from './components/Outro'



function App() {
  // Initialize Lenis
  const _lenis = new Lenis({
    autoRaf: true,
  });

  return (
    <>
      <div className='bg-[#121111] flex flex-col min-h-screen text-white'>
        <Hero />
        <Introduction />
        <Services />
        <Projects />
        <Outro />
      </div>
    </>
  )
}

export default App
