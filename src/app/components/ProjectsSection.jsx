"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Portfolio Website",
    description: "Portfolio website with AI custom chatbot.",
    image: "/images/projects/1.png",
    category: "web",
    technologies: ["Next.js", "React", "TailwindCSS", "AI"],
    gitUrl: "https://github.com/ShristiSharan/Shristi",
    featured: true
  },
  {
    id: 3,
    title: "Chatbot in JS",
    description: "Smart personalized bot which can answer questions and help with tasks.",
    image: "/images/projects/2.jpg",
    category: "web",
    technologies: ["JavaScript", "HTML", "CSS"],
    gitUrl: "https://github.com/ShristiSharan/chatbot-with-js-main"
  },
  {
    id: 4,
    title: "WalletTracker",
    description: "A simple budgeting app/money tracker.",
    image: "/images/projects/3.png",
    category: "web",
    technologies: ["React", "JavaScript", "CSS"],
    gitUrl: "https://github.com/ShristiSharan/WalletTracker"
  },
  {
    id: 5,
    title: "Todo_app",
    description: "To-do list website made with React JS, TypeScript, Tailwind, Redux Toolkit.",
    image: "/images/projects/4.png",
    category: "web",
    technologies: ["React", "TypeScript", "Tailwind", "Redux"],
    gitUrl: "https://github.com/ShristiSharan/Todo_app"
  },
  {
    id: 6,
    title: "Invoice Generator",
    description: "Authentication and Showcase of All CRUD operations in form of Invoice/bill generator.",
    image: "/images/projects/5.png",
    category: "web",
    technologies: ["React-JS", "Node.js", "MongoDB","TailwindCSS"],
    gitUrl: "https://github.com/ShristiSharan/Invoice_Generator"
  },
  {
    id: 7,
    title: "Edulake",
    description: "Freelancing work- EduTech website built from scratch.",
    image: "/images/projects/7.png",
    category: "web",
    technologies: ["React", "JavaScript", "Bootstrap", "Redux"],
    gitUrl: "https://github.com/ShristiSharan/eduleka_static"
  },
  {
    id: 8,
    title: "Vibezify",
    description: "Seamless music streaming web app rivalling Spotify's functionality.",
    image: "/images/projects/8.png",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    gitUrl: "https://github.com/ShristiSharan/Vibezify",
    featured: true
  },
  {
    id: 9,
    title: "Responsive Interface for GPT Text Completion Models",
    description: "Developed MERLIN, a responsive UI, with OpenAI's API endpoint to the search bar.",
    image: "/images/projects/6.png",
    category: "ai",
    technologies: ["React", "OpenAI API", "JavaScript"],
    gitUrl: "https://github.com/ShristiSharan/Responsive-Interface-for-OpenAI-s-GPT-Text-Completion-Models"
  },
  {
    id: 10,
    title: "NL-Query-Agent",
    description: "Natural Language Query Agent for answering questions on curated lecture notes and LLM architectures using LLMs and open-source vector indexing.",
    image: "/images/projects/9.png",
    category: "ai",
    technologies: ["Python", "LLM", "Vector DB", "LangChain"],
    gitUrl: "https://github.com/ShristiSharan/NL-Query-Agent",
    featured: true
  },
  {
    id: 11,
    title: "MentalHealth Predictor",
    description: "Hacklytics2023-MentalHealthPredictor: Predictive model analyzing survey data to identify key factors in mental health issues across demographics.",
    image: "/images/projects/10.jpg",
    category: "ai",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    gitUrl: "https://github.com/ShristiSharan/Hacklytics2023-MentalHealthPredictor"
  },
  {
    id: 12,
    title: "Happy_Birthday",
    description: "Dynamic Birthday Wish Web Page: Interactive features including lights, music, decorations, balloons, and personalized messages on click.",
    image: "/images/projects/11.jpg",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    gitUrl: "https://benevolent-malasada-55882f.netlify.app/"
  },
  {
    id: 13,
    title: "Music Recommendation System",
    description: "Combines content-based and collaborative filtering to suggest songs based on user preferences and song attributes, using datasets from LyricsFreak and the Million Song Dataset.",
    image: "/images/projects/12.png",
    category: "ai",
    technologies: ["Python", "Machine Learning"],
    gitUrl: "https://github.com/ShristiSharan/Music-Recommendation-System"
  },
  {
    id: 14,
    title: "Aragon Sample_Clone",
    description: "React-based EduTech front-end project with engaging 3D animations.",
    image: "/images/projects/13.png",
    category: "web",
    technologies: ["React", "Three.js", "CSS", "Authenticaton"],
    gitUrl: "https://github.com/ShristiSharan/Sample_Clone"
  },
  {
    id: 15,
    title: "MultiStage Sleep Classification",
    description: "Development of a novel approach for classifying sleep stages using photoplethysmographic (PPG) sensor data with Vision Transformer(Adv. deep learning)",
    image: "/images/projects/14.png",
    category: "ai",
    technologies: ["Python","Vision Transformer", "Tensor"],
    gitUrl: "https://github.com/ShristiSharan/DSP_Project",
    featured: true
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "ai", label: "AI/ML/DL" }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectsData.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-green-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my work spanning web development, artificial intelligence, and machine learning projects.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-green-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 border border-gray-800" style={{ backgroundColor: 'rgb(24 25 30)' }}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {project.featured && (
                      <span className="absolute top-3 left-3 bg-yellow-500/90 text-black px-3 py-1 rounded-lg text-sm font-medium shadow-sm">
                        Featured
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-500 hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                      {project.title}
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </h3>
                    <p className={`text-gray-400 mb-4 ${project.id > 2 ? 'line-clamp-2 h-[48px]' : ''}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        
      </div>
    </section>
  );
};

export default ProjectsSection;
