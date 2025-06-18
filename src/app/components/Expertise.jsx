import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { LuBrainCircuit } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { FaPen, FaUserTie } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const expertiseData = [
    {
      icon: <BsCodeSlash size={28} />,
      heading: 'Software Development',
      text: 'Designed scalable full-stack systems- Frontend, Backend, CI/CD, Testing experience.',
    },
    {
      icon: <LuBrainCircuit size={28} />,
      heading: 'AI/ML & Deep Learning',
      text: 'Worked on LLMs, ViTs, and CV research. Skilled in ML pipelines, DL models, and generative AI.',
    },
    {
      icon: <MdComputer size={28} />,
      heading: 'Frontend Dev',
      text: 'UI/UX enthusiast with React, Next.js, Three.js, HTML, and CSS expertise for responsive design.',
    },
    {
      icon: <AiOutlineMobile size={28} />,
      heading: 'App Development',
      text: 'Built cross-platform apps using React Native and Swift with clean architecture and strong UX.',
    },
    {
      icon: <FaPen size={28} />,
      heading: 'DSA & Open Source',
      text: 'Strong in DSA. Contributed to GSSoC, ICPC, HacktoberFest. Open-source enthusiast.',
    },
    {
      icon: <FaUserTie size={28} />,
      heading: 'Leadership',
      text: 'Led as GitHub Campus Ambassador. Managed teams and aligned tech with product strategy.',
    }
  ];
  

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 60,
    },
  }),
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 px-6  text-white">
      <h2 className="text-4xl font-bold text-center mb-14">
        My <span className="text-green-400">Expertise</span>
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.03}
              transitionSpeed={1000}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-gray-700"
              style={{ background: 'rgb(22 23 25)' }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-400 p-3 rounded-full text-black shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.heading}</h3>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
