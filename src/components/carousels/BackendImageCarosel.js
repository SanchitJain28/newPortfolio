import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimatePresence, motion, useScroll } from "motion/react"

export default function BackendImageCarousel(props) {
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
                    <motion.p className='text-3xl font-mono font-bold text-red-600' id='title'>Node.js - The Heart of Backend Development</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br />

                        Proficient in building scalable server-side applications.<br /><br />
                        Expertise in event-driven and non-blocking I/O.<br /><br />
                        Handling asynchronous operations for real-time applications.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-red-600' id='title'>Express.js - Simplifying Server-Side Development</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br />
                        Expertise in building RESTful APIs with Express.<br /><br />
                        Middleware configuration for efficient request/response handling.<br /><br />
                        Structuring scalable applications with Express.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-red-600' id='title'>NoSQL Databases - Flexibility and Scalability</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br />

                        Experience in designing schema-less databases.<br /><br />
                        Expertise in handling unstructured or semi-structured data.<br /><br />
                        Optimizing NoSQL databases for real-time applications.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-red-600' id='title'>SQL - Mastering Relational Databases</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br />

                        Expertise in designing normalized database schemas.<br /><br />
                        Writing optimized SQL queries and stored procedures.<br /><br />
                        Managing relational databases for complex applications.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-red-600' id='title'>MongoDB - The Most Popular NoSQL Database</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br />
                        Expertise in working with collections and documents.<br /><br />
                        Indexing and aggregation for optimized performance.<br /><br />
                        Designing schemas for scalability and flexibility.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-red-600' id='title'>Firebase - Real-Time Backend as a Service

                    </motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br />

                        Expertise in Firebase Realtime Database and Firestore.<br /><br />
                        Handling real-time data synchronization and cloud functions.<br /><br />
                        Integration with Firebase Authentication and Hosting.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-red-600' id='title'>Authentication - Ensuring Secure Access</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br />

                        Implementing authentication with JWT, OAuth2, and Passport.js.<br /><br />
                        Expertise in secure session and token management.<br /><br />
                        Building role-based access control systems.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-red-600' id='title'>RESTful APIs - Connecting the Web Seamlessly</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Description:<br />

                        Expertise in designing RESTful API architectures.<br /><br />
                        Creating secure and scalable endpoints.<br /><br />
                        Following best practices for API versioning and documentation.</motion.p>
                </motion.div>
            </Carousel>

        </>
    )
}
