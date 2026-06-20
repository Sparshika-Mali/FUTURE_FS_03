import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
        <div className="reveal">
          <span className="section-label" style={{ textAlign: 'left' }}>OUR STORY</span>
          <h2 className="section-title" style={{ color: '#000', textAlign: 'left', marginBottom: '10px' }}>Built on Trust.<br/>Driven by Passion.</h2>
          <p style={{ fontSize: '1.35rem', color: '#111', fontWeight: 500, borderLeft: '4px solid var(--accent)', paddingLeft: '24px', marginBottom: '32px', lineHeight: 1.8 }}>
            Owned and operated by Ravindra Mali, Adarsh Automobiles was established in 2014 as an Authorized Hero MotoCorp dealer in the Ner region of Dhule district, Maharashtra. Located on National Highway No. 6, Pandav Nagar, near Lonkhedi Fata, we have been serving the two-wheeler needs of the local community for over 12 years.
          </p>
          <p style={{ fontSize: '1.15rem', color: '#555', marginBottom: '24px', lineHeight: 1.8 }}>We are proud to be the go-to Hero MotoCorp showroom for customers across Ner, Dhule and surrounding villages. From first-time buyers to loyal returning customers, every person who walks through our doors is treated with respect and honesty.</p>
          <p style={{ fontSize: '1.15rem', color: '#555', marginBottom: '24px', lineHeight: 1.8 }}>Our showroom showcases the complete Hero MotoCorp lineup — motorcycles, scooters, and battery-operated electric two-wheelers — so you can find the perfect ride for your daily commute, long trips, or family use.</p>
          <p style={{ fontSize: '1.15rem', color: '#555', marginBottom: '24px', lineHeight: 1.8 }}>With over 10k+ happy customers and a 4.8-star rating on JustDial, we take customer satisfaction extremely seriously. Our after-sales service and genuine spare parts ensure your Hero bike stays in top condition.</p>
        </div>
        
        <div style={{ display: 'grid', gap: '24px' }}>
          {[
            { icon: '🏍️', title: 'Authorized Dealer Since 2014', desc: 'Officially authorized by Hero MotoCorp for over 12 years in the Dhule region.' },
            { icon: '⭐', title: '10k+ Happy Customers', desc: 'Over 10,000+ satisfied customers and a 4.8-star rating speak for our consistent quality and service.' },
            { icon: '🔧', title: 'Hero-Certified Mechanics', desc: 'All our technicians are trained and certified by Hero MotoCorp for reliable, genuine servicing.' },
            { icon: '💰', title: 'Two-Wheeler Loan Support', desc: 'We offer two-wheeler loan facilitation with fast processing and minimal documentation.' }
          ].map((item, i) => (
            <div key={i} className="reveal" style={{
              background: '#fff', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid #eaeaea', borderLeft: '4px solid var(--accent)',
              display: 'flex', gap: '24px', alignItems: 'center', transition: 'var(--transition-smooth)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              transitionDelay: `${i * 0.1}s`
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateX(10px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.05)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
            }}>
              <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
              <div>
                <h4 className="font-heading" style={{ fontSize: '2rem', marginBottom: '4px', color: '#000' }}>{item.title}</h4>
                <p style={{ fontSize: '1rem', color: '#666', margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--spacing-xl)', position: 'relative', paddingTop: '30px', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ content: '""', position: 'absolute', top: '40px', left: 0, width: '100%', height: '2px', background: '#eee', zIndex: 1, display: window.innerWidth <= 1024 ? 'none' : 'block' }}></div>
          {[
            { year: '2014', text: 'Established as an Authorized Hero MotoCorp Dealer in Ner, Dhule.' },
            { year: '2017', text: 'Expanded showroom and service centre to handle growing demand.' },
            { year: '2020', text: 'Added battery-operated electric two-wheelers to our product lineup.' },
            { year: '2024', text: 'Crossed the milestone of 10k+ happy customers across the Dhule district.' }
          ].map((item, i) => (
            <div key={i} style={{ position: 'relative', zIndex: 2, flex: 1, padding: '0 20px', minWidth: '200px' }}>
              <div style={{ width: '20px', height: '20px', background: 'var(--accent)', borderRadius: '50%', border: '4px solid #fff', boxShadow: '0 0 0 2px #eee', marginBottom: '16px' }}></div>
              <div className="font-heading" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '12px' }}>{item.year}</div>
              <p style={{ color: '#555', fontSize: '1.05rem' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
