"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaGraduationCap,
  FaTrophy,
  FaUniversity,
  FaCode,
  FaUsers,
  FaRocket,
  FaStar,
  FaCalendar,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"
import Image from "next/image"

const Extra = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredCard, setHoveredCard] = useState(null)
  const [achievementCount, setAchievementCount] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [showAllCategories, setShowAllCategories] = useState(false)

  const subtleGreen = "#4CAF50"
  const gradientGreen = "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)"

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const rolesAndRecognitions = [
    {
      icon: <FaTrophy />,
      category: "Career",
      title: "Google India — Web Solutions Engineer (2025)",
      badge: "Full-time",
      description: "Highest placement package at IITRAM.",
      color: "#FFD700",
    },
    {
      icon: <FaTrophy />,
      category: "Career",
      title: "ixigo — Software Developer",
      badge: "Full-time",
      description: "Highest placement package at IITRAM.",
      color: "#4CAF50",
    },
    {
      icon: <FaTrophy />,
      category: "Hackathons",
      title: "Google Code Jam 2023",
      badge: "Top 5k / 98k",
      description: "Competitive programming excellence",
      color: "#FF6B6B",
    },
    {
      icon: <FaTrophy />,
      category: "Hackathons",
      title: "ICPC Algo Queen 2023",
      badge: "77th Position",
      description: "Algorithmic problem solving",
      color: "#4ECDC4",
    },
    {
      icon: <FaUniversity />,
      category: "Leadership",
      title: "Joint Technical Secretary",
      badge: "IITRAM",
      description: "Leading technical initiatives",
      color: "#45B7D1",
    },
    {
      icon: <FaCode />,
      category: "Leadership",
      title: "GitHub Global Campus Student",
      badge: "Global Program",
      description: "Open source community member",
      color: "#96CEB4",
    },
    {
      icon: <FaUsers />,
      category: "Open Source",
      title: "GSSoC'24 Contributor",
      badge: "Campus Ambassador",
      description: "Open source contributions",
      color: "#FFEAA7",
    },
    {
      icon: <FaTrophy />,
      category: "Hackathons",
      title: "Hackalytics'23 Finalist",
      badge: "Data Science Hackathon",
      description: "Data science innovation",
      color: "#DDA0DD",
    },
    {
      icon: <FaRocket />,
      category: "Hackathons",
      title: "MLH HackAPI Week",
      badge: "Winner",
      description: "API development excellence",
      color: "#FFB347",
    },
    {
      icon: <FaUniversity />,
      category: "Innovation",
      title: "SSIP Grantee",
      badge: "₹2.5L Govt Funded",
      description: "Innovation project funding",
      color: "#87CEEB",
    },
    {
      icon: <FaStar />,
      category: "Leadership",
      title: "Unstop Igniter",
      badge: "IITRAM x Unstop",
      description: "Campus innovation leader",
      color: "#F0E68C",
    },
    {
      icon: <FaGraduationCap />,
      category: "Leadership",
      title: "Google Women Techmaker",
      badge: "Community Leader",
      description: "Tech community leadership",
      color: "#FFB6C1",
    },
    {
      icon: <FaCode />,
      category: "Hackathons",
      title: "MLH Fellowship",
      badge: "Waitlisted",
      description: "Open source fellowship",
      color: "#98FB98",
    },
    {
      icon: <FaUsers />,
      category: "Leadership",
      title: "Founding Lead",
      badge: "IITRAM Coding Club",
      description: "Building coding community",
      color: "#DEB887",
    },
  ]

  const categories = [
    { name: "All", icon: <FaStar />, count: rolesAndRecognitions.length },
    {
      name: "Career",
      icon: <FaTrophy />,
      count: rolesAndRecognitions.filter((r) => r.category === "Career").length,
    },
    {
      name: "Hackathons",
      icon: <FaTrophy />,
      count: rolesAndRecognitions.filter((r) => r.category === "Hackathons").length,
    },
    {
      name: "Leadership",
      icon: <FaUsers />,
      count: rolesAndRecognitions.filter((r) => r.category === "Leadership").length,
    },
    {
      name: "Innovation",
      icon: <FaRocket />,
      count: rolesAndRecognitions.filter((r) => r.category === "Innovation").length,
    },
    {
      name: "Open Source",
      icon: <FaCode />,
      count: rolesAndRecognitions.filter((r) => r.category === "Open Source").length,
    },
  ]

  const filteredRoles =
    activeCategory === "All"
      ? rolesAndRecognitions
      : rolesAndRecognitions.filter((item) => item.category === activeCategory)

  // Counter animation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setAchievementCount((prev) => {
        if (prev < filteredRoles.length) {
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, 100)

    return () => clearInterval(timer)
  }, [filteredRoles.length])

  // Reset counter when category changes
  useEffect(() => {
    setAchievementCount(0)
  }, [activeCategory])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const educationVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  }

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "I've known Shristi for the past three years, and we've collaborated on multiple projects related to AI/ML infrastructure development. I admire her not only as a responsible professional but also as an excellent communicator and team builder. She brings incredible energy and creativity to every team. Her strong technical knowledge combined with her constant drive to learn and innovate places her at the top. I wish her all the best for her future and hope she never stops building.",
      name: "Kamlesh Kumar",
      title: "Generative AI Research Engineer • Williams-Sonoma, Inc., California, US",
      avatar: "/images/avatar_testimonial/KKavatar.png",
      gradient: "from-red-900 via-rose-900 to-slate-900",
    },
    {
      id: 2,
      text: "It's rare to come across someone like Shristi—a standout professional who is compassionate, hardworking, and consistently exceeds expectations. In this AI-driven world, she has shown not only strong problem-solving skills but also maturity, quick learning, and adaptability. Her ability to handle complex challenges, collaborate effectively, and deliver clean, efficient solutions under pressure speaks volumes. Shristi is the kind of talent every tech team hopes to have—smart, sincere, and exceptional.",
      name: "Prince Kumar",
      title: "Machine Learning Engineer • SkyLark Labs",
      avatar: "/images/avatar_testimonial/princeavatar.jpeg",
      gradient: "from-purple-800 via-purple-900 to-slate-900",
    },
    {
      id: 3,
      text: "Working with Shristi as B.Tech project partners has been a journey full of learning and inspiration. She demonstrated a strong work ethic, quick learning ability, and thorough research skills. Her presentation skills, confident communication, and ability to simplify complex concepts truly stood out. Her patience and organized approach kept our team on track. Shristi takes initiative, leads with confidence, and contributes innovative ideas—making her an outstanding teammate. I'd love to work with her again.",
      name: "Ankita Choudhary",
      title: "Electrical Engineer • Incoming Pilot",
      avatar: "/images/avatar_testimonial/ankitaavatar.jpeg",
      gradient: "from-teal-900 via-blue-700 to-slate-900",
    },
    {
      id: 4,
      text: "We at PostCare.AI are incredibly proud of Shristi and excited to see her embark on the next chapter of her journey after graduation. We are thrilled by her passion and determination in computer science.  Thank you, Shristi, for your dedication and the commitment you showed while with us. We wish you all the best in your future endeavors—you will truly be missed!.",
      name: "Gordan McKenzie",
      title: "CEO • PostCare.AI, Maryland, US",
      avatar: "/images/avatar_testimonial/gordonavatar.webp",
      gradient: "from-green-900 via-emerald-900 to-slate-900",
    },
    {
      id: 5,
      text: "I wholeheartedly recommend Ms. Shristi Sharan, a driven and sincere student I mentored during her undergraduate studies. She demonstrated exceptional initiative and technical depth in our research project, particularly in deep learning and biomedical signal processing. Her quick learning ability, thoughtful contributions, and collaborative spirit were outstanding. She consistently exceeded expectations and showed great enthusiasm in every task.",
      name: "Dr. Manish Sharma",
      title: "Associate Professor • IITRAM, Top 1% Researcher in the World",
      avatar: "/images/avatar_testimonial/manishavatar.jpg",
      gradient: "from-yellow-800 via-orange-900 to-slate-900",
    },
    {
      id: 6,
      text: "As your brother, I've seen your journey up close—full of persistence, late nights, and constant learning. You've achieved so much through sheer will and passion. You inspire everyone around you. Always got your back to support you. Keep making us proud, Shristi!",
      name: "Sagar Sharan",
      title: "Machine Learning Engineer • Accenture",
      avatar: "/images/avatar_testimonial/sagaravatar.jpeg",
      gradient: "from-indigo-900 via-blue-900 to-slate-900",
    },
    {
      id: 7,
      text: "Shristi, proud of you. I have always been concerned and protective, correcting you to help you learn—and you took it all in with grace. I'm proud of the path you've carved, and I support you wholeheartedly. Your qualities and achievements bring me great joy, and you continue making proud not just me, but our entire family.",
      name: "Suraj Sharan",
      title: "Senior Data Scientist • G42 Adnoc, Abu Dhabi, UAE",
      avatar: "/images/avatar_testimonial/surajavatar.png",
      gradient: "from-pink-900 via-fuchsia-900 to-slate-900",
    },
    {
      id: 8,
      text: "During Shristi's Research & Development Internship at IIT Delhi, she co-developed PPG-VT-NET for Automated Sleep Structure Identification. Her strong technical expertise in biomedical signal processing and deep learning was evident throughout the project. She demonstrated excellent research capabilities, initiative, and analytical skills, making significant contributions to both implementation and analysis. Her dedication and technical acumen make her a promising researcher with great potential for future success.",
      name: "Dr. Deepak Joshi",
      title: "Associate Professor • Center of Biomedical, IIT Delhi",
      avatar: "/images/avatar_testimonial/deepakavatar.jpg",
      gradient: "from-red-900 via-grey-800 to-black-900",
    },
    {
      id: 9,
      text: "Shristi played a key role in developing the front end of PostCare.AI. She skillfully transformed the provided design into a functional and responsive user experience, working closely with the backend & AI engineer for smooth integration. Her expertise in React, HTML, CSS, and JavaScript was clear, and she consistently showed strong commitment to feedback and follow-through. Once she commits to a task, she completes it with focus and precision.",
      name: "Joyee Sarkar",
      title: "Managing Director • PostCare.AI, Maryland, US",
      avatar: "/images/avatar_testimonial/joyeeavatar.webp",
      gradient: "from-blue-900 via-cyan-900 to-slate-900",
    },
    {
      id: 10,
      text: "Shristi is an exceptional developer with remarkable technical skills and a strong work ethic. Her ability to quickly grasp complex requirements and deliver high-quality solutions is impressive. She consistently demonstrates excellent problem-solving abilities and maintains clear communication throughout projects. Her dedication to writing clean, maintainable code and her collaborative approach make her an invaluable team member.",
      name: "Ekagra Midha",
      title: "Senior Software Engineer • ixigo",
      avatar: "/images/avatar_testimonial/ekagraavatar.jpeg",
      gradient: "from-purple-700 via-pink-800 to-indigo-500",
    },
  ]

  function TestimonialsSection() {
    const extendedTestimonials = [...testimonials, ...testimonials]
    const [offset, setOffset] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [currentGradient, setCurrentGradient] = useState(0)

    // Responsive card width
    const CARD_WIDTH = isMobile ? 240 : 340
    const CARD_GAP = isMobile ? 16 : 24
    const SPEED = isMobile ? 0.8 : 1.1

    const gradients = [
      "from-purple-400 to-pink-400",
      "from-green-500 to-yellow-400",
      "from-blue-500 to-cyan-400",
      "from-orange-500 to-red-500",
      "from-indigo-500 to-purple-500",
      "from-emerald-500 to-teal-400",
      "from-rose-500 to-pink-500",
      "from-violet-500 to-fuchsia-500",
    ]

    useEffect(() => {
      let raf
      const animate = () => {
        if (!isPaused) {
          setOffset((prev) => {
            const newOffset = prev - SPEED
            if (newOffset <= -(CARD_WIDTH + CARD_GAP) * testimonials.length) {
              setCurrentGradient((prev) => (prev + 1) % gradients.length)
              return 0
            }
            return newOffset
          })
        }
        raf = requestAnimationFrame(animate)
      }
      raf = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(raf)
    }, [isPaused, CARD_WIDTH, CARD_GAP, SPEED])

    return (
      <section className="bg-[rgb(24,25,30)] text-white py-8 sm:py-12 px-2 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-10 px-4">
            <p className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-2">TESTIMONIALS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Word on the street{" "}
              <span
                className={`text-transparent bg-gradient-to-r ${gradients[currentGradient]} bg-clip-text italic transition-all duration-1000`}
              >
                about me
              </span>
            </h2>
          </div>
          <div
            className="relative w-full overflow-x-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(${offset}px)`,
                transition: "transform 0.04s linear",
                gap: `${CARD_GAP}px`,
                width: `${extendedTestimonials.length * (CARD_WIDTH + CARD_GAP)}px`,
              }}
            >
              {extendedTestimonials.map((testimonial, idx) => {
                let avatarSize = isMobile ? 28 : 40
                let avatarWidth = isMobile ? 28 : 40
                let avatarHeight = isMobile ? 28 : 40

                if (testimonial.name === "Kamlesh Kumar") {
                  avatarWidth = isMobile ? 38 : 57
                  avatarHeight = isMobile ? 42 : 62
                } else if (testimonial.name === "Dr. Manish Sharma") {
                  avatarWidth = isMobile ? 38 : 57
                  avatarHeight = isMobile ? 38 : 57
                } else if (testimonial.name === "Suraj Sharan") {
                  avatarSize = isMobile ? 32 : 48
                }

                return (
                  <div
                    key={testimonial.id + "-" + idx}
                    className={`bg-gradient-to-br ${testimonial.gradient} rounded-2xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden text-left`}
                    style={{
                      minWidth: `${CARD_WIDTH}px`,
                      maxWidth: `${CARD_WIDTH}px`,
                      height: isMobile ? "300px" : "400px",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                    <div className="relative z-10">
                      <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-medium text-left line-clamp-6 sm:line-clamp-none">
                        {isMobile && testimonial.text.length > 5550
                          ? testimonial.text.substring(0, 3550) + "..."
                          : testimonial.text}
                      </p>
                    </div>
                    <div className="relative z-10 flex items-center gap-2 sm:gap-3 mt-2">
                      <div
                        className="rounded-full overflow-hidden flex items-center justify-center"
                        style={{
                          width:
                            testimonial.name === "Kamlesh Kumar"
                              ? avatarWidth
                              : testimonial.name === "Dr. Manish Sharma"
                                ? avatarWidth
                                : avatarSize,
                          height:
                            testimonial.name === "Kamlesh Kumar"
                              ? avatarHeight
                              : testimonial.name === "Dr. Manish Sharma"
                                ? avatarHeight
                                : avatarSize,
                        }}
                      >
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={
                            testimonial.name === "Kamlesh Kumar"
                              ? avatarWidth
                              : testimonial.name === "Dr. Manish Sharma"
                                ? avatarWidth
                                : avatarSize
                          }
                          height={
                            testimonial.name === "Kamlesh Kumar"
                              ? avatarHeight
                              : testimonial.name === "Dr. Manish Sharma"
                                ? avatarHeight
                                : avatarSize
                          }
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-white font-bold text-xs sm:text-sm truncate">{testimonial.name}</h4>
                        <p className="text-white/80 text-xs leading-tight line-clamp-2">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Mobile category display logic
  const visibleCategories = isMobile && !showAllCategories ? categories.slice(0, 3) : categories
  const hiddenCategoriesCount = isMobile ? categories.length - 3 : 0

  return (
    <section id="extras" className="relative overflow-hidden" style={{ background: "rgb(24 25 30)" }}>
      <div className="relative z-10 py-8 sm:py-16 px-4 text-center">
        {/* Header with animated counter */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white px-2">
            Extra{" "}
            <span
              style={{ background: gradientGreen, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Highlights
            </span>
          </h2>
          <motion.div
            className="text-base sm:text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-semibold text-xl sm:text-2xl text-green-400">{achievementCount}</span> achievements
            and counting
          </motion.div>
        </motion.div>

        {/* Enhanced Education Section */}
        <motion.div
          variants={educationVariants}
          initial="hidden"
          animate="visible"
          className="relative mb-12 sm:mb-16 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 sm:p-4 rounded-full shadow-lg">
                <FaGraduationCap className="text-2xl sm:text-3xl text-white" />
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Education Journey</h3>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="text-left space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <FaUniversity className="text-green-600 text-lg sm:text-xl flex-shrink-0" />
                    <h4 className="font-bold text-lg sm:text-xl text-white">IITRAM</h4>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-gray-200">Bachelor of Technology</p>
                  <p className="text-sm sm:text-base text-gray-400">Electrical and Computer Science Engineering</p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <FaCalendar className="flex-shrink-0" />
                    <span>Dec. 2021 - May 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <FaMapMarkerAlt className="flex-shrink-0" />
                    <span>Ahmedabad, Gujarat</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-green-900 to-blue-900 p-4 sm:p-6 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">4</div>
                      <div className="text-xs sm:text-sm text-gray-300">Years of Learning</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Category Filters - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {visibleCategories.map((cat, index) => (
              <motion.button
                key={cat.name}
                className={`group relative px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                  activeCategory === cat.name
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105"
                    : "bg-white/10 backdrop-blur-sm text-gray-200 hover:bg-green-900 hover:text-green-400 border border-gray-700"
                }`}
                onClick={() => setActiveCategory(cat.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-sm sm:text-lg">{cat.icon}</span>
                <span className="hidden sm:inline">{cat.name}</span>
                <span className="sm:hidden">{cat.name.length > 8 ? cat.name.substring(0, 6) + ".." : cat.name}</span>
                <span
                  className={`text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
                    activeCategory === cat.name ? "bg-white/20 text-white" : "bg-green-900 text-green-300"
                  }`}
                >
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Show More/Less button for mobile */}
          {isMobile && hiddenCategoriesCount > 0 && (
            <motion.button
              className="mt-3 px-4 py-2 bg-white/10 backdrop-blur-sm text-gray-200 rounded-full text-sm flex items-center gap-2 mx-auto border border-gray-700"
              onClick={() => setShowAllCategories(!showAllCategories)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllCategories ? (
                <>
                  Show Less <FaChevronUp className="text-xs" />
                </>
              ) : (
                <>
                  Show {hiddenCategoriesCount} More <FaChevronDown className="text-xs" />
                </>
              )}
            </motion.button>
          )}
        </motion.div>

        {/* Enhanced Achievements Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
          >
            {filteredRoles.map((role, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                className="group relative"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: isMobile ? -4 : -8 }}
              >
                <div className="relative bg-white/10 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${role.color}20 0%, ${role.color}40 100%)`,
                    }}
                  />

                  {/* Floating icon - adjusted for mobile */}
                  <motion.div
                    className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: role.color }}
                    animate={{
                      rotate: hoveredCard === index ? 360 : 0,
                      scale: hoveredCard === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-sm sm:text-base">{role.icon}</span>
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <motion.div
                        className="p-2 sm:p-3 rounded-xl text-lg sm:text-2xl flex-shrink-0"
                        style={{ backgroundColor: `${role.color}20`, color: role.color }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {role.icon}
                      </motion.div>
                      <div className="flex-1 text-left min-w-0">
                        <h4 className="font-bold text-sm sm:text-lg text-white mb-2 group-hover:text-green-400 transition-colors leading-tight">
                          {role.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                      style={{
                        backgroundColor: `${role.color}15`,
                        color: role.color,
                        border: `1px solid ${role.color}30`,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaStar className="text-xs" />
                      <span className="truncate">{role.badge}</span>
                    </motion.div>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Hackathons", value: "6+", icon: <FaTrophy /> },
            { label: "Leadership Roles", value: "5+", icon: <FaUsers /> },
            { label: "Open Source", value: "2+", icon: <FaCode /> },
            { label: "Innovations", value: "1+", icon: <FaRocket /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl text-green-400 mb-1 sm:mb-2">{stat.icon}</div>
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <TestimonialsSection />
      </div>
    </section>
  )
}

export default Extra
