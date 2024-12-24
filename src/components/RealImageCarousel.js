import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimatePresence, motion, useScroll } from "motion/react"

export default function RealImageCarousel(props) {
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
                <motion.img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYgL9ckUmDa9wA13LF5Gg8R8cETmZ1HOYjw&s' className='rounded-2xl'/>
                <img src='https://png.pngtree.com/thumb_back/fh260/background/20230630/pngtree-cool-neon-star-glowing-abstract-4k-uhd-background-in-blue-and-image_3705288.jpg'/>

            </Carousel>

        </>
    )
}
