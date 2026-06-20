import React, { useState, useEffect } from 'react';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Bikes from './components/Bikes';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Scroll Reveal Logic
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveals[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', reveal);
    reveal(); // Trigger on mount
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <div className="cta-banner reveal" style={{ background: 'var(--accent)', padding: '80px 5%', textAlign: 'center' }}>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', marginBottom: '32px' }}>
          Visit us at NH-6, Near Lonkhedi Fata, Ner, Dhule — Open from 8:00 AM daily!
        </h2>
        <a href="tel:9850100041" className="btn btn-outline" style={{ borderColor: '#fff', background: '#fff', color: '#000' }}>Call Now: 9850100041 / 7057200041</a>
      </div>
      <About />
      <Bikes />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
