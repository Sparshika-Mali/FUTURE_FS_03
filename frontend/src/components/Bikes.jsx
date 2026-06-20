import React, { useState } from 'react';
import splendorImg from '../assets/splendor.png';
import hfDeluxeImg from '../assets/hf_deluxe.png';
import glamourImg from '../assets/glamour.png';
import destiniImg from '../assets/destini.png';
import pleasureImg from '../assets/pleasure.png';
import vidaImg from '../assets/vida.png';

const Bikes = () => {
  const [filter, setFilter] = useState('all');
  const [saved, setSaved] = useState({});

  const toggleSave = (name) => {
    setSaved(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const bikesData = [
    { name: 'Hero Splendor Plus', type: 'motorcycle', image: splendorImg, meta: '97.2cc • 60+ kmpl', specs: ['i3S tech', 'Kick + Self Start'], price: '₹79,000' },
    { name: 'Hero HF Deluxe', type: 'motorcycle', image: hfDeluxeImg, meta: '97.2cc • Daily Commuter', specs: ['IBS Braking', 'Fuel Efficient'], price: '₹72,000' },
    { name: 'Hero Glamour', type: 'motorcycle', image: glamourImg, meta: '125cc • Stylish Design', specs: ['Fuel Injection', 'USB Charging'], price: '₹85,000' },
    { name: 'Hero Destini 125', type: 'scooter', image: destiniImg, meta: '124.6cc • Family Scooter', specs: ['12-inch wheels', 'Boot space'], price: '₹82,000' },
    { name: 'Hero Pleasure+ 110', type: 'scooter', image: pleasureImg, meta: '110.9cc • Lightweight', specs: ['Designed for women', 'Vibrant colors'], price: '₹68,000' },
    { name: 'Hero Vida V1', type: 'electric', image: vidaImg, meta: 'Battery-operated • Zero Emissions', specs: ['165 km range', 'Fast charging'], price: '₹1.10 Lakh' }
  ];

  const handleEnquire = (name) => {
    const input = document.getElementById('vehicle-pref');
    if (input) {
      input.value = name;
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => input.focus(), 800);
    }
  };

  return (
    <section id="bikes">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">HERO MOTOCORP LINEUP</span>
          <h2 className="section-title text-white">Find Your Perfect Ride.</h2>
          <p className="section-desc">We stock the complete range of Hero MotoCorp two-wheelers. All prices are ex-showroom. Contact us for on-road pricing in Dhule.</p>
        </div>

        <div className="filter-bar reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: 'var(--spacing-lg)' }}>
          {['all', 'motorcycle', 'scooter', 'electric'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '12px 32px', background: filter === f ? 'var(--accent)' : 'rgba(255,255,255,0.03)', 
                border: `1px solid ${filter === f ? 'var(--accent)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '40px', 
                fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1.05rem',
                color: filter === f ? '#fff' : 'var(--text-secondary)', cursor: 'pointer', transition: 'var(--transition-smooth)',
                backdropFilter: 'blur(10px)', boxShadow: filter === f ? '0 8px 20px var(--accent-glow)' : 'none',
                textTransform: 'capitalize'
              }}
            >
              {f === 'all' ? 'All' : f + 's'}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '40px' }}>
          {bikesData.map((bike, i) => (
            <div key={bike.name} className={`reveal ${filter === 'all' || bike.type === filter ? 'active' : ''}`} style={{
              display: filter === 'all' || bike.type === filter ? 'flex' : 'none',
              background: 'var(--bg-base)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', 
              border: 'var(--glass-border)', transition: 'var(--transition-spring)', 
              flexDirection: 'column', position: 'relative'
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.boxShadow = 'var(--card-shadow)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: '#000' }}>
                <span style={{ position: 'absolute', top: '24px', left: '24px', background: 'var(--accent)', color: '#fff', padding: '6px 16px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', zIndex: 10 }}>{bike.type}</span>
                <img src={bike.image} alt={bike.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
              </div>
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '8px', color: '#fff' }}>{bike.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px' }}>{bike.meta}</p>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
                  {bike.specs.map(spec => (
                    <span key={spec} style={{ background: 'rgba(255,255,255,0.05)', border: 'var(--glass-border)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.9rem', color: '#ccc' }}>{spec}</span>
                  ))}
                </div>
                <div className="font-heading" style={{ fontSize: '3rem', color: 'var(--accent)', marginTop: 'auto', marginBottom: '24px' }}>{bike.price}<span style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', letterSpacing: 0 }}> onwards</span></div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <button onClick={() => handleEnquire(bike.name)} className="btn btn-primary" style={{ flex: 1, fontSize: '1.2rem', padding: '14px' }}>Enquire Now</button>
                  <button onClick={() => toggleSave(bike.name)} style={{ 
                    flex: '0 0 54px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', 
                    background: saved[bike.name] ? 'rgba(232,0,26,0.1)' : 'transparent', 
                    border: saved[bike.name] ? '1px solid var(--accent)' : 'var(--glass-border)', 
                    color: saved[bike.name] ? 'var(--accent)' : '#fff', 
                    borderRadius: 'var(--radius-sm)', transition: 'var(--transition-smooth)', cursor: 'pointer' 
                  }}>
                    {saved[bike.name] ? '♥' : '♡'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bikes;
