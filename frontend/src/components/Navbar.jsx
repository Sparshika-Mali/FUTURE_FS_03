import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'bikes', 'services', 'contact'];
      let current = 'home';
      sections.forEach(sec => {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= (el.offsetTop - 300)) {
          current = sec;
        }
      });
      setActiveLink(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      padding: scrolled ? '16px 0' : '24px 0',
      background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
      transition: 'all 0.4s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            background: 'var(--accent)', color: 'white', fontFamily: 'var(--font-heading)',
            fontSize: '2rem', width: '48px', height: '48px', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', borderRadius: '8px'
          }}>AA</div>
          <div>
            <h1 style={{ fontSize: '1.6rem', letterSpacing: '1px', margin: 0 }}>Adarsh Automobiles</h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Authorized Hero Dealer · Ner, Dhule</p>
          </div>
        </a>

        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer' }}
          className="mobile-toggle-visible-css-override"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>

        <div style={{
          display: 'flex', gap: '40px', alignItems: 'center',
          '@media (max-width: 768px)': { display: mobileOpen ? 'flex' : 'none' } // Simple inline style mock, real CSS is handled if we add a class
        }} className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {['home', 'about', 'bikes', 'services', 'contact'].map(item => (
            <a 
              key={item} 
              href={`#${item}`} 
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.2rem', letterSpacing: '1.5px',
                color: activeLink === item ? 'var(--text-primary)' : 'var(--text-secondary)',
                borderBottom: activeLink === item ? '2px solid var(--accent)' : 'none',
                textTransform: 'capitalize'
              }}
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '1.1rem' }}>Visit Showroom</a>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .mobile-toggle-visible-css-override { display: block !important; }
          .nav-links {
            position: fixed; top: 0; right: -100%; width: 100%; height: 100vh;
            background: rgba(5,5,5,0.98); flex-direction: column; padding: 120px 40px; gap: 40px;
            transition: right 0.5s cubic-bezier(0.77, 0, 0.175, 1); backdrop-filter: blur(20px);
            align-items: flex-start;
          }
          .nav-links.open { right: 0; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
