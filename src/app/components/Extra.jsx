import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaUniversity } from 'react-icons/fa';

const Extra = () => {
  const subtleGreen = '#4CAF50';

  const rolesAndRecognitions = [
    { 
      icon: <FaTrophy className="text-green-600" />, 
      text: 'Secured top 5k/98k rank in Google Code Jam 2023' 
    },
    { 
      icon: <FaTrophy className="text-green-600" />, 
      text: 'Secured 77th position in ICPC Algo queen 2023' 
    },
    { 
      icon: <FaUniversity className="text-green-600" />, 
      text: 'Joint Technical Secretary of IITRAM' 
    },
    { 
      icon: <FaTrophy className="text-green-600" />, 
      text: 'GitHub Global Campus Student' 
    },
    { 
      icon: <FaTrophy className="text-green-600" />, 
      text: 'GSSoc\'24 Contributor & Campus Ambassador' 
    },
    { 
      icon: <FaTrophy className="text-green-600" />, 
      text: 'Hackalytics\'23 Data Science Hackathon Finalist' 
    },
    { 
      icon: <FaTrophy className="text-green-600" />, 
      text: 'MLH-HackAPI week winner' 
    },
    { 
      icon: <FaUniversity className="text-green-600" />, 
      text: 'SSIP Grante-SSIP Gujarat Government project funded up to 2.50 Lakhs' 
    },
    { 
      icon: <FaUniversity className="text-green-600" />, 
      text: 'Unstop Igniter-IITRAM x Unstop' 
    },
    { 
      icon: <FaGraduationCap className="text-green-600" />, 
      text: 'Google Women Techmaker Maker' 
    },
    { 
      icon: <FaGraduationCap className="text-green-600" />, 
      text: 'MLH Fellowship-WaitListed' 
    },
    { 
      icon: <FaUniversity className="text-green-600" />, 
      text: 'Founding & Team Lead of Coding Club- IITRAM' 
    }
  ];

  return (
    <section id="extras">
      <div className="extra-section py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 mt-9">
          Extra <strong style={{ color: subtleGreen, fontWeight: 'normal' }}>Highlights</strong>
        </h2>

        {/* Education Section */}
        <motion.div
          className="bg-white border border-gray-200 rounded-lg p-6 mb-8 max-w-xl mx-auto shadow-md"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0 0 15px rgba(76, 175, 80, 0.2)', 
            backgroundColor: '#f0fff0' 
          }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaGraduationCap className="text-4xl text-green-600 mr-4" />
            <h3 className="text-2xl font-bold text-gray-800">Education</h3>
          </div>
          <div className="text-gray-700">
            <p className="font-semibold">Institute of Infrastructure Technology Research and Management</p>
            <p>Bachelor of Technology - Electrical and Computer Science</p>
            <p className="text-sm text-gray-500">Aug 2021 - May 2025</p>
          </div>
        </motion.div>

        {/* Roles & Recognitions Section */}
        <h3 className="text-2xl font-bold mb-6">Roles & Recognitions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {rolesAndRecognitions.map((role, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-center shadow-md"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: '#f0fff0', 
                borderColor: subtleGreen 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="mr-4">{role.icon}</div>
              <p className="text-gray-800 text-sm">{role.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extra;