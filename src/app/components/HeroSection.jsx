"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-7xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-300">
              Hey, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Shristi Sharan",
                1000,
                "Software Developer",
                1000,
                "Open-Source Contributor",
                1000,
                "DL/ML Engineer",
                1000,
                "Techie",
                1000,
                "Developer",
                1000,
                "FullStack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           Passionate and versatile - Full Stack Software Developer
           & AI/Deep Learning Engineer with skills, experience and development.
          
           Open for exciting opportunities to contribute my all-in-one expertise.
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/shristi-sharan-605543227/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-600 to-yellow-300 hover:bg-orange-300 text-white font-bold"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/19Pk5aUlRBaQq3BUqr3lkhFPkIPm1MVN_/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-600 to-yellow-300 hover:bg-orange-300 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-900 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden relative">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              className="w-full h-full object-cover rounded-full"
              layout="fill"
              // width={350}
              // height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
