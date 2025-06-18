"use client"

import { useState, useEffect } from "react"

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Code Quote */}
          <div className="flex-1 text-center sm:text-left">
            <span className="text-sm sm:text-base lg:text-lg font-mono text-green-400 break-all sm:break-normal">
              {isMobile ? "while( !succeed )" : "while( ! ( succeed = try( ) ) )"}
            </span>
          </div>

          {/* Divider for mobile */}
          <div className="w-full h-px bg-gray-700 sm:hidden"></div>

          {/* Rights Text */}
          <div className="flex-shrink-0 text-center sm:text-right">
            <p className="text-xs sm:text-sm text-slate-500 hover:text-slate-400 transition-colors duration-200">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>

        
      </div>
    </footer>
  )
}

export default Footer
