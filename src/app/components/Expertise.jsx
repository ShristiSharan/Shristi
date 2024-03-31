import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { LuBrainCircuit } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { motion } from 'framer-motion';


const ExpertiseSection = () => {
  const expertiseData = [
    {
      icon: <BsCodeSlash />,
      heading: 'Software Development',
      text: 'Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.',
    },
    {
      icon: <MdComputer />,
      heading: 'Frontend Dev React, NextJS',
      text: 'Passionate about UI/UX. Development experience in HTML, CSS, JS, React and NextJS frameworks.',
    },
    {
      icon: <LuBrainCircuit/>,
      heading: 'AI/ML & Deep Learning',
      text: 'Research and Work Experience in Deep Learning- Computer Vision and ML Algorithms. working on Generative AI,LLM Models.',
    },
  ];

  return (
    <section id="expertise">
    <div className="experience-section py-12 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8 mt-9">My <strong className="green">Expertise</strong></h2>
      <div className="flex flex-col md:flex-row justify-left gap-8">
        {expertiseData.map((item, index) => (
          <motion.div
           key={index} 
           whileHover={{ scale: 1.1 , boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
           whileTap={{ scale: 0.9 }}
           className="expertise-box bg-transparent p-6 rounded-lg shadow-md border border-gray-300 w-full md:w-1/2"> 
            <div className="flex items-center">
              <div className="rounded-full bg-green-600 text-black p-3 mr-4"> {/* Margin for spacing */}
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
    </section>
  );
};

export default ExpertiseSection;
