import React from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react"

export default function Article() {
  return {
    frontend: [`1. HTML
Heading:
"HTML - The Backbone of the Web"

Content:

Semantic and accessible markup.
Expertise in building SEO-friendly structures.
Mastery of HTML5 elements and best practices.
Visuals:

Screenshot of a structured HTML code snippet.
An image of a well-organized webpage layout.`, `2. CSS
Heading:
"CSS - Crafting the Visual Experience"

Content:

Proficiency in creating responsive designs.
Expertise in Flexbox, Grid, and animations.
Pixel-perfect styling for cross-browser compatibility.
Visuals:

GIFs showing before/after applying CSS.
Examples of styled components.`, `3. JavaScript
Heading:
"JavaScript - Making the Web Interactive"

Content:

Core knowledge of ES6+ features.
DOM manipulation, AJAX, and API integration.
Building dynamic web applications.`, `4. Bootstrap
Heading:
"Bootstrap - Quick and Responsive UI"

Content:

Building responsive, mobile-first designs.
Customizing themes and components.
Deep understanding of Bootstrap’s grid system.`,
      `5. Tailwind CSS
Heading:
"Tailwind CSS - Modern Utility-First Styling"

Content:

Utility-first approach to styling.
Rapid prototyping with custom classes.
Mastery in creating reusable components.`,
      `6. Framer Motion Animation Library
Heading:
"Framer Motion - Stunning Animations Simplified"

Content:

Crafting fluid, modern animations.
Expertise in motion transitions and dynamic UI effects.
Animating components in React seamlessly.`,
      `7. React
Heading:
"React - Building Scalable Web Apps"

Content:

Expertise in functional and class components.
Hooks and modern React practices.
Dynamic UI creation and API integration.`,
      `8. React State Management
Heading:
"State Management - Simplifying Complex Data Flows"

Content:

Proficiency in Context API, Redux, and Zustand.
Managing global states for scalable apps.
Expertise in asynchronous state management with middleware.`,
      `9. UI Libraries (Chakra UI & Material UI)
Heading:
"Modern UI Libraries - Beautiful and Accessible Design"

Content:

Expertise in Chakra UI and Material UI.
Rapid prototyping with pre-built components.
Customizing themes for unique branding.`]
  }
}
