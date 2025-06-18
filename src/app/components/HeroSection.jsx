"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedBackground from "./About/Animatedbg";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden max-w-full">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto mobile-mb-80p sm:mb-[20%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}dc
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4caf50] to-[#facc15]">
                Hey, I&apos;m{" "}
              </span>
              <span
                className="block truncate sm:whitespace-normal text-2xl sm:text-3xl md:text-4xl lg:text-6xl w-full text-center"
                style={{
                  display: "inline-flex",
                  minWidth: "200px",
                  maxWidth: "100vw",
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TypeAnimation
                  sequence={[
                    "Shristi Sharan",
                    1000,
                    "Software Developer",
                    1000,
                    "Web Solutions Engineer",
                    1000,
                    "OpenSource Contributor",
                    1000,
                    "AI/ML Engineer",
                    1000,
                    "Techie",
                    1000,
                    "Developer",
                    1000,
                    "Shristi Sharan",
                    1000,
                    "FullStack Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                    "Backend Developer",
                    1000,
                    "Researcher",
                    1000,
                    "Problem Solver",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-center w-full"
                />
              </span>
            </h1>
            <p className="text-white text-base sm:text-lg mb-6 lg:text-xl drop-shadow-lg">
              Passionate and versatile - Full Stack Software Developer & AI/Deep
              Learning Engineer with skills, experience and development.
              <br />
              Open for exciting opportunities to contribute my all-in-one
              expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[8.5rem] sm:max-w-md mx-auto justify-center items-center">
              <Link
                href="https://www.linkedin.com/in/shristi-sharan-605543227/"
                className="w-32 sm:w-48 px-4 py-2 sm:px-8 sm:py-4 bg-gradient-to-r from-green-600 via-green-500 to-yellow-400 
                          hover:from-green-500 hover:to-yellow-300 text-white font-bold text-xs sm:text-lg
                          rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
                          flex items-center justify-center mobile-btn-10rem"
              >
                Hire Me
              </Link>
              <button
                id="lets-connect-btn"
                onClick={() => {
                  const emailSection = document.getElementById('contact');
                  if (emailSection) {
                    emailSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                onMouseEnter={() => {
                  const btn = document.getElementById('lets-connect-btn');
                  if (btn) btn.classList.add('animate-pulse');
                }}
                onMouseLeave={() => {
                  const btn = document.getElementById('lets-connect-btn');
                  if (btn) btn.classList.remove('animate-pulse');
                }}
                className="w-32 sm:w-48 px-4 py-2 sm:px-8 sm:py-4 bg-[#121212] relative overflow-hidden text-white font-bold text-xs sm:text-lg rounded-lg shadow-lg border border-green-500/30 flex items-center justify-between group transition-all duration-300 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-400 mobile-btn-10rem md-btn-14rem"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s Connect!
                </span>
                <span className="relative z-10 flex items-center">
                  <ArrowRight className="text-white w-6 h-6 transition-transform duration-300 bg- group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;