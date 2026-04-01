import React from 'react';
import ScrollyCanvas from '../components/ScrollyCanvas';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import ResumeButton from '../components/ResumeButton';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="bg-[#090a0f] min-h-screen">
      <Navbar />
      <div id="hero">
        <ScrollyCanvas />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <ResumeButton />
    </main>
  );
}
