import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HackathonGlance } from './components/HackathonGlance';
import { EventJourney } from './components/EventJourney';
import { InnovationShowcase } from './components/InnovationShowcase';
import { Winners } from './components/Winners';
import { OrganizingTeam } from './components/OrganizingTeam';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { ClosingStatement } from './components/ClosingStatement';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#080B0D] bg-grid-pattern text-[#F7F7F2] font-sans antialiased selection:bg-[#F58220] selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating particles behind every section */}
      <ParticleBackground />

      {/* 01 — NAVBAR */}
      <Navbar />

      {/* Main Stream */}
      <main className="relative z-10">
        {/* 02 — HERO */}
        <Hero />


        {/* 04 — HACKATHON AT A GLANCE */}
        <HackathonGlance />

        {/* 05 — EVENT JOURNEY */}
        <EventJourney />

        {/* 06 — INNOVATION SHOWCASE */}
        <InnovationShowcase />

        {/* 07 — WINNERS & RECOGNITION */}
        <Winners />

        {/* 08 — JUDGES / MENTORS / ORGANIZING TEAM */}
        <OrganizingTeam />

        {/* 09 — GALLERY & HIGHLIGHTS */}
        <Gallery />

        {/* 10 — FAQ */}
        <FAQ />

        {/* 11 — CLOSING / EVENT STATEMENT */}
        <ClosingStatement />
      </main>

      {/* 12 — FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
