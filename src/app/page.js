import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Research from "./components/Research";
import HealthcareAI from "./components/HealthcareAI";
import Experience from "./components/Experience";
import { Skills, KindWords, Contact } from "./components/Closing";
import Effects from "./components/Effects";
import { site } from "./data";

export default function Home() {
  return (
    <div className="backdrop relative">
      <a
        href="#research"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Nav resume={site.resume} />
      <main className="relative z-10">
        <Hero />
        <Research />
        <HealthcareAI />
        <Experience />
        <Skills />
        <KindWords />
      </main>
      <div className="relative z-10">
        <Contact />
      </div>
      <Effects />
    </div>
  );
}
