"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, Calendar, Briefcase, GraduationCap, Code } from "lucide-react"
import Image from "next/image"

// Define skill gradients at the top level
const skillGradients = {
  frontend: "from-blue-500 to-cyan-400",
  backend: "from-purple-500 to-pink-500",
  ai: "from-green-500 to-emerald-400",
  database: "from-orange-500 to-red-500",
}

const ExperienceCard = ({ experience, isExpanded, onClick, isLeft, isMobile }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case "Full Time Job":
        return <Briefcase className="w-4 h-4" />
      case "Research":
        return <GraduationCap className="w-4 h-4" />
      case "Internship":
        return <Code className="w-4 h-4" />
      default:
        return <Briefcase className="w-4 h-4" />
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "bg-blue-500"
      case "research":
        return "bg-green-500"
      case "internship":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getLogoContainerClass = (company) => {
    if (company === "WhiteLabel Digital Services") {
      return `${isMobile ? "w-16 h-18" : "w-20 h-22"} relative rounded-lg overflow-hidden p-1.5 flex items-center justify-center bg-white`
    }
    if (company === "PostCare.AI") {
      return `${isMobile ? "w-18 h-18" : "w-28 h-22"} relative rounded-lg overflow-hidden p-1.5 flex items-center justify-center`
    }
    return `${isMobile ? "w-18 h-18" : "w-24 h-24"} relative rounded-lg overflow-hidden p-1.5 flex items-center justify-center`
  }

  const getLogoDimensions = (company) => {
    return {
      width: isMobile ? 50 : 65,
      height: isMobile ? 60 : 75,
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isMobile ? "w-full pl-8" : `w-5/12 ${isLeft ? "mr-auto" : "ml-auto"}`} cursor-pointer`}
    >
      <div
        onClick={onClick}
        className={`rounded-xl shadow-lg p-3 sm:p-4 transition-all duration-300 ${
          isExpanded ? "ring-2 ring-green-500 shadow-2xl" : ""
        }`}
        style={
          !isExpanded
            ? {
                backgroundColor: "rgb(24 25 30)",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px #f0f5ff",
              }
            : { backgroundColor: "rgb(24 25 30)" }
        }
      >
        <div
          className={`flex items-start justify-between mb-2 ${isMobile ? "flex-col sm:flex-row gap-3 sm:gap-0" : ""}`}
        >
          <div className="flex-1">
            <h3 className={`${isMobile ? "text-base sm:text-lg" : "text-lg"} font-semibold mb-1 text-white`}>
              {experience.position}
            </h3>
            <p className={`${isMobile ? "text-sm sm:text-base" : "text-base"} text-green-400 font-medium`}>
              {experience.company}
            </p>
            <p className={`${isMobile ? "text-xs sm:text-sm" : "text-sm"} text-gray-400 mt-1`}>{experience.location}</p>
          </div>
          <div className={`${isMobile ? "flex-row items-center" : "ml-3 flex-col items-end"} flex gap-2`}>
            {experience.logo && (
              <div className={getLogoContainerClass(experience.company)}>
                <Image
                  src={experience.logo || "/placeholder.svg"}
                  alt={`${experience.company} logo`}
                  {...getLogoDimensions(experience.company)}
                  className="object-contain w-auto h-auto max-w-full max-h-full"
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
            <div className="flex items-center gap-2">
              <span
                className={`inline-block px-2 py-0.5 rounded-full ${isMobile ? "text-xs" : "text-xs"} font-medium ${getTypeColor(experience.type)} text-white`}
              >
                {isMobile ? experience.type.split("(")[0] : experience.type}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-3 ${isMobile ? "text-xs sm:text-sm" : "text-sm"} text-gray-400 mb-2`}>
          <div className="flex items-center gap-1">
            <Calendar className={`${isMobile ? "w-3 h-3" : "w-3.5 h-3.5"}`} />
            {experience.timeline}
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-3 pt-3 border-t border-gray-800">
            <div>
              <h4 className={`font-semibold mb-1.5 text-gray-300 ${isMobile ? "text-sm" : ""}`}>Key Achievements:</h4>
              <ul className="space-y-1.5">
                {experience.description.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`${isMobile ? "text-xs sm:text-sm" : "text-sm"} text-gray-400 flex items-start gap-2`}
                  >
                    <span className="text-green-500 mt-1">•</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="pt-3">
              <h4 className={`font-semibold mb-2 text-gray-300 ${isMobile ? "text-sm" : ""}`}>Technical Skills:</h4>
              <div className="flex flex-wrap gap-1.5">
                {experience.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`px-2.5 py-1 rounded-full ${isMobile ? "text-xs" : "text-xs"} font-medium bg-gradient-to-r ${skillGradients[skill.category]} text-white shadow-md`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const SkillsShowcase = ({ isMobile }) => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "React Native", "MERN Stack"],
      gradient: skillGradients.frontend,
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "AWS", "Docker", "Kubernetes", "Big Data", "DSA", "Troubleshoot"],
      gradient: skillGradients.backend,
    },
    {
      category: "AI/ML",
      skills: ["LangChain", "LLM", "RAG", "Transformers", "NLP", "Computer Vision", "AI", "ML", "Deep Learning"],
      gradient: skillGradients.ai,
    },
    {
      category: "Database & Tools",
      skills: ["MongoDB", "SQL", "Git", "Jest", "FHIR", "HIPAA", "Google Cloud"],
      gradient: skillGradients.database,
    },
  ]

  return (
    <div className="mt-8 sm:mt-12">
      <h3 className={`${isMobile ? "text-xl sm:text-2xl" : "text-2xl"} font-bold text-center mb-4 sm:mb-6 text-white`}>
        Technical Skills Domain
      </h3>
      <div
        className={`grid ${isMobile ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"} gap-3 sm:gap-4`}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl p-3 sm:p-4 shadow-lg"
            style={{ backgroundColor: "rgb(24 25 30)" }}
          >
            <h4
              className={`${isMobile ? "text-base sm:text-lg" : "text-lg"} font-semibold mb-2 sm:mb-3 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
            >
              {category.category}
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-2 sm:px-3 py-1 rounded-full ${isMobile ? "text-xs sm:text-sm" : "text-sm"} bg-gradient-to-r ${category.gradient} text-white shadow-md`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const timelineRef = useRef(null)
  const experienceRefs = useRef({})

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Add scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timeline = timelineRef.current
      const timelineRect = timeline.getBoundingClientRect()
      const timelineStart = timelineRect.top + window.scrollY
      const timelineEnd = timelineRect.bottom + window.scrollY
      const timelineHeight = timelineEnd - timelineStart

      const scrollPosition = window.scrollY + window.innerHeight
      const progress = Math.min(Math.max((scrollPosition - timelineStart) / timelineHeight, 0), 1)

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experiences = [
    {
      id: "0",
      company: "Google",
      position: "Web Solutions Engineer",
      location: "Bangalore",
      timeline: "Jul 2025 - Present",
      type: "Full Time Job",
      logo: "/images/googlelogo.png",
      description: ["Incoming Web Solutions Engineer at Google"],
      skills: [
        { name: "Big Data", category: "backend" },
        { name: "AI", category: "ai" },
        { name: "ML", category: "ai" },
        { name: "SQL", category: "database" },
        { name: "Troubleshoot", category: "backend" },
        { name: "MERN Stack", category: "frontend" },
        { name: "DSA", category: "backend" },
      ],
    },
    {
      id: "1",
      company: "ixigo",
      position: "Software Developer",
      location: "Gurgaon",
      timeline: "Feb 2025 - Jun 2025",
      type: "Internship/PPO(paid)",
      logo: "/images/Ixigo_logo.svg.png",
      description: [
        "Contributed in scalable CMS to automate bookings and customer experience on Ixigo's booking platform.",
        "Built and integrated an AI-powered email editor & generator with real-time HTML/CSS previews and dynamic workflows for template customization. Reduced manual effort by 60%, streamlining for faster campaign execution.",
        "Implemented global search, duplicate detection, and document-backed recovery workflows for enhanced case handling. Boosted data integrity, reduced entry errors by 35%, and cut support queries by 25%",
        "Contributed to TARA bot-help chat system with AI-driven automation and NLP enhancements, achieving a 1.5x faster customer query resolution and real-time CMS integration for seamless content updates.",
      ],
      skills: [
        { name: "MERN", category: "frontend" },
        { name: "LangChain", category: "ai" },
        { name: "AWS", category: "backend" },
        { name: "SQL", category: "database" },
        { name: "Docker", category: "backend" },
        { name: "Kubernetes", category: "backend" },
      ],
    },
    {
      id: "2",
      company: "PostCare.AI",
      position: "FullStack Developer Intern",
      location: "Maryland, US - Remote",
      timeline: "Jul 2024 - Feb 2025",
      type: "Internship(paid)",
      logo: "/images/postcareai.png",
      description: [
        "Developed a real-time healthcare dashboard and cross-platform app (React Native & Swift), streamlining EHR integration for 1,500+ user record access and ensuring a unified experience for both patients and providers.",
        "Played a key role in designing and deploying an in-house AI-powered Health Bot using Llama 3 and RAG pipelines, improving personalized response to patients medical queries by 60% along with source citations.",
        "Optimized API integrations and implemented FHIR standards for seamless EHR connectivity, reducing beta testing bugs by 65% and cutting data retrieval time by half while ensuring compliance with healthcare data protocols.",
        "Enhanced web/app security by obfuscating and minifying frontend code, passing 200+ HIPAA security checks to protect sensitive patient data.",
      ],
      skills: [
        { name: "MERN", category: "frontend" },
        { name: "LLM", category: "ai" },
        { name: "RAG", category: "ai" },
        { name: "AWS", category: "backend" },
        { name: "TailwindCSS", category: "frontend" },
        { name: "React Native", category: "frontend" },
        { name: "Swift", category: "frontend" },
        { name: "HIPAA", category: "database" },
      ],
    },
    {
      id: "3",
      company: "IIT Delhi",
      position: "R&D Intern",
      location: "Delhi",
      timeline: "Apr 2024 - Jul 2024",
      type: "Research(paid)",
      logo: "/images/indian-institute-of-technology-delhi-logo-png_seeklogo-483677.png",
      description: [
        "Engineered a Vision Transformer (ViT) model for Multistage sleep classification with PPG signal, setting a global benchmark accuracy of 97.70%.",
        "Integrated a real-time sleep-stage web dashboard, boosting data accessibility and user engagement by 45%.",
        "Principal author of a research paper under publication in IEEE Journal of Biomedical and Health Informatics (JBHI).",
        "Contributed to the development and integration of a web dashboard to showcase real-time sleep stage insights.",
      ],
      skills: [
        { name: "React JS", category: "frontend" },
        { name: "DL-Transformers", category: "ai" },
        { name: "Python", category: "backend" },
        { name: "Docker", category: "backend" },
        { name: "GCP", category: "backend" },
      ],
    },
    {
      id: "4",
      company: "WhiteLabel Digital Services",
      position: "Software Developer Intern",
      location: "Remote",
      timeline: "Jun 2023 - Aug 2023",
      type: "Internship(paid)",
      logo: "/images/whitelabel.png",
      description: [
        "Designed and built an EdTech website from scratch, aligning UI with Figma for enhanced user engagement.",
        "Improved application stability with interactive UI forms, achieving 91% test coverage and reducing critical errors by 60%, while optimizing backend API communication to reduce response time by 20 seconds per request.",
        "Developed and integrated a live static landing page for EDULAKE, an edutech website, ensuring seamless data fetching and API integration.",
      ],
      skills: [
        { name: "React JS", category: "frontend" },
        { name: "Redux", category: "frontend" },
        { name: "Jest", category: "database" },
        { name: "Express", category: "backend" },
        { name: "TypeScript", category: "frontend" },
        { name: "Bootstrap", category: "frontend" },
      ],
    },
    {
      id: "5",
      company: "GirlScript Summer of Code",
      position: "Open Source Contributor",
      location: "Remote",
      timeline: "Mar 2023 - May 2023",
      type: "Open Source",
      logo: "/images/gssoc.jpg",
      description: [
        "Contributed to multiple open-source projects, focusing on web development and documentation",
        "Collaborated with developers worldwide to improve project features and fix bugs",
        "Enhanced project documentation and added new features to improve user experience",
      ],
      skills: [
        { name: "React", category: "frontend" },
        { name: "Git", category: "database" },
        { name: "Open Source", category: "backend" },
        { name: "Documentation", category: "backend" },
      ],
    },
    {
      id: "6",
      company: "IITRAM",
      position: "Summer Research Intern",
      location: "Ahmedabad",
      timeline: "May 2023 - July 2023",
      type: "Research(paid)",
      logo: "/images/iitram.png",
      description: [
        "Superheaded the development of SHAKTI Bot, a fully autonomous robot with 80% cost-effective hardware.",
        "Optimized route planning using ROS, SLAM, and ML algorithms, delivering 35% better performance and 75% faster response than RL methods.",
        "Integrated YOLOv8 and deep learning for precise segmentation enabling smooth navigation.",
      ],
      skills: [
        { name: "ROS", category: "backend" },
        { name: "SLAM", category: "ai" },
        { name: "YOLOv8", category: "ai" },
        { name: "Deep Learning", category: "ai" },
        { name: "Computer Vision", category: "ai" },
        { name: "Python", category: "backend" },
      ],
    },
    {
      id: "7",
      company: "IITRAM",
      position: "Machine Learning Research Intern",
      location: "Ahmedabad",
      timeline: "Dec. 2022 - Feb. 2023",
      type: "Research",
      logo: "/images/iitram.png",
      description: [
        "Led data preprocessing and machine learning model development for computer vision, focusing on tasks like tumor detection and short circuit localization in transformers.",
        "Implemented neural networks and image processing for accurate placement in object detection of automobile parts using live CCTV footage data.",
      ],
      skills: [
        { name: "Computer Vision", category: "ai" },
        { name: "Deep Learning", category: "ai" },
        { name: "Neural Networks", category: "ai" },
        { name: "Image Processing", category: "ai" },
        { name: "Python", category: "backend" },
        { name: "TensorFlow", category: "ai" },
      ],
    },
  ]

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id)
    setTimeout(() => {
      const el = experienceRefs.current[id]
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }, 100)
  }

  const scrollToExperience = (id) => {
    const element = experienceRefs.current[id]
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  const autoScrollTimeline = async () => {
    if (isAutoScrolling) return
    setIsAutoScrolling(true)

    for (let i = 0; i < experiences.length; i++) {
      const experience = experiences[i]
      scrollToExperience(experience.id)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setExpandedId(experience.id)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setExpandedId(null)
      await new Promise((resolve) => setTimeout(resolve, 500))
    }

    setIsAutoScrolling(false)
  }

  return (
    <section id="experience" className="min-h-screen bg-black py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${isMobile ? "text-2xl sm:text-3xl" : "text-4xl"} font-bold mb-4 sm:mb-6 mt-4 sm:mt-6`}
          >
            Professional <strong className="green">Experience</strong>
          </motion.h2>
          <p className={`${isMobile ? "text-base sm:text-lg" : "text-lg"} text-gray-400 mb-3 sm:mb-4 px-2`}>
            Journey through my professional and research experiences
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={autoScrollTimeline}
            disabled={isAutoScrolling}
            className={`px-4 sm:px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors disabled:opacity-50 ${isMobile ? "text-sm" : ""}`}
          >
            {isAutoScrolling ? "Auto Scrolling..." : "Auto Scroll Timeline"}
          </motion.button>
        </div>

        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Timeline Line with dynamic gradient */}
          <div
            className={`absolute ${isMobile ? "left-4" : "left-1/2 transform -translate-x-1/2"} w-1 h-full rounded-full shadow-lg`}
            style={{
              background: `linear-gradient(to bottom, 
                rgb(34, 197, 94) ${Math.min(scrollProgress * 100, 33)}%,
                rgb(59, 130, 246) ${Math.min(scrollProgress * 100, 66)}%,
                rgb(168, 85, 247) ${Math.min(scrollProgress * 100, 100)}%
              )`,
              transition: "background 0.1s ease-out",
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={experience.id}
                  ref={(el) => (experienceRefs.current[experience.id] = el)}
                  className="relative flex items-center"
                >
                  {/* Timeline Node with dynamic color */}
                  <div
                    className={`absolute ${isMobile ? "left-4" : "left-1/2"} transform ${isMobile ? "-translate-x-1/2" : "-translate-x-1/2"} z-10`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} rounded-full ${
                        expandedId === experience.id ? "ring-3 ring-green-500" : ""
                      } border-3 border-black shadow-lg flex items-center justify-center`}
                      style={{
                        background: `linear-gradient(to right, 
                          ${
                            scrollProgress < 0.33
                              ? "rgb(34, 197, 94)"
                              : scrollProgress < 0.66
                                ? "rgb(59, 130, 246)"
                                : "rgb(168, 85, 247)"
                          }, 
                          ${
                            scrollProgress < 0.33
                              ? "rgb(59, 130, 246)"
                              : scrollProgress < 0.66
                                ? "rgb(168, 85, 247)"
                                : "rgb(34, 197, 94)"
                          })`,
                      }}
                    >
                      <span className={`text-white ${isMobile ? "text-xs" : "text-xs"}`}>{index + 1}</span>
                    </motion.div>
                  </div>

                  <ExperienceCard
                    experience={experience}
                    isExpanded={expandedId === experience.id}
                    onClick={() => toggleExpanded(experience.id)}
                    isLeft={isLeft}
                    isMobile={isMobile}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Skills Showcase moved below timeline */}
        <div className="mt-12 sm:mt-16">
          <SkillsShowcase isMobile={isMobile} />
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {experiences.map((experience, index) => (
            <motion.button
              key={experience.id}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToExperience(experience.id)}
              className={`${isMobile ? "w-2 h-2" : "w-2.5 h-2.5"} rounded-full transition-all duration-200 ${
                expandedId === experience.id ? "bg-green-500" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to ${experience.position}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
