import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skill/Skills';
import Projects from './components/Projects/Projects';
import CallToAction from './components/Cta/CallToAction';
import Footer from './components/Footer/Footer';

const texts = [
  "SELAMAT DATANG",
  "WELCOME",
  "ようこそ",
  "환영합니다",
  "Добро пожаловать",
  "Καλως ΗΡΘΑΤΕ",
  "स्वागत है",
  "ברוך הבא",
];

const skillData = [
  { name: "UI/UX", icon: "M13.5 6..." },
  { name: "Coding", icon: "M17.25 6.75..." },
  { name: "Disain", icon: "M16.5 12..." },
];

const projectImages = [
  "path/to/your/image.jpg",
  "path/to/your/image.jpg",
  "path/to/your/image.jpg",
];

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (showIntro) {
      const interval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 350);

      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [showIntro]);

  return (
    <>
      {showIntro ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-6xl font-extrabold z-50">
          <span className="animate-pulse">{texts[textIndex]}</span>
        </div>
      ) : (
        <div className="bg-[#fcf8e3] min-h-screen font-['Poppins']">
          <Header />
          <main>
            <Hero profileImage="path/to/profile_image.jpg" />
            <About />
            <Skills skills={skillData} />
            <Projects images={projectImages} />
            <CallToAction />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
