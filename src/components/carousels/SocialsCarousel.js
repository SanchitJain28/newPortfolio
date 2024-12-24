import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimatePresence, motion, useScroll } from "motion/react"

export default function SocailsCarousel(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
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
                <motion.div className={`min-h-96 bg-green-600 p-4 mx-4  rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-black my-4' id='title'>Whatsapp</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                    Proficient with Git and platforms like GitHub/GitLab for code collaboration.</motion.p>
                    <motion.button className='px-8 py-4 mx-4 bg-black rounded-xl my-4 text-white font-mono' whileInView={{scale:1.2}} >Message</motion.button>
                </motion.div>
                <motion.div className={`min-h-96 bg-purple-600 p-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-black my-4' id='title'>Instagram</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                    Proficient with Git and platforms like GitHub/GitLab for code collaboration.</motion.p>
                    <motion.button className='px-8 py-4 mx-4 bg-black rounded-xl my-4 text-white font-mono' whileInView={{scale:1.2}} >Message</motion.button>
                </motion.div>
                <motion.div className={`min-h-96 bg-blue-600 p-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-white my-4' id='title'>Call me</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                    Proficient with Git and platforms like GitHub/GitLab for code collaboration.</motion.p>
                    <motion.button className='px-8 py-4 mx-4 bg-black rounded-xl my-4 text-white font-mono' whileInView={{scale:1.2}} >Message</motion.button>
                </motion.div>
            </Carousel>

        </>
    )
}
