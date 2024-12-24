import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimatePresence, motion, useScroll } from "motion/react"

export default function ProjectsCarousel(props) {
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
                    <motion.p className='text-3xl font-mono font-bold text-yellow-600' id='title'>Ecommerce -app </motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js), Tailwind CSS

                        I developed a fully functional e-commerce platform using the MERN stack to provide a seamless shopping experience for users. The project encompasses both frontend and backend development, ensuring responsiveness, scalability, and user engagement.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-yellow-600' id='title'>Key features</motion.p>
                    <motion.p className='text text-white font-mono'>
                        User Authentication & Authorization
                        Dynamic product catalog with categories.
                        Admin dashboard for managing products, including adding, updating, and deleting.
                        Shopping Cart & Checkout
                        Persistent cart functionality using local storage.
                        Integration of payment gateway for secure transactions.
                        Order Management:
                        User dashboard to view order history and track order status.
                        Admin panel for order processing and status updates.
                        Responsive Design:
                        RESTful APIs designed for efficient client-server communication.
                        Optimized database operations with MongoDB for product and order management.</motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    {/* <motion.p className='text-3xl font-mono font-bold text-yellow-600' id='title'>Images</motion.p> */}
                    {/* <motion.p className='text-lg text-white font-mono'>
                        Proficient with Git and platforms like GitHub/GitLab for code collaboration.</motion.p> */}
                    <div className="flex">
                        <motion.img src='image1.jpg' className='h-60 rounded m-2' whileTap={{ scale: 1.8, opacity: 1 }} initial={{ opacity: 0.6 }} />
                        <motion.img src='image2.jpg' className='h-60 rounded m-2' whileTap={{ scale: 1.8, opacity: 1 }} initial={{ opacity: 0.6 }} />
                    </div>
                    <div className="flex">
                        <motion.img src='image1.jpg' className='h-60 rounded m-2' whileTap={{ scale: 1.8, opacity: 1 }} initial={{ opacity: 0.6 }} />
                        <motion.img src='image2.jpg' className='h-60 rounded m-2' whileTap={{ scale: 1.8, opacity: 1 }} initial={{ opacity: 0.6 }} />
                    </div>

                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-yellow-600' id='title'>Chating app</motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js), Socket.IO, Tailwind CSS<br /><br />
                        Key Features:-<br /><br />
                        User Authentication & Authorization<br />
                        Real-Time Messaging<br />
                        Group Chats<br />
                        Message Storage & Retrieval<br />
                        Responsive Design<br />
                    </motion.p>
                </motion.div>
                <motion.div className={`min-h-96 ${props.color} my-4 mx-4 rounded-xl`} animate={{ x: [500, 0], transition: { duration: 0.5 } }}>
                    <motion.p className='text-3xl font-mono font-bold text-yellow-600' id='title'>Beautiful Landing Pages
                    </motion.p>
                    <motion.p className='text-lg text-white font-mono'>
                        designed and developed a series of visually stunning and responsive landing pages that combine aesthetic appeal with functional design. These pages are optimized for engagement, performance, and conversion, showcasing my expertise in frontend development and UI/UX design.<br />
                        Key Features:-<br /><br />
                        Responsive Design: <br />
                        Modern Aesthetics:<br />
                        Dynamic Animations<br />
                        Reusability and Scalability<br />

                    </motion.p>
                </motion.div>
            </Carousel>

        </>
    )
}
