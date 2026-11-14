import { useEffect, useState } from 'react';
import usePageStyle from '../hooks/usePageStyle';
import css from '../styles/amen.css?raw';
export default function Amenities() {
  usePageStyle(css, 'Hotel Amenities & Facilities – Hollister Inn');
  // 'enter' -> opacity 0 / translateY(20px), 'shown' -> faded in, 'closed' -> display: none
  const [phase, setPhase] = useState('enter');
  const closeModal = () => {
    setPhase('closed');
    window.history.back();
  };

  // Smooth animation on load
  useEffect(() => {
    const t = setTimeout(() => setPhase((p) => (p === 'enter' ? 'shown' : p)), 100);
    return () => clearTimeout(t);
  }, []);

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const wrapperStyle =
    phase === 'enter'
      ? { opacity: '0', transform: 'translateY(20px)' }
      : phase === 'shown'
        ? { transition: 'all 0.4s ease', opacity: '1', transform: 'translateY(0)' }
        : { transition: 'all 0.4s ease', opacity: '1', transform: 'translateY(0)', display: 'none' };

  return (
    <>
      <div className="hotel-amenities-wrapper" style={wrapperStyle}>
        <div className="amenities-header-section">
          <h1 className="amenities-main-title">Facilities & Amenities</h1>
          <button className="close-button" onClick={() => closeModal()} aria-label="Close">×</button>
        </div>
        <div className="amenities-content-area">
          <h2 className="hotel-services-title">Most Popular Facilities</h2>
          <div className="amenities-display-grid">
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-blue">🏊</div>
              <div className="amenity-description-text">Outdoor Swimming Pool (Infinity, Open All Year)</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-blue">🅿️</div>
              <div className="amenity-description-text">Free Public On-Site Parking</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-green">📶</div>
              <div className="amenity-description-text">Free WiFi in All Areas</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-purple">☕</div>
              <div className="amenity-description-text">Tea/Coffee Maker in All Rooms</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-orange">🍖</div>
              <div className="amenity-description-text">BBQ Facilities & Outdoor Picnic Area</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-pink">🚭</div>
              <div className="amenity-description-text">Non-Smoking & Family Rooms</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-teal">♿</div>
              <div className="amenity-description-text">Facilities for Disabled Guests</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-yellow">❄️</div>
              <div className="amenity-description-text">Air Conditioning & Heating</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-blue">📺</div>
              <div className="amenity-description-text">Flat-Screen TV with Cable Channels</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-purple">🛎️</div>
              <div className="amenity-description-text">24-Hour Front Desk & Express Check-In</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-green">🧹</div>
              <div className="amenity-description-text">Daily Housekeeping</div>
            </div>
            <div className="single-amenity-card">
              <div className="amenity-visual-icon icon-style-orange">🧺</div>
              <div className="amenity-description-text">Laundry Facilities*</div>
            </div>
          </div>

          <div className="accessibility-features-section">
            <h3 className="accessibility-main-heading">Accessibility Features</h3>
            <p className="accessibility-info-subtitle">(Available in select units and common areas)</p>
            <div className="amenities-display-grid">
              <div className="single-amenity-card">
                <div className="amenity-visual-icon icon-style-blue">♿</div>
                <div className="amenity-description-text">Wheelchair Accessible Units</div>
              </div>
              <div className="single-amenity-card">
                <div className="amenity-visual-icon icon-style-green">🚪</div>
                <div className="amenity-description-text">Entire Unit Located on Ground Floor</div>
              </div>
              <div className="single-amenity-card">
                <div className="amenity-visual-icon icon-style-teal">🚿</div>
                <div className="amenity-description-text">Lower Bathroom Sink & Grab Rails</div>
              </div>
              <div className="single-amenity-card">
                <div className="amenity-visual-icon icon-style-yellow">🚽</div>
                <div className="amenity-description-text">Raised Toilet with Grab Rails</div>
              </div>
              <div className="single-amenity-card">
                <div className="amenity-visual-icon icon-style-purple">🅿️</div>
                <div className="amenity-description-text">Accessible Free Parking on Site</div>
              </div>
            </div>
          </div>

          <div className="hotel-offers-section">
            <h3 className="offers-section-heading">What this place offers</h3>
            <p className="offers-description-paragraph">
              Hollister Inn provides an inviting and convenient stay at 152 San Felipe Road, 700 m from downtown Hollister. Enjoy our refreshing outdoor swimming pool (infinity pool, open all year), courtyard BBQ facilities, free high-speed WiFi, and 24-hour front desk. Each guest room includes a private bathroom, refrigerator, microwave, coffee maker, flat-screen cable TV, and fresh daily housekeeping.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
