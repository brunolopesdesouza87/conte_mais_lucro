
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Contact from '../components/Contact';
import BlogSection from '../components/BlogSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Conte + Lucro | Contabilidade Estratégica";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Contact />
      <BlogSection />
    </>
  );
};

export default HomePage;
