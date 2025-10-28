import './App.css'
import { Hero } from './components/Hero'
import Introduction from './components/Introduction'
import Services from './components/Services'
import Hero2 from './components/hero2'

function App() {

  return (
    <>
      <div className='bg-black flex flex-col min-h-screen text-white'>
        <Hero />
        <Introduction />
        <Services />
      </div>
    </>
  )
}

export default App
