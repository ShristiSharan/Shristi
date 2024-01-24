"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Portfolio Website",
    description: "Portfolio website with AI customchatbot",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/ShristiSharan/Shristi",
    previewUrl: "/https://shristi-gamma.vercel.app/",
  },
  {
    id: 2,
    title: "Chatbot in JS",
    description: "Smart personalized bot",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/chatbot-with-js-main",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Todo_app",
    description: "To-do list website made with React JS, TypeScript, Tailwind, Redux Toolkit.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ShristiSharan/Todo_app",
    previewUrl: "/https://dapper-haupia-791912.netlify.app/",
  },

  {
    id: 5,
    title: "Invoice Generator",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/Invoice_Generator",
    previewUrl: "https://6461a80e69629c01bb75c797--lucent-cuchufli-ddc760.netlify.app/",
  },
  {
    id: 6,
    title: "Responsive-Interface-for-OpenAI-s-GPT-Text-Completion-Models",
    description: "Developed a responsive UI,Merlin-using React for OpenAI's GPT text completion models. Connected an API endpoint to the search bar, implemented server-sent events (SSE) for streaming results, and styled the project with Tailwind CSS for a polished appearance.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ShristiSharan/Responsive-Interface-for-OpenAI-s-GPT-Text-Completion-Models",
    previewUrl: "https://merlin-task.netlify.app/",
  },
  {
    id: 7,
    title: "Edulake",
    description: "Freelancing work- EduTech website built from scratch made with React JS, Javascript, Bootstrap, Redux Toolkit.",
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ShristiSharan/eduleka_static",
    previewUrl: " ",
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
        <h2 className="text-4xl font-bold mb-8 mt-9">My <strong className="green"> Projects</strong></h2>
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
          name="Mobile"
          isSelected={tag === "Mobile"}
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
