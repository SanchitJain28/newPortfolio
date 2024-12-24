import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimatePresence, motion, useScroll } from "motion/react"

export default function FrontEndImageCarousel(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        // whileHover={{ scale: 0.95, backgroundColor: "#172554" }}
        <>
            <Carousel responsive={responsive}>
                <motion.div className={`h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-blue-600' id='title'>1.HTML - The Foundation of the Web</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br/>

                        Crafting semantic and accessible markup.<br/><br/>
                        Expertise in HTML5 elements to create robust structures.<br/><br/>
                        Building SEO-friendly and responsive layouts.</motion.p>
                </motion.div>
                <motion.div className={`h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-blue-600' id='title'>CSS - Designing the Visual Experience</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br/>

                        Mastery of CSS3, including Flexbox and Grid.<br/><br/>
                        Building responsive, mobile-first designs.<br/><br/>
                        Implementing animations and transitions for enhanced user experience.</motion.p>
                </motion.div>
                <motion.div className={`h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-blue-600' id='title'>JavaScript - Adding Interactivity to the Web</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br/>

                        Proficiency in ES6+ features, including arrow functions and async/await.<br/><br/>
                        DOM manipulation, event handling, and API integration.<br/><br/>
                        Crafting dynamic and interactive user interfaces.</motion.p>
                </motion.div>
                <motion.div className={`h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-blue-600' id='title'>Bootstrap - Rapid and Responsive UI Design</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br/>

                        Utilizing Bootstrap’s grid system for consistent layouts.<br/><br/>
                        Customizing pre-built components for unique designs.<br/><br/>
                        Expertise in creating responsive, mobile-first websites.</motion.p>
                </motion.div>
                <motion.div className={`h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-blue-600' id='title'>Tailwind CSS - Modern Utility-First Framework</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br/>

                        Building designs rapidly with reusable utility classes.<br/><br/>
                        Expertise in customizing themes and configurations.<br/><br/>
                        Simplifying responsive design with Tailwind’s intuitive syntax.</motion.p>
                </motion.div>
                <motion.div className={`h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-blue-600' id='title'>Framer Motion - Bringing Animations to Life</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br/>

                        Creating smooth, fluid animations and transitions.<br/><br/>
                        Expertise in keyframe and spring-based motion.<br/><br/>
                        Adding interactivity with gesture-based animations.</motion.p>
                </motion.div>
                <motion.div className={`h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-blue-600' id='title'>React - Building Dynamic Web Applications</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br/>

                        Expertise in component-based architecture.<br/><br/>
                        Proficient with functional components and Hooks.<br/><br/>
                        Creating reusable, scalable UI components.</motion.p>
                </motion.div>
                <motion.div className={`h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-blue-600' id='title'>React State Management - Simplifying Complex Data Flows</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br/>
                        Managing global state with Context API, Redux, or Zustand.<br/><br/>
                        Handling asynchronous state updates with middleware like Redux-Thunk.<br/><br/>
                        Building efficient and scalable state management solutions.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-blue-600' id='title'>Chakra UI & Material UI - Crafting Beautiful Interfaces</motion.p>
                    <motion.p className='text-lg text-white my-4 font-mono'>
                        Description:
                        <br/>
                        Expertise in pre-built components for rapid prototyping.<br/><br/>
                        Customizing themes for branding consistency.<br/><br/>
                        Ensuring accessibility and responsiveness in designs.</motion.p>
                </motion.div>
            </Carousel>

        </>
    )
}
