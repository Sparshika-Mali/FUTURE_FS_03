import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Why Us</span>
          <h2 className="section-title">Why Choose Adarsh</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginTop: 'var(--spacing-lg)' }}>
          {[
            { icon: '🏆', title: 'Authorized Hero Dealer', desc: 'We are an officially authorized Hero MotoCorp dealership in the Ner, Dhule region — buy with full confidence and warranty.' },
            { icon: '🔧', title: 'Expert Servicing', desc: 'Trained Hero-certified mechanics handle all repairs and maintenance using genuine Hero parts only.' },
            { icon: '💳', title: 'Easy Two-Wheeler Loans', desc: 'Get your Hero bike financed quickly with our two-wheeler loan assistance — minimal paperwork, fast approval.' }
          ].map((card, i) => (
            <div key={i} className="reveal" style={{
              background: '#fafafa', padding: '60px 40px', borderRadius: 'var(--radius-lg)', 
              textAlign: 'center', transition: 'var(--transition-spring)', border: '1px solid #eee',
              transitionDelay: `${i * 0.1}s`
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)';
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.borderColor = 'rgba(232,0,26,0.2)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = '#fafafa';
              e.currentTarget.style.borderColor = '#eee';
            }}>
              <span style={{ fontSize: '4rem', marginBottom: '30px', display: 'inline-block' }}>{card.icon}</span>
              <h3 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#000' }}>{card.title}</h3>
              <p style={{ color: '#555', fontSize: '1.1rem' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
