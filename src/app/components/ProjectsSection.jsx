"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Portfolio Website",
    description: "Portfolio website with AI custom chatbot",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/Shristi",
  },
  {
    id: 2,
    title: "Chatbot in JS",
    description: "Smart personalized bot",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/chatbot-with-js-main",
  },
  {
    id: 3,
    title: "WalletTracker",
    description: "A simple budgeting app/money tracker: Your income and expenses at your control",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/WalletTracker",
  },
  {
    id: 4,
    title: "Todo_app",
    description: "To-do list website made with React JS, TypeScript, Tailwind, Redux Toolkit.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/Todo_app",
  },
  {
    id: 5,
    title: "Invoice Generator",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/Invoice_Generator",
  },
  {
    id: 6,
    title: "Edulake",
    description: "Freelancing work- EduTech website built from scratch made with React JS, Javascript, Bootstrap, Redux Toolkit.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/eduleka_static",
  },
  {
    id: 7,
    title: "Vibezify",
    description: "Seamless music streaming app offering 100% ad-free listening, personalized playlists, and direct playback control, rivalling Spotify’s functionality.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/Vibezify",
  },
  {
    id: 8,
    title: "Responsive Interface for GPT Text Completion Models",
    description: "Developed MERLIN, a responsive UI, with React for OpenAI's API endpoint to the search bar.",
    image: "/images/projects/6.png",
    tag: ["All", "Web","AI/ML/DL"],
    gitUrl: "https://github.com/ShristiSharan/Responsive-Interface-for-OpenAI-s-GPT-Text-Completion-Models",
  },
  {
    id: 9,
    title: "NL-Query-Agent",
    description: "Natural Language Query Agent for answering questions on curated lecture notes and LLM architectures using LLMs and open-source vector indexing.",
    image: "/images/projects/9.png",
    tag: ["All", "AI/ML/DL"],
    gitUrl: "https://github.com/ShristiSharan/NL-Query-Agent",
  },
  {
    id: 10,
    title: "MentalHealth Predictor",
    description: "Hacklytics2023-MentalHealthPredictor: Predictive model analyzing survey data to identify key factors in mental health issues across demographics.",
    image: "/images/projects/10.jpg",
    tag: ["All", "AI/ML/DL"],
    gitUrl: "https://github.com/ShristiSharan/Hacklytics2023-MentalHealthPredictor",
  },
  {
    id: 11,
    title: "Happy_Birthday",
    description: "Dynamic Birthday Wish Web Page: Interactive features including lights, music, decorations, balloons, and personalized messages on click.",
    image: "/images/projects/11.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://benevolent-malasada-55882f.netlify.app/",
  },
  {
    id: 12,
    title: "Music Recommendation System",
    description: "Combines content-based and collaborative filtering to suggest songs based on user preferences and song attributes, using datasets from LyricsFreak and the Million Song Dataset.",
    image: "/images/projects/12.png",
    tag: ["All", "AI/ML/DL"],
    gitUrl: "https://github.com/ShristiSharan/Music-Recommendation-System",
  },
  {
    id: 13,
    title: "Sample_Clone",
    description: "React-based front-end project with engaging 3D animations.",
    image: "/images/projects/13.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/Sample_Clone",
  },
  {
    id: 14,
    title: "MultiStage Sleep Classification",
    description: "Development of a novel approach for classifying sleep stages using photoplethysmographic (PPG) sensor data with Vision Transformer(Adv. deep learning)",
    image: "/images/projects/14.png",
    tag: ["All", "AI/ML/DL"],
    gitUrl: "https://github.com/ShristiSharan/DSP_Project",
  },


];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="project-section py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 mt-9">
          My <strong className="green"> Projects</strong>
        </h2>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML/DL"
          isSelected={tag === "AI/ML/DL"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
