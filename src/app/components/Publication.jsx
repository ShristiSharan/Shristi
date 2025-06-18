import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook } from 'react-icons/fa';

const PublicationCard = ({ publication }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="publication-card relative w-full h-[500px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
    >
      <div className={`absolute w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className={`absolute w-full h-full backface-hidden border border-gray-400/30 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] p-6 ${!isFlipped ? 'z-10' : 'rotate-y-180'}`} style={{ backgroundColor: 'rgb(24 25 30)' }}>
          <div className="image-container w-full h-64 mb-4 overflow-hidden rounded-lg bg-white border border-gray-200/50 shadow-sm">
            <img 
              src={publication.image} 
              alt={publication.title} 
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-yellow-100 font-semibold text-lg mb-2 line-clamp-2">{publication.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{publication.status}</p>
          <div className="absolute bottom-4 left-0 w-full text-center">
            <span className="text-green-600 font-bold">Click to Read Abstract</span>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute w-full h-full backface-hidden bg-green-50 border border-gray-400/30 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6 flex flex-col ${isFlipped ? 'z-10' : '-rotate-y-180'}`}>
          <div className="flex items-center mb-4">
            <FaBook className="text-green-600 mr-3 text-2xl" />
            <h3 className="text-gray-950 font-semibold text-lg">Abstract</h3>
          </div>
          <p className="text-gray-700 text-sm flex-grow overflow-auto">{publication.abstract}</p>
          <div className="absolute bottom-4 left-0 w-full text-center">
            <span className="text-green-600 font-bold">Click to Go Back</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PublicationSection = () => {
  const publications = [
        {
          title: 'PPG-ViT-NET: Automated Sleep Stage Classification Using Vision Transformer with PPG Signals.',
          status: 'Published - IEE JBHI-05466-2024',
          abstract: ' Accurate sleep stage scoring is crucial for diagnosing sleep disorders. Current methods like Polysomnography (PSG) are time-consuming and costly. This study explores photoplethysmography (PPG) as a non-invasive, cost-effective alternative for classifying all five sleep stages.The model achieved benchmarking result out of existing state of art model. Conclusion: PPG-ViT-NET demonstrates strong performance, showing potential to replace traditional PSG methods for sleep stage classification. Significance: This study paves the way for using PPG and deep learning in wearable devices for at-home sleep monitoring, offering an ergonomic and scalable solution..',
          image:"/images/projects/17.jpeg", // Add your image path
        },
        {
          title: 'Image and Shadow Fusion for Precise Bead Orientation Detection in Jewelry Making Automation.',
          status: 'Published',
          abstract: 'The jewelry-making industry faces persistent challenges in achieving precise bead orientation, a crucial step for creating intricate designs efficiently.The proposed system accurately identifies bead orientation, ensuring proper bead placement before the actual design process.   Due to very fast processing, our method enables real-time anomaly detection, enhances operational efficiency, and offers flexibility in object detection and orientation. By revolutionizing bead orientation detection, the present research promises to enhance productivity, reduce costs, and ensure quality in jewelry design automation',
          image: "/images/projects/16.png", // Add your image path
        },
        {
          title: 'Automatic Joint Teeth Segmentation in Panoramic Dental Images using Mask Recurrent Convolutional.',
          status: 'Published - SJORANM',
          abstract: 'Panoramic dental images gives an in-depth understanding of the tooth structure, both lower and upper jaws, and surrounding structures throughout the cavity in our mouth.The Panoramic dental images provided have significance for dental diagnostics since they aid in the detection of an array of dental disorders, including oral cancer. We propose a novel approach to automatic joint teeth segmentation using the pioneer Mask Recurrent Convolutional Neural Network (MRCNN) model for dental image segmentation.',
          image: "/images/projects/15.png", // Add your image path
        },
        {
          title: 'Autonomous Navigation: ROS and SLAM Empowered Self-Driving Precision with AI/ML Models and Human-Voice Control.',
          status: 'IEEE Xplore Conference Paper - First Round of Review Submitted',
          abstract: 'In the realm of cutting-edge technology, the convergence of Machine Learning, Deep Learning,Robotics Operating System (ROS), and Simultaneous Localization and Mapping (SLAM) is revolutionizing auto navigation in mobile robots. Leveraging this fusion, our SHAKTI Bot offers unparalleled precision and safety, particularly catering to the Health Hospital Sector.It represents a cost-effective hardware solution with AI and ML capabilities, facilitating real-time decision-making, obstacle avoidance, and route optimization. With a strong emphasis on affordability, adaptability, and enhanced human interaction, SHAKTI Bot seamlessly handles a range of tasks, from object identification to motion planning.',
          image: "/images/projects/19.png", // Add your image path
        },
        {
          title: 'HyperScale Computing Paradigm in Healthcare.',
          status: 'Under Review',
          abstract: 'The healthcare industry has experienced a remarkable transformation with the advent of hyperscal computing—a paradigm that leverages vast computing resources to process massive datasets efficiently. From the early days of digitalization to the current state, healthcare data has grown exponentially, driven by electronic health records (EHRs),medical imaging, genomic data, and the increasing use of Internet of Things (IoT) devices in patient monitoring.This chapter explores the evolution of computing in healthcare, detailing the integration of hyper scale computing, key applications, challenges, and future trends.',
          image: "/images/projects/18.png", // Add your image path
        },
  ];

  return (
    <section id="publications" className="py-12 px-4 text-center relative z-0 mt-[80px]">
      <div className="publication-section backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-8 mt-9">
          Publications
        </h2>

        {/* Paper Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication, index) => (
            <PublicationCard 
              key={index} 
              publication={publication} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationSection;