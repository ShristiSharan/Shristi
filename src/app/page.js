'use client';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Extra from "./components/Extra";
import SocialSection from "./components/SocialSection";
// import CustomChatbot from './components/Chatbot/Mybot';
import Publication from "./components/Publication";
import AnimatedBackground from "./components/About/Animatedbg";
import ScrollVelocity from "./components/scrollvelocity";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000] relative">
      <Navbar />
      <div className="relative">
        {/* Hero Section with Animation */}
        <section className="relative min-h-screen w-full">
          {/* Animated Background */}
          <div className="absolute inset-0 ">
            <AnimatedBackground />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10">
            <div className="container mx-auto px-12 pt-32">
              <HeroSection />
              <SocialSection />
            </div>
          </div>
        </section>

        {/* Main Content with Dark Background */}
        <div className="bg-[rgba(0,0,0,0.8)] w-full">
          <div className="container mx-auto px-12">
            <AboutSection />
            <Expertise />
            <ProjectsSection />
            <Experience />
            <Publication />
            <Extra />
            <EmailSection />
          </div>
          <Footer />
        </div>

        {/* Scroll Velocity Section */}
        <div className="hidden md:block bg-[rgba(0,0,0,0.8)] w-full">
          <ScrollVelocity
            texts={[
              "Thank you for visiting my portfolio", 
              "Do connect with me",
            ]}
            velocity={100}
            className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500"
            damping={50}
            stiffness={400}
            numCopies={6}
          />
        </div>
      </div>
    </main>
  );
}
