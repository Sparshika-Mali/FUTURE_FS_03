import React, { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef(null);
  
  const [counts, setCounts] = useState({
    rating: 0,
    customers: 0,
    years: 0,
    response: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      if (hasCounted || !statsRef.current) return;
      if (statsRef.current.getBoundingClientRect().top < window.innerHeight - 50) {
        setHasCounted(true);
        animateValue('rating', 4.8, 1000, true);
        animateValue('customers', 10000, 1500);
        animateValue('years', 12, 1000);
        animateValue('response', 30, 1000);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasCounted]);

  const animateValue = (key, target, duration, isDecimal = false) => {
    let start = 0;
    const increment = target / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCounts(prev => ({ ...prev, [key]: target }));
      } else {
        setCounts(prev => ({ ...prev, [key]: isDecimal ? start.toFixed(1) : Math.ceil(start) }));
      }
    }, 20);
  };

  return (
    <div className="container reveal" style={{ position: 'relative', zIndex: 10, marginTop: '-60px' }} ref={statsRef}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(20px)',
        border: 'var(--glass-border)', borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--card-shadow)', overflow: 'hidden'
      }}>
        {[
          { value: `${counts.rating}★`, label: 'JustDial Rating' },
          { value: counts.customers >= 10000 ? '10k+' : `${counts.customers}+`, label: 'Happy Customers' },
          { value: counts.years, label: 'Years in Business' },
          { value: counts.response, label: 'Min Response Time' }
        ].map((stat, i) => (
          <div key={i} style={{ padding: '40px 20px', textAlign: 'center', borderRight: i < 3 ? 'var(--glass-border)' : 'none' }}>
            <div className="font-heading" style={{ fontSize: '4.5rem', color: 'var(--accent)', marginBottom: '8px' }}>{stat.value}</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
