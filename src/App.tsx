import './App.css'
import { Hero } from './components/Hero'
import Introduction from './components/Introduction'
import Services from './components/Services'

function App() {

  return (
    <>
      <div className='bg-[#121111] flex flex-col min-h-screen text-white'>
        <Hero />
        <Introduction />
        <Services />
      </div>
    </>
  )
}

export default App
