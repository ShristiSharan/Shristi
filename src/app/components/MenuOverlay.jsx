"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { XMarkIcon, SparklesIcon, HeartIcon, RocketLaunchIcon } from "@heroicons/react/24/solid"

const MenuOverlay = ({ links, closeMenu }) => {
  const menuRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [closeMenu])

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (menuRef.current) {
        const rect = menuRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const welcomeMessages = [
    "Welcome to My Space ✨",
    "Hey there, Explorer! 🌟",
  ]

  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % welcomeMessages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [welcomeMessages.length])

  return (
    <div className="fixed inset-0 z-40 bg-gradient-to-br from-slate-950/40 via-midnight-900/30 to-slate-900/40 backdrop-blur-md flex justify-end md:hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-slate-300/30 to-blue-300/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div
        ref={menuRef}
        className="w-[80%] max-w-xs h-full bg-gradient-to-br from-slate-950/95 via-midnight-900/90 to-slate-900/95 backdrop-blur-xl shadow-2xl border-l border-slate-700/20 flex flex-col transition-all relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(30, 41, 59, 0.2) 0%, transparent 50%)`,
        }}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/5 via-blue-900/5 to-slate-900/5 animate-pulse" />

        {/* Header with welcome message */}
        <div className="relative z-10 p-4 border-b border-slate-700/20">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h2 className="text-xl font-bold bg-gradient-to-r from-slate-200 via-blue-200 to-slate-100 bg-clip-text text-transparent">
                {welcomeMessages[currentMessage]}
              </h2>
              <p className="text-slate-300/70 text-sm mt-1">Ready to explore?</p>
            </div>
            <button
              onClick={closeMenu}
              aria-label="Close Menu"
              className="group p-1.5 rounded-full bg-gradient-to-r from-slate-700/20 to-blue-900/20 hover:from-slate-600/30 hover:to-blue-800/30 transition-all duration-300"
            >
              <XMarkIcon className="w-4 h-4 text-slate-300 group-hover:text-slate-200 transition-colors" />
            </button>
          </div>

          {/* Interactive icons */}
          <div className="flex gap-2 justify-center">
            <SparklesIcon className="w-4 h-4 text-slate-300 animate-pulse" />
            <HeartIcon className="w-4 h-4 text-blue-300 animate-pulse" style={{ animationDelay: "0.2s" }} />
            <RocketLaunchIcon className="w-4 h-4 text-slate-200 animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>

        {/* Enhanced Menu Links */}
        <div className="flex-1 p-4 relative z-10 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {links.map((link, index) => (
              <li key={index} className="group">
                <Link
                  href={link.path}
                  onClick={closeMenu}
                  className="block px-3 py-2 rounded-lg bg-gradient-to-r from-slate-800/20 to-blue-900/20 hover:from-slate-700/30 hover:to-blue-800/30 border border-slate-700/10 hover:border-slate-500/20 transition-all duration-300"
                >
                  <span className="text-base font-medium bg-gradient-to-r from-slate-200 via-blue-200 to-slate-100 bg-clip-text text-transparent group-hover:from-white group-hover:via-blue-100 group-hover:to-slate-50 transition-all">
                    {link.title}
                  </span>
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-slate-400/30 to-blue-400/30 transition-all duration-300 mt-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Enhanced Footer Section */}
        <div className="relative z-10 p-4 border-t border-slate-700/20 bg-gradient-to-r from-slate-900/30 to-blue-900/30">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-slate-300/30 to-blue-300/30 flex items-center justify-center animate-pulse">
                <span className="text-xs">🌌</span>
              </div>
              <div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-300/30 to-slate-300/30 flex items-center justify-center animate-pulse"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-xs">✨</span>
              </div>
              <div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-slate-200/30 to-blue-200/30 flex items-center justify-center animate-pulse"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="text-xs">🌠</span>
              </div>
            </div>
            <p className="text-sm font-medium bg-gradient-to-r from-slate-200 via-blue-200 to-slate-100 bg-clip-text text-transparent">
              &ldquo;Exploring the digital cosmos&rdquo;
            </p>
            <p className="text-xs text-slate-300/60 mt-1 italic">Let&apos;s create something stellar! 🌟</p>
            <p className="text-sm text-gray-400 mt-2">
              &ldquo;Welcome to my digital space&rdquo; - Let&apos;s explore together!
            </p>
          </div>

          {/* Interactive wave effect */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-400/20 via-blue-400/20 to-slate-300/20 animate-pulse" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-16 right-4 w-2 h-2 bg-slate-300/20 rounded-full animate-pulse" />
        <div className="absolute top-24 left-4 w-1.5 h-1.5 bg-blue-300/20 rounded-full animate-pulse" />
        <div className="absolute bottom-24 right-4 w-2 h-2 bg-slate-200/20 rounded-full animate-pulse" />
      </div>
    </div>
  )
}

export default MenuOverlay
