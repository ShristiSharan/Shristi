"use client"

import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { CgCPlusPlus } from "react-icons/cg"
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di"
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiTensorflow,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiSwift,
  SiSqlite,
  SiOpencv,
} from "react-icons/si"
import { FaRust, FaBrain, FaReact } from "react-icons/fa"
import { MdOutlineSmartToy } from "react-icons/md"

function Techstack() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const techs = [
    { icon: <CgCPlusPlus />, name: "C++", level: "Advanced" },
    { icon: <DiJavascript1 />, name: "JavaScript", level: "Expert" },
    { icon: <FaRust />, name: "Rust", level: "Intermediate" },
    { icon: <SiTypescript />, name: "TypeScript", level: "Advanced" },
    { icon: <DiMongodb />, name: "MongoDB", level: "Advanced" },
    { icon: <SiExpress />, name: "Express.js", level: "Expert" },
    { icon: <DiReact />, name: "React", level: "Expert" },
    { icon: <DiNodejs />, name: "Node.js", level: "Expert" },
    { icon: <SiNextdotjs />, name: "Next.js", level: "Advanced" },
    { icon: <SiTensorflow />, name: "TensorFlow", level: "Intermediate" },
    { icon: <DiGit />, name: "Git", level: "Advanced" },
    { icon: <SiFirebase />, name: "Firebase", level: "Advanced" },
    { icon: <SiRedis />, name: "Redis", level: "Intermediate" },
    { icon: <SiPostgresql />, name: "PostgreSQL", level: "Advanced" },
    { icon: <DiPython />, name: "Python", level: "Expert" },
    { icon: <DiJava />, name: "Java", level: "Advanced" },
    { icon: <SiHtml5 />, name: "HTML5", level: "Expert" },
    { icon: <SiCss3 />, name: "CSS3", level: "Expert" },
    { icon: <FaBrain />, name: "MATLAB", level: "Intermediate" },
    { icon: <SiOpencv />, name: "OpenCV", level: "Intermediate" },
    { icon: <SiSqlite />, name: "SQL", level: "Advanced" },
    { icon: <FaReact />, name: "React Native", level: "Advanced" },
    { icon: <SiSwift />, name: "Swift", level: "Beginner" },
    { icon: <SiFlutter />, name: "Flutter", level: "Intermediate" },
    { icon: <FaBrain />, name: "LLM", level: "Advanced" },
    { icon: <MdOutlineSmartToy />, name: "AI", level: "Advanced" },
  ]

  const itemsPerSlide = 6
  const totalSlides = Math.ceil(techs.length / itemsPerSlide)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(timer)
  }, [totalSlides])

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "from-green-400 to-green-600"
      case "Advanced":
        return "from-blue-400 to-blue-600"
      case "Intermediate":
        return "from-yellow-400 to-orange-500"
      case "Beginner":
        return "from-gray-400 to-gray-600"
      default:
        return "from-purple-400 to-purple-600"
    }
  }

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <Row className="justify-content-center text-center px-2 sm:px-4" style={{ paddingBottom: "30px" }}>
          {techs.map((tech, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} xl={2} className="tech-icons mb-3 sm:mb-4">
              <div className="icon-wrapper p-2 sm:p-3 transition-transform duration-300 hover:scale-110">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2">{tech.icon}</div>
                <span className="icon-label text-xs sm:text-sm font-medium block">{tech.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Mobile Simple Layout */}
      <div className="block md:hidden px-4 pb-8">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-3 gap-4 px-2">
                  {techs.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((tech, techIndex) => (
                    <div key={`${slideIndex}-${techIndex}`} className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-3 shadow-md flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                        <div className="text-2xl text-white">{tech.icon}</div>
                      </div>
                      <div className="text-xs text-center mt-2 text-white font-medium">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Simple Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/40"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Techstack
