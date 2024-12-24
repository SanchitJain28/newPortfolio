import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimatePresence, motion, useScroll } from "motion/react"

export default function FullStackImageCarousel(props) {
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
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-purple-600' id='title'>Version Control</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                    Proficient with Git and platforms like GitHub/GitLab for code collaboration.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-purple-600' id='title'>Deployment</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                    Using platforms like Heroku, Vercel, or Netlify for deploying full-stack applications.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-purple-600' id='title'>API Integration</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                    Connecting external APIs (e.g., payment gateways, third-party authentication).</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-purple-600' id='title'>Performance Optimization</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                    Frontend: Lazy loading, code splitting, and optimizing images.
                    Backend: Query optimization, indexing in MongoDB/SQL.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-purple-600' id='title'>Node.js - The Heart of Backend Development</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br />

                        Proficient in building scalable server-side applications.<br /><br />
                        Expertise in event-driven and non-blocking I/O.<br /><br />
                        Handling asynchronous operations for real-time applications.</motion.p>
                </motion.div>
                
            </Carousel>

        </>
    )
}
