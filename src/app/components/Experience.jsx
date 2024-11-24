import React, { useState } from 'react';
import { motion } from 'framer-motion';


const ExperienceCard = ({ company, position, timeline, description, isOpen, onClick }) => {
  
  return (
    <motion.div
      className={`experience-tab ${isOpen ? 'open light-yellow-bg' : ''} `}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`tab-header ${isOpen ? 'active bg-yellow-200-bg' : 'black-text'}`}>
        <h4 className={`position ${isOpen ? 'text-[#3dcc61]' : ''}`}>{`${position} @ ${company}`}</h4>
        <div className="header-info">
          <span className="timeline">{timeline}</span>
          <span className="plus-sign">{isOpen ? '-' : '+'}</span>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="description"
        >
          <ul>
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};
 

const Experience = () => {
  const [activeTab, setActiveTab] = useState(null);

  const experiences = [
    {
      company: 'PostCare.Ai',
      position: 'FullStack Developer Intern',
      timeline: ' June 2024 - Present',
      description: [
        'Developed a healthcare dashboard powered by real-time API calls, enabling seamless rendering of EHR patient data and backend controllers for robust functionality.',
        'Architected and implemented the in-house LLM Health Bot Assistant using Llama 3, BERT, and RAG pipelines for intelligent patient interactions.',
        'Enhanced dashboard design and responsiveness, improving API integration and boosting user engagement by 90%.'
        ],
    },
    {
    company: 'IIT Delhi',
    position: 'Deep Learning Research Scholar',
    timeline: ' April 2024- June 2024',
    description: [
      'Developed a Vision Transformer (ViT) model for Multistage sleep classification using PPG signal, achieving a global benchmark accuracy of 97.70%.',
      'Contributed to the development and integration of a web dashboard to showcase real-time sleep stage insights, boosting data accessibility and user engagement by 45%.',
      'Authored research under publication in IEEE, with upcoming features in the Nature Portfolio.',
      ],
  },
  {
    company: 'GirlScript Foundation- GSSoC\'24',
    position: 'Open Source Contributor',
    timeline: ' May 2024- July 2024',
    description: [
      'Part Time Engagement in frontend development, backend enhancements, and documentation improvements across multiple projects, ensuring comprehensive project support.',
      'Actively participated in community forums, provided mentorship to new contributors, and promoted collaboration among team members to drive project success in GSSoc\'24.',
      ],
  },
    {
      company: 'WhiteLabel Digital Services',
      position: 'Software Developer Intern',
      timeline: ' June 2023- August 2023',
      description: [
        'Developed and integrated a live static landing page for EDULAKE, an edutech website, ensuring seamless data fetching and API integration.',
        'Enhanced project robustness by significantly increasing test coverage to 91%.',
        'Implementing dynamic forms, and optimizing UI responsiveness based on Figma designs'
        ],
    },
    {
        company: 'IITRAM',
        position: 'Summer Research Intern',
        timeline: ' May 2023- July 2023',
        description: [
          'Superheaded the development of SHAKTI Bot, a fully autonomous robot with 80% cost-effective hardware.',
          'Optimized route planning using ROS, SLAM, and ML algorithms, delivering 35% better performance and 75% faster response than RL methods.',
          'Integrated YOLOv8 and deep learning for precise segmentation enabling smooth navigation.',
            ],
      },
      {
        company: 'IITRAM',
        position: 'Machine Learning Research Intern',
        timeline: ' Dec. 2022- Feb. 2023',
        description: [
            'Led data preprocessing and machine learning model development for computer vision, focusing on tasks like tumor detection and short circuit localization in transformers.',
            'Implemented neural networks and image processing for accurate placement in object detection of automobile parts using live CCTV footage data.'
            ],
      },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? null : index);
  };

  return (
    <section id="experience">
    <div className="experience-section py-12 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8 mt-9">Professional <strong className="green">Experience</strong></h2>

      <div className="tabs-container">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            {...experience}
            isOpen={index === activeTab}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Experience;
