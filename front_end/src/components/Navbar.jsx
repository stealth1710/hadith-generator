import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { motion } from "framer-motion";
const Navbar = () => {

    const container = (delay) => ({
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay, duration: 0.5 }
        }
      })
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      {/* Left side container (empty for now, but could be used for logo or other content) */}
      <div className='flex flex-shrink-0 items-center'></div>

      {/* Centered Text */}
      <div className='flex-grow flex items-center justify-center text-2xl font-thin tracking-tight'>
        <motion.h1        target="_blank"
          rel="noopener noreferrer"
          variants={container(0.4)} // Apply animation with delay of 0.3 seconds
          initial="hidden"
          animate="visible">بسم الله الرحمن الرحيم</motion.h1>
      </div>

      {/* Right side container (GitHub icon) */}
      <div className='flex items-center justify-end m-8'>
      <motion.a
          href="https://github.com/stealth1710"
          target="_blank"
          rel="noopener noreferrer"
          variants={container(1)} // Apply animation with delay of 0.3 seconds
          initial="hidden"
          animate="visible"
        >
          <FaGithub className='text-2xl' />
        </motion.a>
      </div>
    </nav>
  )
}

export default Navbar
