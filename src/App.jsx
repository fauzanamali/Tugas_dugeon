import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// Data Mock untuk Skills dan Projects (ganti dengan path gambar Anda)
const skillData = [
  { name: 'UI/UX', icon: 'M13.5 6a.75.75 0 0 1 .75.75c0 .414-.336.75-.75.75h-3a.75.75 0 0 1-.75-.75c0-.414.336-.75.75-.75h3Z' }, // Placeholder SVG path
  { name: 'Coding', icon: 'M17.25 6.75 14.5 4l2.75 2.75ZM7.75 6.75 5 4l2.75 2.75Z' }, // Placeholder SVG path
  { name: 'Disain', icon: 'M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18 12a6 6 0 1 0-12 0 6 6 0 0 0 12 0Z' }, // Placeholder SVG path
];

// Ganti 'path/to/your/image.jpg' dengan path gambar profil/proyek Anda
const projectImages = [
  'path/to/your/image.jpg',
  'path/to/your/image.jpg',
  'path/to/your/image.jpg',
];

const App = () => {
  return (
    <div className="bg-[#fcf8e3] min-h-screen font-['Poppins']">
      <Header />
      <main>
        <Hero profileImage="path/to/your/profile_image.jpg" />
        <About />
        <Skills skills={skillData} />
        <Projects images={projectImages} />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;