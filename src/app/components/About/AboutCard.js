"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ImPointRight } from "react-icons/im"

const introText = `Hey there! 👋 I'm Shristi Sharan — a Software Developer by passion, and an Electrical Engineer... well, by *academic destiny* 😅.\n— a builder at heart, engineer by training, and creator by curiosity and following the career in field by choice.\nMy journey into tech began with circuits and code, but I quickly found myself captivated by the power of Software development and Generative AI driving innovation. Whether it's automating complex workflows, designing intelligent systems, or working on real-time applications especially in healthcare, I love tackling challenges that sit at the intersection of logic and impact.`

const imageList = ["/images/me.jpeg", "/images/me1.JPG", "/images/me2.JPG", "/images/me3.JPG", "/images/me4.JPG"]

function StreamingText({ text, speed = 20 }) {
  const [displayed, setDisplayed] = useState("")
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])
  return (
    <span className="whitespace-pre-line text-sm sm:text-base mb-2 text-white font-normal leading-relaxed">
      {displayed}
    </span>
  )
}

function AboutCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const getImageStyle = (index) => {
    const diff = (index - currentIndex + imageList.length) % imageList.length

    if (diff === 0) {
      // Center image - more zoomed out for mobile
      return {
        transform: isMobile ? "translateX(0px) scale(0.75)" : "translateX(0px) scale(0.85)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1) contrast(1.05)",
        borderRadius: "1rem",
        boxShadow: isMobile
          ? "0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(34, 197, 94, 0.3)"
          : "0 12px 35px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(34, 197, 94, 0.4)",
      }
    } else if (diff === 1 || diff === imageList.length - 1) {
      // Side images - more compact for mobile
      const isRight = diff === 1
      const translateX = isMobile ? (isRight ? "30px" : "-30px") : isRight ? "70px" : "-70px"
      const scale = isMobile ? "0.6" : "0.75"
      return {
        transform: `translateX(${translateX}) scale(${scale})`,
        zIndex: 20,
        opacity: isMobile ? 0.4 : 0.3,
        filter: "brightness(0.6) grayscale(0.5) blur(1px)",
        borderRadius: "0.75rem",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      }
    } else {
      // Hidden images - completely hidden on mobile for cleaner look
      const translateX = isMobile
        ? diff <= imageList.length / 2
          ? "60px"
          : "-60px"
        : diff <= imageList.length / 2
          ? "140px"
          : "-140px"
      return {
        transform: `translateX(${translateX}) scale(${isMobile ? 0.5 : 0.65})`,
        zIndex: 10,
        opacity: isMobile ? 0 : 0.1,
        filter: "brightness(0.3) grayscale(0.9) blur(2px)",
        visibility: isMobile ? "hidden" : "visible",
      }
    }
  }

  return (
    <div
      className="w-full flex flex-col lg:flex-row items-center justify-center py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4"
      style={{ background: "rgb(22 23 25 / 0.95)" }}
    >
      {/* Animated Image Carousel Container */}
      <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-[400px] mb-6 lg:mb-0 lg:mr-8 overflow-hidden">
        <div className="relative w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] md:w-[280px] md:h-[380px] lg:w-[400px] lg:h-[580px] flex items-center justify-center">
          {/* Background gradient for mobile */}
          {isMobile && (
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
          )}

          {imageList.map((image, index) => {
            const diff = (index - currentIndex + imageList.length) % imageList.length
            return (
              <div
                key={index}
                className="absolute transition-all duration-1000 ease-in-out cursor-pointer hover:scale-105"
                style={getImageStyle(index)}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="rounded-xl overflow-hidden relative group">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Shristi Sharan ${index + 1}`}
                    width={isMobile ? 200 : 280}
                    height={isMobile ? 280 : 400}
                    className={`object-cover rounded-lg transition-all duration-300 ${
                      isMobile
                        ? "w-[180px] h-[240px] sm:w-[200px] sm:h-[280px]"
                        : "w-[240px] h-[320px] md:w-[280px] md:h-[380px] lg:w-[320px] lg:h-[580px]"
                    }`}
                    priority={index === 0}
                  />

                  {/* Overlay for center image */}
                  {diff === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                  )}

                  {/* Active indicator for mobile */}
                  {isMobile && diff === 0 && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {/* Navigation dots for mobile */}
          {isMobile && (
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
              {imageList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-green-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 text-left max-w-2xl lg:ml-[-30px] px-2 sm:px-3 md:px-4 lg:px-0 mt-8 sm:mt-6 lg:mt-0">
        <div className="text-sm sm:text-base">
          <StreamingText text={introText} speed={18} />
        </div>
        <p className="text-sm sm:text-base mb-2 mt-3 sm:mt-4 font-normal bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent leading-relaxed">
          My goal is to bridge the gap between tech and users by building and advocating for meaningful, user-centric
          solutions.
        </p>
        <div className="mt-4 sm:mt-5 md:mt-6">
          <p className="text-sm sm:text-base text-white mb-2 font-normal">Apart from coding, I Love! doing :</p>
          <ul className="list-none pl-0 mb-3 sm:mb-4 space-y-1 sm:space-y-2">
            <li className="text-sm sm:text-base flex items-center text-white hover:text-green-400 transition-colors duration-200">
              <ImPointRight className="mr-2 text-base sm:text-lg md:text-xl text-green-400 flex-shrink-0" />
              Art & Craft
            </li>
            <li className="text-sm sm:text-base flex items-center text-white hover:text-green-400 transition-colors duration-200">
              <ImPointRight className="mr-2 text-base sm:text-lg md:text-xl text-green-400 flex-shrink-0" />
              Cooking + Singing
            </li>
            <li className="text-sm sm:text-base flex items-center text-white hover:text-green-400 transition-colors duration-200">
              <ImPointRight className="mr-2 text-base sm:text-lg md:text-xl text-green-400 flex-shrink-0" />
              Travelling
            </li>
          </ul>
        </div>
        <p className="text-xs sm:text-sm text-yellow-300 mb-1 sm:mb-2 font-normal leading-relaxed">
          You can always do more than you know-Never STOP Learning!
        </p>
        <footer className="text-xs sm:text-sm text-green-400 font-normal">-Shristi</footer>
      </div>
    </div>
  )
}

export default AboutCard
