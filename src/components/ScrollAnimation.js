import React from 'react'
import { AnimatePresence, motion, useScroll } from "motion/react"
import Article from './Article'
export default function ScrollAnimation() {
    const { scrollYProgress } = useScroll()
    return (
        <>
            <motion.div
            className="fixed w-full h-8 border border-black bg-red-600" 
            style={{ scaleX: scrollYProgress,transformOrigin:0 }}
            >
            </motion.div>
            <Article />
        </>


    )
}
