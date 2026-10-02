import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EventInfoStrip } from './components/EventInfoStrip';
import { WhyParticipate } from './components/WhyParticipate';
import { SIHThemes } from './components/SIHThemes';
import { ProblemStatements } from './components/ProblemStatements';
import { HackathonProcess } from './components/HackathonProcess';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { OrganizingTeam } from './components/OrganizingTeam';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#080B0D] text-[#F7F7F2] font-sans antialiased selection:bg-[#F58220] selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* 01 — NAVBAR */}
      <Navbar />

      {/* Main Stream */}
      <main>
        {/* 02 — HERO */}
        <Hero />

        {/* 03 — EVENT INTRO / ABOUT */}
        <About />

        {/* 04 — QUICK EVENT INFO STRIP */}
        <EventInfoStrip />

        {/* 05 — WHY PARTICIPATE */}
        <WhyParticipate />

        {/* 06 — SIH THEMES */}
        <SIHThemes />

        {/* 07 — PROBLEM STATEMENTS */}
        <ProblemStatements />

        {/* 08 — HACKATHON PROCESS */}
        <HackathonProcess />

        {/* 09 — TIMELINE */}
        <Timeline />

        {/* 10 — GALLERY */}
        <Gallery />

        {/* 11 — ORGANIZING TEAM */}
        <OrganizingTeam />

        {/* 12 — FAQ */}
        <FAQ />

        {/* 13 — FINAL CTA */}
        <FinalCTA />
      </main>

      {/* 14 — FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
