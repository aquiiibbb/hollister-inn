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
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>(831) 637-1641</p>
                <small>Available 24/7</small>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📠</span>
              <div>
                <h4>Fax</h4>
                <p>(831) 637-8423</p>
                <small>Hotel fax</small>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
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
