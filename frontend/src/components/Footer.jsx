import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-base)', padding: '100px 5% 40px', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <div className="font-heading" style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '16px', letterSpacing: '2px' }}>Adarsh Automobiles — Authorized Hero MotoCorp Dealer</div>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '8px' }}>Pandav Nagar, NH-6, Near Lonkhedi Fata, Ner, Dhule – 424303</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '8px' }}>Phone: 9850100041 / 7057200041</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', margin: '40px 0' }}>
          {[
            { label: 'WhatsApp', icon: <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/> },
            { label: 'Facebook', icon: <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/> }
          ].map((soc, i) => (
            <a key={i} href="#" aria-label={soc.label} style={{
              width: '50px', height: '50px', background: 'var(--bg-surface)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
              border: 'var(--glass-border)', transition: 'var(--transition-spring)'
            }} onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 20px var(--accent-glow)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.background = 'var(--bg-surface)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">{soc.icon}</svg>
            </a>
          ))}
        </div>
        <p style={{ color: '#555', fontSize: '0.95rem', borderTop: '1px solid #1a1a1a', paddingTop: '40px', marginTop: '20px' }}>
          © 2024 Adarsh Automobiles. All rights reserved. | Authorized Hero MotoCorp Dealer, Dhule.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
