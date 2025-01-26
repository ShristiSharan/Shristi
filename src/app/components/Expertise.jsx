import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { LuBrainCircuit } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { FaPen } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { motion } from 'framer-motion';

const ExpertiseSection = () => {
  const expertiseData = [
    {
      icon: <BsCodeSlash />,
      heading: 'Software Development',
      text: 'Experienced full-stack developer proficient in Python, Java, and JS/TS, with a proven track record in frontend and backend development, cloud hosting (AWS), and comprehensive testing.',
    },
    {
      icon: <LuBrainCircuit />,
      heading: 'AI/ML & Deep Learning',
      text: 'Research and Work Experience in Deep Learning - Computer Vision and ML Algorithms. Working on Generative AI, LLM Models.',
    },
    {
      icon: <MdComputer />,
      heading: 'Frontend Dev React, NextJS',
      text: 'Passionate about UI/UX. Development experience in HTML, CSS, JS, React and NextJS frameworks.',
    },
    {
      icon: <AiOutlineMobile />,
      heading: 'App Development',
      text: 'Proficient in building cross-platform mobile apps using Flutter and React Native. Ensuring seamless user experiences.',
    },
    {
      icon: <FaPen />,
      heading: 'DSA & Open Source Contributor',
      text: 'Strong DSA skills and active Open Source contributor (GSSoC\'24, ICPC\'23,HacktoberFest\'23).',
    },
  ];

  return (
    <section id="expertise">
      <div className="experience-section py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 mt-9">
          My <strong className="green">Expertise</strong>
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8">
            {expertiseData.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.9 }}
                className="expertise-box bg-transparent p-6 rounded-lg shadow-md border border-gray-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(50%-2rem)]"
              >
                <div className="flex items-center">
                  <div className="rounded-full bg-green-600 text-black p-3 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.heading}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {expertiseData.slice(2).map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.9 }}
                className="expertise-box bg-transparent p-6 rounded-lg shadow-md border border-gray-300 w-full md:w-[calc(33.333%-2rem)] lg:w-[calc(33.333%-2rem)]"
              >
                <div className="flex items-center">
                  <div className="rounded-full bg-green-600 text-black p-3 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.heading}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;