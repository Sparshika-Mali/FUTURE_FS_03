import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Reviews</span>
          <h2 className="section-title text-white">What Our Customers Say</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', marginTop: 'var(--spacing-lg)' }}>
          {[
            { text: "Bought my Hero Splendor from here, excellent service and honest pricing. Highly recommend!", name: "Ravi Patil" },
            { text: "Got my scooter serviced here, they were very professional and quick. Will come again.", name: "Sunita Borse" },
            { text: "Adarsh Automobiles helped me get a two-wheeler loan with zero hassle. Great team!", name: "Akash Mahajan" }
          ].map((testi, i) => (
            <div key={i} className="reveal" style={{
              background: 'var(--bg-surface)', padding: '50px 40px', borderRadius: 'var(--radius-lg)', 
              border: 'var(--glass-border)', position: 'relative', transition: 'var(--transition-smooth)',
              transitionDelay: `${i * 0.1}s`
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.background = 'rgba(26,26,26,1)';
              e.currentTarget.style.boxShadow = 'var(--card-shadow)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.background = 'var(--bg-surface)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <span style={{ position: 'absolute', top: '10px', right: '30px', fontFamily: 'serif', fontSize: '8rem', color: 'rgba(255,255,255,0.02)', lineHeight: 1 }}>”</span>
              <div style={{ color: 'var(--accent)', marginBottom: '24px', fontSize: '1.4rem', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: 1.8, position: 'relative', zIndex: 2 }}>"{testi.text}"</p>
              <div className="font-heading" style={{ fontSize: '1.8rem', letterSpacing: '1px', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>{testi.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
