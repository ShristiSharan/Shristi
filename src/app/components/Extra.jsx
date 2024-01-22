import React from 'react';
import { motion } from 'framer-motion';

const Extra = () => {
  const subtleGreen = '#4CAF50';

  return (
    <section id="extras">
      <div className="extra-section py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 mt-9">
          Extra <strong style={{ color: subtleGreen, fontWeight: 'normal' }}>\s</strong>
        </h2>

        {/* Hover tab for education */}
        <motion.div
          className="hover-tab"
          whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}
        >
          <p style={{ fontWeight: '900', marginBottom: '8px' }}>Education</p>
          <p>Institute of Infrastructure Technology Research and Management</p>
          <p>Bachelor of Technology - Electrical and Computer Science</p>
          <p>Aug 2021 - May 2025</p>
        </motion.div>

        <div style={{ marginBottom: '40px' }}></div>

        {/* Roles & Responsibilities cards */}
          <h3 className="text-2xl font-bold mb-4">Roles & Responsibilities : </h3>
          <div className="roles-section">
          {[
            'Joint Technical Secretary of IITRAM.',
            'GitHub Global Campus Student.',
            'Secured top 5k/98k rank in Google Code Jam 2023.',
            'Secured 77th position in ICPC Algo queen 2023.',
            'Student Coordinator- NEST Club, IITRAM.',
            'Team Lead - Coding Club, IITRAM.',
          ].map((role, index) => (
            <motion.div
              key={index}
              className="role-card"
              whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
            >
              <h3>{role}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extra;
