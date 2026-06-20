import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">WHAT WE OFFER</span>
          <h2 className="section-title">Everything Your Hero Needs.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '40px' }}>
          {[
            { tag: 'Authorized', title: 'New Bike Sales', desc: 'Browse and purchase the latest Hero MotoCorp motorcycles, scooters, and electric two-wheelers directly from an authorized showroom with full manufacturer warranty.' },
            { tag: 'Certified Service', title: 'Two-Wheeler Servicing', desc: 'Periodic maintenance, oil changes, chain lubrication, brake adjustments, and full tune-ups by Hero-certified mechanics using proper tools.' },
            { tag: 'OEM Parts Only', title: 'Genuine Spare Parts', desc: 'We stock 100% genuine Hero MotoCorp spare parts and accessories. No counterfeit parts — only original replacements to keep your bike running perfectly.' },
            { tag: 'All Repairs', title: 'Repair & Breakdown Service', desc: 'Engine repair, electrical issues, suspension work, tyre replacement, and more handled by experienced technicians at our fully equipped workshop.' },
            { tag: 'Fast Loan', title: 'Two-Wheeler Loan Assistance', desc: 'We facilitate two-wheeler loans for all Hero bikes. Tie-ups with banks and NBFCs for fast approvals, low EMIs, and minimal paperwork needed.' },
            { tag: 'EV Available', title: 'Battery-Operated Bikes', desc: 'Explore the future of mobility with Hero\'s electric two-wheelers. Eco-friendly, low maintenance, and perfect for city commuting.' }
          ].map((service, i) => (
            <div key={i} className="reveal" style={{
              background: '#fff', padding: '60px 40px', borderRadius: 'var(--radius-lg)', 
              border: '1px solid #eaeaea', transition: 'var(--transition-spring)', 
              position: 'relative', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
              transitionDelay: `${(i % 3) * 0.1}s`
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)';
              e.currentTarget.style.borderColor = 'rgba(232,0,26,0.2)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)';
              e.currentTarget.style.borderColor = '#eaeaea';
            }}>
              <div className="font-heading" style={{ position: 'absolute', top: '-10px', right: '10px', fontSize: '12rem', color: 'rgba(0,0,0,0.02)', lineHeight: 1 }}>0{i+1}</div>
              <div style={{ display: 'inline-block', background: 'rgba(232, 0, 26, 0.08)', color: 'var(--accent)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', position: 'relative', zIndex: 2 }}>{service.tag}</div>
              <h3 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', position: 'relative', zIndex: 2, color: '#000' }}>{service.title}</h3>
              <p style={{ color: '#555', fontSize: '1.1rem', position: 'relative', zIndex: 2, lineHeight: 1.7 }}>{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 'var(--spacing-xxl)', display: 'flex', justifyContent: 'space-between', textAlign: 'center', position: 'relative', flexWrap: 'wrap', gap: '30px' }}>
          <div style={{ content: '""', position: 'absolute', top: '45px', left: '10%', width: '80%', height: '2px', background: 'dashed 2px #ccc', zIndex: 1, display: window.innerWidth <= 768 ? 'none' : 'block' }}></div>
          {[
            { num: '1', title: 'Visit Showroom\nat NH-6, Ner' },
            { num: '2', title: 'Choose Your Hero Bike\n& Test Ride' },
            { num: '3', title: 'Apply for Loan\nor Pay Instantly' },
            { num: '4', title: 'Registration Done\nRide Home!' }
          ].map((step, i) => (
            <div key={i} style={{ flex: 1, position: 'relative', zIndex: 2, padding: '0 10px', minWidth: '150px' }}>
              <div className="font-heading" style={{
                width: '90px', height: '90px', background: '#fff', border: '4px solid var(--accent)', 
                color: 'var(--accent)', fontSize: '2.5rem', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', borderRadius: '50%', margin: '0 auto 24px', 
                transition: 'var(--transition-spring)', boxShadow: '0 10px 20px rgba(232,0,26,0.1)'
              }}>{step.num}</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{step.title}</h4>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', marginTop: 'var(--spacing-xl)', padding: '40px', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid #eaeaea' }}>
          {['Hero Authorized', 'Genuine Parts Only', 'Certified Mechanics', 'Loan Facilitation'].map((badge, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.15rem', fontWeight: 600, color: '#333' }}>
              <div style={{ width: '36px', height: '36px', background: 'rgba(232,0,26,0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>✓</div>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
