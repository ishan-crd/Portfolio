import './App.css'
import { Hero } from './components/Hero'
import Introduction from './components/Introduction'
import Services from './components/Techstack'
import Projects from './components/Projects'
import Lenis from 'lenis'
import Outro from './components/Outro'



function App() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // const { scrollYProgress } = useScroll();
  // const [homeButton, setHomeButton] = useState<boolean>(false);

  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.on("change", (latest: number) => {
  //     setHomeButton(latest > 0.09); // adjust threshold if you want
  //   });

  //   return () => unsubscribe();
  // }, [scrollYProgress]);


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
