import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: '80px', paddingBottom: 0,
      background: 'radial-gradient(circle at 80% 50%, #151515 0%, var(--bg-base) 60%)',
      overflow: 'hidden'
    }}>
      <style>{`
        #home::after {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none; z-index: 0;
        }
      `}</style>
      <svg style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', width: '75vw', maxWidth: '1000px', opacity: 0.03, zIndex: 1, pointerEvents: 'none' }} viewBox="0 0 512 512">
        <path d="M400 320c-30.8 0-56.4 20.3-65.7 48h-15.6l-50.6-101.2c-5.8-11.5-17.8-18.8-30.8-18.8H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h101l41.5 83C259.9 416.7 283.4 432 310.2 432H352c20.3 0 37.9-12 45.4-29.3 16.4 17.5 39.5 29.3 65.1 29.3 49.3 0 89.5-40 89.5-89.5S511.9 253 462.6 253c-15.6 0-30.3 4-43 11-13.8-38.3-50.4-65.3-93.5-66.7l-15.5-23.2C300.9 160.1 286.4 152 270.8 152H144C117.5 152 96 173.5 96 200v8h-16C35.8 208 0 243.8 0 288s35.8 80 80 80h16v-16H80c-26.5 0-48-21.5-48-48s21.5-48 48-48h16v104h32v-8h16v8h32v-56h64v56h32v-8h16v8h32c12.5 0 24.3-3 34.6-8.2 5.9 31.9 33.8 56.2 67.4 56.2 37.5 0 68-30.5 68-68s-30.5-68-68-68zM462.6 400c-31.7 0-57.5-25.8-57.5-57.5S430.9 285 462.6 285s57.5 25.8 57.5 57.5S494.3 400 462.6 400zM224 200c0-8.8 7.2-16 16-16h48v32h-48c-8.8 0-16-7.2-16-16z"/>
      </svg>
      <div className="container reveal" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', width: '100%' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px', 
          background: 'rgba(255,255,255,0.03)', border: 'var(--glass-border)', 
          padding: '8px 20px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 500, 
          marginBottom: 'var(--spacing-md)', backdropFilter: 'blur(10px)'
        }}>
          <span style={{ color: '#FFD700', fontSize: '1rem' }}>⭐</span> 4.8/5 Rating · 10k+ Happy Customers · Authorized Hero MotoCorp Dealer
        </div>
        <h1 className="font-heading" style={{ fontSize: 'clamp(5rem, 10vw, 8.5rem)', marginBottom: 'var(--spacing-md)', textShadow: '0 10px 40px rgba(0,0,0,0.8)' }}>
          Your Ride.<br/>Your <span style={{ color: 'var(--accent)' }}>Pride.</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)', maxWidth: '650px', fontWeight: 300 }}>
          Adarsh Automobiles is Ner, Dhule's Authorized Hero MotoCorp dealer — your one-stop destination for Hero motorcycles, scooters, electric two-wheelers, genuine parts, and expert servicing since 2014.
        </p>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <a href="#bikes" className="btn btn-primary">Explore Bikes</a>
          <a href="#contact" className="btn btn-outline">Book a Test Ride</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
