import React, { useState } from 'react'
import { AnimatePresence, motion, useScroll } from "motion/react"
import Article from './Article'

//FRAMER TUTORIAL
export default function Main() {
    //whileInView --->  the whileInView prop defines a state to animate to/from when an element enters/leaves the viewport//Scroll animation
    //Initial-->Set the initial value of the animation
    //animate-->It is the most fundamental unit for animation like motion.
    //WhileJover-->Animation when someone hovers
    //WhileTap:When someone taps the element
    //style-->style property

    //IF you want to transition a certain animation,you can add the transition attribute and certain animation

    // Gesture animations
    // It supports hover, tap, drag, focus and inView.
    const { scrollYProgress } = useScroll()
    const [visible, setVisible] = useState(true)
    return (
        <motion.div >
            <motion.p whileHover={{ scale: 3 }}
                // whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
                initial={{ scale: 0 }} animate={{
                    scale: 2,
                    rotate: 360,
                    transition: { duration: 1 }
                }}>My portfolio website</motion.p>

            <motion.div className='border border-black bg-black w-40 h-40 m-auto my-4'
                animate={{}}
                style={{ x: -100 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}></motion.div>
            <motion.div className='border border-black bg-black w-40 h-40 m-auto my-4'
                style={{ x: -100 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.2 }}
                initial={{ transform: "translateX(-100px)" }}
                animate={{ transform: "translateX(0px)" }}
                transition={{ type: "spring" }}
            ></motion.div>

            {/* Animate presence is a component which do exit animation when an elment from the dom is removed */}

            <AnimatePresence>
                {visible && <motion.div className='border border-black bg-black w-40 h-40 m-auto my-4' onClick={() => {
                    setVisible(false)
                }}
                    initial={{ x: -880, opacity: 0 }}
                    animate={{ x: 880, opacity: 1 }}
                    style={{ originX: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 2 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    exit={{ opacity: 0 }}
                >
                </motion.div>}
            </AnimatePresence>


            <motion.div className=' bg-black w-40 h-40 m-auto my-4'
                //Values in animate can be set as a series of keyframes. This will animate through each value in sequence.
                animate={{ x: [0, 100, 0], transition: { duration: 3 } }}
                style={{ x: -100 }}
                whileHover={{ scale: 1.2, backgroundColor: "blue" }}
                whileTap={{ scale: 0.9, backgroundColor: 'pink' }}></motion.div>
        </motion.div>


    )
}
