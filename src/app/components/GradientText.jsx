"use client"

import { useState, useEffect } from 'react'

const GradientText = ({ 
  children, 
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"], 
  animationSpeed = 3, 
  showBorder = false, 
  className = "" 
}) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, animationSpeed * 1000)

    return () => clearInterval(interval)
  }, [colors.length, animationSpeed])

  const getGradientStyle = () => {
    const currentColor = colors[currentColorIndex]
    const nextColor = colors[(currentColorIndex + 1) % colors.length]
    
    return {
      background: `linear-gradient(45deg, ${currentColor}, ${nextColor})`,
      backgroundSize: '200% 200%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: `gradientShift ${animationSpeed}s ease-in-out infinite`
    }
  }

  return (
    <>
      <span 
        className={`${className} ${showBorder ? 'border-2 border-current' : ''}`}
        style={getGradientStyle()}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  )
}

export default GradientText 