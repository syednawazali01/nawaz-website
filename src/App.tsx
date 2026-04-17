import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Header from './components/sections/Header';
import HeroSection from './components/sections/HeroSection';
import Projects from './components/Projects';
import SkillsSection from './components/sections/SkillsSection';

function App() {
  return (
    <div className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <Header />

      <main id="top">
        <HeroSection />
        <AboutSection />
        <Projects />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
