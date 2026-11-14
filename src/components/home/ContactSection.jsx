export default function ContactSection() {
  // ===== CONTACT FORM =====
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will respond within 24 hours.');
  };

  return (
    <div className="contact-section" id="contact">
        <div className="contact-header">
          <p className="tag">CONTACT US</p>
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="#ec4899" stroke="#db2777" strokeWidth="1" />
                </svg>
              </span>
              <div>
                <h4>Phone</h4>
                <p>(831) 637-1641</p>
                <small>Available 24/7</small>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <rect x="3" y="9" width="18" height="12" rx="2" fill="#475569" />
                  <rect x="6" y="3" width="12" height="7" rx="1" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                  <circle cx="7" cy="13" r="1" fill="#94a3b8" />
                  <circle cx="10" cy="13" r="1" fill="#94a3b8" />
                  <circle cx="13" cy="13" r="1" fill="#94a3b8" />
                  <circle cx="7" cy="16" r="1" fill="#94a3b8" />
                  <circle cx="10" cy="16" r="1" fill="#94a3b8" />
                  <circle cx="13" cy="16" r="1" fill="#94a3b8" />
                  <rect x="16" y="12" width="3" height="6" rx="1" fill="#0284c7" />
                </svg>
              </span>
              <div>
                <h4>Fax</h4>
                <p>(831) 637-8423</p>
                <small>Hotel fax</small>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <circle cx="12" cy="9" r="6" fill="#ef4444" />
                  <circle cx="10" cy="7" r="1.5" fill="#fca5a5" />
                  <path d="M12 15v7" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <h4>Address</h4>
                <p>152 San Felipe Road</p>
                <small>Hollister, CA 95023, US</small>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              {" "}
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            {" "}
            <textarea placeholder="Your Message" rows="5"></textarea>
            {" "}
            <button className="submit-btn" onClick={(event) => { handleFormSubmit(event); }}>Send Message</button>
          </div>
        </div>
      </div>
  );
}
