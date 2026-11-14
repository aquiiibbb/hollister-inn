import { bookNow } from '../../config/hotel';
import { useEffect, useRef, useState } from 'react';
import AccessibilityWidget from './AccessibilityWidget';

export default function Footer() {
  const [faqOpen, setFaqOpen] = useState(false);
  const faqButtonRef = useRef(null);
  const faqPopupRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    const onDocClick = (event) => {
      if (!faqButtonRef.current?.contains(event.target) && !faqPopupRef.current?.contains(event.target)) {
        setFaqOpen(false);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <footer className="hotel-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/Assets/logo.png" alt="Hotel Hollister Inn - Hollister California" />
              {" "}
              <span>Hotel Hollister Inn - Hollister California</span>
            </div>
            <p>📍 152 San Felipe Road, Hollister, CA 95023 (700 m from city centre)</p>
            <p>📞 (831) 637-1641 • Fax: (831) 637-8423</p>
          </div>
          <div className="footer-right">
            <button className="footer-book-btn" onClick={() => bookNow()}>Book Now</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Hotel Hollister Inn - Hollister California</p>
          <div className="faq-container">
            <button className="faq-button" id="faqToggle" ref={faqButtonRef} onClick={() => setFaqOpen((open) => !open)}>FAQ</button>
            <div id="faqPopup" className={'faq-popup' + (faqOpen ? ' active' : '')} ref={faqPopupRef}>
              <div className="faq-content">
                <div className="faq-header">
                  <h2>Frequently Asked Questions</h2>
                  <button
                    type="button"
                    className="faq-close-btn"
                    onClick={() => setFaqOpen(false)}
                    aria-label="Close FAQ"
                  >
                    ×
                  </button>
                </div>
                <h3>Does Hollister Inn have a pool?</h3>
                <p>Yes, this hotel has an outdoor swimming pool (infinity pool, open all year, all ages welcome).</p>
                <h3>How far is Hollister Inn from the centre of Hollister?</h3>
                <p>Hollister Inn is 700 m from the centre of Hollister on 152 San Felipe Road.</p>
                <h3>What type of room can I book at Hollister Inn?</h3>
                <p>Room options include Double rooms (King Bed) and Family rooms (Two Queen Beds).</p>
                <h3>What are the check-in and check-out times?</h3>
                <p>Check-in is from 15:00 to 00:00 (3:00 PM – Midnight), and check-out is from 11:00 to 11:30 AM.</p>
                <h3>Is parking available?</h3>
                <p>Yes, free public on-site parking is available (reservation is not needed).</p>
                <h3>Are pets allowed?</h3>
                <p>No, pets are not allowed at this property.</p>
                <h3>What is the minimum age for check-in?</h3>
                <p>The minimum age for check-in is 20. Valid photo ID and credit card required.</p>
                <h3>How can I reach the front desk?</h3>
                <p>Call (831) 637-1641 (24 hours) or fax (831) 637-8423.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AccessibilityWidget />
    </footer>
  );
}
