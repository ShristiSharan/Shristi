"use client"

import { SiFlask, SiDocker, SiLinux, SiOpencv, SiPytorch, SiKubernetes, SiXcode } from "react-icons/si"; 
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";
import { FaFigma, FaLinux, FaAws, FaShieldAlt } from "react-icons/fa";  
import { VscAzure } from "react-icons/vsc";  
import { AiOutlineAppstoreAdd } from "react-icons/ai"; 

function Toolstack() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <VscAzure />, name: "Azure" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiXcode />, name: "Xcode" },
    { icon: <FaShieldAlt />, name: "Network Security" },
  ]

  const itemsPerSlide = 6
  const totalSlides = Math.ceil(tools.length / itemsPerSlide)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(timer)
  }, [totalSlides])

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">VS Code</span>
              <SiVisualstudiocode />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Postman</span>
              <SiPostman />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Slack</span>
              <SiSlack />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">AWS</span>
              <FaAws />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Linux</span>
              <FaLinux />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Figma</span>
              <FaFigma />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Vercel</span>
              <SiVercel />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Azure</span>
              <VscAzure />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Flask</span>
              <SiFlask />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Docker</span>
              <SiDocker />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Kubernetes</span>
              <SiKubernetes />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Xcode</span>
              <SiXcode />
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-wrapper">
              <span className="icon-label">Network Security</span>
              <FaShieldAlt />
            </div>
          </Col>
        </Row>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-4 pb-8">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-3 gap-4 px-2">
                  {tools.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((tool, toolIndex) => (
                    <div key={`${slideIndex}-${toolIndex}`} className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg p-3 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                        <div className="text-2xl text-white">{tool.icon}</div>
                      </div>
                      <div className="text-xs text-center mt-2 text-white font-medium">{tool.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
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

export default Toolstack;
