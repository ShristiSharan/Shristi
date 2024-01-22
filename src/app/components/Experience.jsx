import React, { useState } from 'react';
import { motion } from 'framer-motion';


const ExperienceCard = ({ company, position, timeline, description, isOpen, onClick }) => {
  return (
    <motion.div
      className={`experience-tab ${isOpen ? 'open light-yellow-bg' : ''} ${isOpen ? 'blue-bg' : 'black-text'}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`tab-header ${isOpen ? 'active' : ''}`}>
        <h4 className={`position ${isOpen ? 'green-text' : ''}`}>{`${position} @ ${company}`}</h4>
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
            'Spearheaded the development of a Self-Driving Autonomous Robot Car prototype, emphasizing both hardware and software aspects.',
            'Implemented a machine learning architecture for autonomous navigation, integrating it into the robot’s hardware using ROS and SLAM techniques.',
            'Enhanced the robot’s capabilities with Reinforcement Learning, NLP for voice commands, and Object Detection/Avoidance using YOLOv8 within the ROS-DARKNET framework.'
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
