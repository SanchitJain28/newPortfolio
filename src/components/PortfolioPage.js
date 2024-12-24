import React, { useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react"
import Article from './Article'
import FrontEndImageCarousel from './carousels/FrontendImageCarousel'
import BackendImageCarousel from './carousels/BackendImageCarosel'
import FullStackImageCarousel from './carousels/FullStackImageCarousel'
import ProjectsCarousel from './carousels/ProjectsCarousel'
import OtherSkillsCarousel from './carousels/OtherSkills'
import SocailsCarousel from './carousels/SocialsCarousel'

export default function PortfolioPage() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    return (
        <>
        {/* {console.log(Article().frontend)} */}
            {/* INTRO PART FOR PC*/}
            <div className="hidden lg:block lg:flex lg:justify-center">
                <div className="my-4 mx-8 ">
                    <motion.p className='text-3xl text-green-600 font-mono font-bold underline' animate={{y:[100,0], transition: { duration: 0.6 }}}>INTRODUCTION TO ME</motion.p>
                    <motion.div className={`bg-green-600 my-12 mx-4 rounded-xl  p-4`} animate={{ x: [500, 0], transition: { duration: 0.8 } }} whileHover={{scale:1.3}}>
                        <motion.p className={`text-2xl text-black font-mono font-bold`} >As a passionate frontend developer, I specialize in crafting engaging and interactive web experiences. Proficient in core technologies like HTML, CSS, and JavaScript, I bring designs to life with precision and creativity. My expertise extends to modern frameworks like React, where I build dynamic and responsive user interfaces. Leveraging UI libraries such as Chakra UI and Material UI, I ensure designs are not only visually appealing but also accessible and user-friendly. To add a layer of sophistication, I incorporate animations using Framer Motion, creating seamless and delightful transitions that enhance user interaction.</motion.p>
                    </motion.div>
                </div>
                <div className="my-4 mx-8 ">
                    <motion.p className='text-4xl text-yellow-600 font-mono font-bold underline' animate={{y:[100,0], transition: { duration: 0.6 }}}>MY OVERALL SKILLS</motion.p>
                    <motion.div className={`bg-yellow-600 p-4 my-12 mx-4  rounded-xl `} animate={{ x: [500, 0], transition: { duration: 0.8 } }}  whileHover={{scale:1.3}}>
                        <motion.p className={`text-2xl text-black font-mono font-bold`}>As a passionate frontend developer, I specialize in crafting engaging and interactive web experiences. Proficient in core technologies like HTML, CSS, and JavaScript, I bring designs to life with precision and creativity. My expertise extends to modern frameworks like React, where I build dynamic and responsive user interfaces. Leveraging UI libraries such as Chakra UI and Material UI, I ensure designs are not only visually appealing but also accessible and user-friendly. To add a layer of sophistication, I incorporate animations using Framer Motion, creating seamless and delightful transitions that enhance user interaction.</motion.p>
                    </motion.div>
                </div>
            </div>
            {/* INTRO PART FOR MOBILE */}
            <div className="my-4 mx-4 lg:hidden">
                    <motion.p className='text-3xl text-green-600 font-mono font-bold underline' animate={{y:[100,0], transition: { duration: 0.6 }}}>INTRODUCTION TO ME</motion.p>
                    <motion.div className={`bg-black my-4 rounded-xl  p-4`} animate={{ x: [500, 0], transition: { duration: 0.8 } }} whileHover={{scale:0.95}}>
                        <motion.p className={`text-lg text-white font-mono font-bold`} >As a passionate frontend developer, I create engaging web experiences using HTML, CSS, and JavaScript. Skilled in React, I build dynamic, responsive interfaces, leveraging Chakra UI and Material UI for accessible, user-friendly designs. With Framer Motion, I add seamless animations to enhance user interaction.</motion.p>
                        <div className="flex my-4">
                        <motion.button className='px-4 py-2 w-12 bg-black rounded-xl my-2 h-12 mr-4 text-white font-mono' whileInView={{scale:1.2}} ><i class="fa-brands fa-github"></i></motion.button>
                        <motion.button className='px-4 py-2 w-12 bg-pink-600 rounded-xl my-2 mr-4 h-12 text-white font-mono' whileInView={{scale:1.2}} ><i class="fa-brands fa-instagram"></i></motion.button>
                        <motion.button className='px-4 py-2 w-12 bg-red-600 rounded-xl my-2 h-12 mr-4 text-white font-mono' whileInView={{scale:1.2}} ><i class="fa-solid fa-file"></i></motion.button>
                        <motion.button className='px-4 py-2 w-12 bg-blue-600 rounded-xl my-2 h-12 mr-4 text-white font-mono' whileInView={{scale:1.2}} ><i class="fa-brands fa-whatsapp"></i></motion.button>
                        </div>
                        <div className="flex">

                        </div>
                   

                    </motion.div>
                </div>

            {/* //images */}
            {/* <div className="p-8">
                <RealImageCarousel />
            </div> */}

            {/* //FRONTEND SKILLS */}
            <div className="my-4 mx-4 ">
                <p className='text-4xl text-blue-800 font-mono font-bold my-6'>Frontend skills</p>
                <motion.div className="border border-blue-800 rounded-xl" whileHover={{ scale: 0.95 }}>
                    <FrontEndImageCarousel color="" textSize="text-2xl" content={Article().frontend}/>
                </motion.div>
            </div>

            {/* //BACKEND SKILLS */}
            <div className="my-4 mx-4">
                <p className='text-4xl text-red-600 font-mono font-bold my-6'>Backend skills</p>
                <motion.div className=" border border-red-600 rounded-xl" whileHover={{ scale: 0.95 }}>
                    <BackendImageCarousel color="" textSize="text-2xl" content={Article().frontend}/>
                </motion.div>
            </div>

            {/* //FULLSTACK DETAILS */}

            <div className="my-4 mx-4">
                <p className='text-4xl text-purple-600 font-mono font-bold my-6'>FullStack skills</p>
                <motion.div className="border border-purple-600  rounded-xl" whileHover={{ scale: 0.95 }}>
                    <FullStackImageCarousel color="" textSize="text-2xl" content={Article().frontend}/>
                </motion.div>
            </div>

            {/* //MY PROJECTS */}
            <div className="my-4 mx-4">
                <p className='text-4xl text-yellow-600 font-mono font-bold my-6'>My projects</p>
                <motion.div className="border border-yellow-600  rounded-xl" whileHover={{ scale: 0.95 }}>
                    <ProjectsCarousel color="" textSize="text-2xl" content={Article().frontend}/>
                </motion.div>
            </div>

            {/* //OTHER DETAILS */} 

            <div className="my-4 mx-4">
                <p className='text-4xl text-pink-600 font-mono font-bold my-6'>Other skills</p>
                <motion.div className="border border-pink-600  rounded-xl" whileHover={{ scale: 0.95 }}>
                    <OtherSkillsCarousel color="" textSize="text-2xl" content={Article().frontend} />
                </motion.div>
            </div>

            {/* //MYSOCIALS */}
             <div className="my-4 mx-4">
                <p className='text-4xl text-green-600 font-mono font-bold my-6'>HOW TO APPROACH ME?</p>
                <motion.div className=" rounded-xl" whileHover={{ scale: 0.95 }}>
                    <SocailsCarousel color="" textSize="text-2xl" content={Article().frontend}/>
                </motion.div>
            </div>


        </>

    )
}
