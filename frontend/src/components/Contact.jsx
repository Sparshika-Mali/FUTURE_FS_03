import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '', mobile: '', interest: '', model: '', message: ''
  });
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('http://localhost:5000/api/enquiries', formData);
      setStatus('success');
      setFormData({ fullName: '', mobile: '', interest: '', model: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const [faqActive, setFaqActive] = useState(null);
  const faqs = [
    { q: 'Are you an authorized Hero MotoCorp dealer?', a: 'Yes, Adarsh Automobiles is an officially authorized Hero MotoCorp dealership serving Ner and Dhule since 2014.' },
    { q: 'Do you offer two-wheeler loans?', a: 'Yes, we facilitate two-wheeler loans with multiple bank and NBFC partners. Fast approval with minimal paperwork.' },
    { q: 'Do you sell electric bikes?', a: 'Yes, we stock Hero MotoCorp\'s battery-operated electric two-wheelers including the Hero Vida range.' },
    { q: 'What are your working hours?', a: 'We open at 8:00 AM daily. We typically respond to enquiries within 30 minutes.' }
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">REACH US</span>
          <h2 className="section-title text-white">Visit Us or Send a Message.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', '@media(max-width:1024px)': { gridTemplateColumns: '1fr' } }}>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {[
              { icon: '📍', title: 'Address', content: 'Pandav Nagar, National Highway No. 6, Near Lonkhedi Fata, Ner, Dhule – 424303, Maharashtra', isLink: true, href: 'https://maps.google.com/?q=Pandav+Nagar+NH6+Ner+Dhule+Maharashtra+424303' },
              { icon: '📞', title: 'Phone', content: '9850100041 / 7057200041', isLink: true, href: 'tel:9850100041', color: 'var(--accent)', size: '1.4rem' },
              { icon: '🕘', title: 'Hours', content: 'Opens at 8:00 AM daily (Mon–Sun)\nResponds to enquiries within 30 minutes', isLink: false },
              { icon: '💬', title: 'WhatsApp', content: 'Chat on WhatsApp: 9850100041', isLink: true, href: '#', color: '#25D366' },
              { icon: '⭐', title: 'JustDial', content: 'Rated 4.8/5 by 10k+ Happy Customers', isLink: true, href: '#', color: '#FFD700' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }} onMouseOver={(e) => {
                e.currentTarget.querySelector('.icon-box').style.background = 'var(--accent)';
                e.currentTarget.querySelector('.icon-box').style.transform = 'translateY(-4px)';
                e.currentTarget.querySelector('.icon-box').style.boxShadow = '0 10px 20px var(--accent-glow)';
              }} onMouseOut={(e) => {
                e.currentTarget.querySelector('.icon-box').style.background = 'var(--bg-surface)';
                e.currentTarget.querySelector('.icon-box').style.transform = 'translateY(0)';
                e.currentTarget.querySelector('.icon-box').style.boxShadow = 'none';
              }}>
                <div className="icon-box" style={{ 
                  width: '64px', height: '64px', background: 'var(--bg-surface)', border: 'var(--glass-border)', 
                  borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: '1.8rem', flexShrink: 0, transition: 'var(--transition-smooth)' 
                }}>{item.icon}</div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#fff', marginBottom: '8px', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.title}</h4>
                  {item.isLink ? 
                    <a href={item.href} target={item.title === 'Address' ? '_blank' : ''} style={{ color: item.color || 'var(--text-secondary)', fontSize: item.size || '1.1rem', fontWeight: item.color ? 600 : 400, whiteSpace: 'pre-line' }}>{item.content}</a> 
                    : <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.content}</p>
                  }
                </div>
              </div>
            ))}

            <div style={{ height: '300px', background: 'var(--bg-surface)', border: 'var(--glass-border)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', transition: 'var(--transition-smooth)', marginTop: '20px' }}>
              <span style={{ fontSize: '3.5rem' }}>🗺️</span>
              <p style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem' }}>NH-6, Near Lonkhedi Fata, Ner, Dhule – 424303</p>
              <a href="https://maps.google.com/?q=Pandav+Nagar+NH6+Ner+Dhule+Maharashtra+424303" target="_blank" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.1rem', borderBottom: '1px solid var(--accent)', paddingBottom: '2px' }}>Open in Google Maps →</a>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.2s', background: 'var(--bg-surface-glass)', backdropFilter: 'blur(20px)', padding: '60px', borderRadius: 'var(--radius-lg)', border: 'var(--glass-border)', boxShadow: 'var(--card-shadow)' }}>
            <h3 className="font-heading" style={{ fontSize: '3rem', marginBottom: '40px', color: '#fff' }}>Send an Enquiry</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <select name="interest" value={formData.interest} onChange={handleChange} required style={{ ...inputStyle, appearance: 'none', backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%23ffffff\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center' }} onFocus={focusStyle} onBlur={blurStyle}>
                  <option value="" disabled>I'm Interested In...</option>
                  <option value="Buying a New Bike">Buying a New Bike</option>
                  <option value="Bike Servicing">Bike Servicing</option>
                  <option value="Spare Parts">Spare Parts</option>
                  <option value="Two-Wheeler Loan">Two-Wheeler Loan</option>
                  <option value="Electric Bike Enquiry">Electric Bike Enquiry</option>
                  <option value="Test Ride Booking">Test Ride Booking</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <input type="text" id="vehicle-pref" name="model" value={formData.model} onChange={handleChange} placeholder="Which Hero Model? (e.g. Splendor Plus, Destini 125…)" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required style={{ ...inputStyle, height: '160px', resize: 'vertical' }} onFocus={focusStyle} onBlur={blurStyle}></textarea>
              </div>
              <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: '100%', padding: '20px', fontSize: '1.5rem', marginTop: '10px' }}>
                {status === 'loading' ? 'Sending...' : 'Send Enquiry →'}
              </button>
              {status === 'success' && (
                <div style={{ background: 'rgba(39, 174, 96, 0.15)', border: '1px solid #27ae60', color: '#2ecc71', padding: '20px', borderRadius: 'var(--radius-sm)', marginTop: '24px', fontWeight: 500, textAlign: 'center', fontSize: '1.1rem', animation: 'slideUp 0.5s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                  ✅ Thank you! Our team will contact you within 30 minutes.
                </div>
              )}
              {status === 'error' && (
                <div style={{ background: 'rgba(232, 0, 26, 0.15)', border: '1px solid #e8001a', color: '#e8001a', padding: '20px', borderRadius: 'var(--radius-sm)', marginTop: '24px', fontWeight: 500, textAlign: 'center', fontSize: '1.1rem' }}>
                  ❌ Error submitting form. Make sure backend is running on port 5000.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="reveal" style={{ maxWidth: '900px', margin: 'var(--spacing-xxl) auto 0' }}>
          <div style={{ borderTop: 'var(--glass-border)' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: 'var(--glass-border)' }}>
                <button 
                  onClick={() => setFaqActive(faqActive === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '32px 0', color: faqActive === i ? 'var(--accent)' : '#fff', fontSize: '1.3rem', fontWeight: 600, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'color 0.3s' }}
                >
                  {faq.q}
                  <span style={{ fontSize: '2rem', color: faqActive === i ? 'var(--accent)' : 'var(--text-muted)', fontWeight: 300, transition: 'transform 0.4s ease', transform: faqActive === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                <div style={{ maxHeight: faqActive === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.5s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                  <p style={{ paddingBottom: '32px', color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};

const inputStyle = {
  width: '100%', padding: '20px 24px', background: 'rgba(0,0,0,0.5)', 
  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', 
  color: '#fff', fontSize: '1.1rem', transition: 'var(--transition-smooth)',
  outline: 'none', fontFamily: 'var(--font-body)'
};

const focusStyle = (e) => {
  e.target.style.borderColor = 'var(--accent)';
  e.target.style.background = 'rgba(0,0,0,0.8)';
  e.target.style.boxShadow = '0 0 0 4px rgba(232,0,26,0.1)';
};
const blurStyle = (e) => {
  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
  e.target.style.background = 'rgba(0,0,0,0.5)';
  e.target.style.boxShadow = 'none';
};

export default Contact;
