import './App.css'
import { Hero } from './sections/Hero'
import Introduction from './sections/Introduction'
import Services from './sections/Techstack'
import Projects from './sections/Projects'
import Lenis from 'lenis'
import Outro from './sections/Outro'



function App() {
  // Initialize Lenis
  new Lenis({
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
