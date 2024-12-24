import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import ScrollAnimation from './components/ScrollAnimation';
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react"
import PortfolioPage from './components/PortfolioPage';


function App() {
  const { scrollYProgress } = useScroll()
  //SPring animationn
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return (
    <>
     <motion.div className="fixed z-10 w-full h-4  bg-blue-600"
        style={{ scaleX,transformOrigin:0}}></motion.div> 
    <div className="min-h-screen bg-black pb-20 pt-4 lg:px-28">
    <PortfolioPage/>
    </div>
      {/* <motion.div className="fixed w-full h-8 border border-black bg-red-600"
        style={{ scaleX,transformOrigin:0}}></motion.div> */}
      {/* <Main/> */}
      {/* <ScrollAnimation /> */}

    </>

  );
}

export default App;
