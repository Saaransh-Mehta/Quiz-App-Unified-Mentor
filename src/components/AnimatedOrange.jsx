"use client"

import React from 'react'
import { motion } from 'framer-motion'


const OverlappingBalls = ({ height = '100vh' }) => {
  const ballColors = [
    'bg-red-400', 'bg-blue-400', 'bg-green-400', 
    'bg-yellow-400', 'bg-purple-400', 'bg-pink-400',
    'bg-indigo-400', 'bg-teal-400', 'bg-orange-400'
  ];

  const generateBallProps = (index) => ({
    className: `absolute rounded-full ${ballColors[index % ballColors.length]} opacity-70`,
    style: {
      width: `${Math.random() * 60 + 40}px`,
      height: `${Math.random() * 60 + 40}px`,
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 80}%`,
    },
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: index * 0.1
    },
    whileHover: { scale: 1.1 }
  });

  return (
    <div className="relative w-full bg-[#E0E2EE] overflow-hidden" style={{ height }}>
      <div className="absolute inset-0 flex items-center justify-center">
       
      </div>
      
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          {...generateBallProps(index)}
        />
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        
      </div>
    </div>
  )
}

export default OverlappingBalls

