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
// import Background from './components/Background';
import Publication from "./components/Publication";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div>
        {/* <Background/> */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <SocialSection />
        {/* <CustomChatbot/> */}
        <AboutSection />
        <Expertise/>
        <ProjectsSection />
        <Experience/>
        <Publication/>
        <Extra/>
        <EmailSection />
      </div>
      </div>
      <Footer />
    </main>
  );
}

