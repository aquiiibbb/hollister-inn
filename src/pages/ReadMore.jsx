import { bookNow } from '../config/hotel';
import { useEffect, useRef, useState } from 'react';
import usePageStyle from '../hooks/usePageStyle';
import css from '../styles/readmore.css?raw';

export default function ReadMore() {
  usePageStyle(css, 'About The Hotel');

  // 'enter' -> hidden below, 'shown' -> faded in, 'closing' -> scaling out, 'closed' -> display: none
  const [phase, setPhase] = useState('enter');
  const closeTimer = useRef(null);

  const closeHotelInfoModal = () => {
    setPhase('closing');
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setPhase('closed'), 300);
  };

  const initiateHotelBooking = () => {
    bookNow();
  };

  // Smooth entrance
  useEffect(() => {
    const t = setTimeout(() => setPhase((p) => (p === 'enter' ? 'shown' : p)), 100);
    return () => clearTimeout(t);
  }, []);

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeHotelInfoModal();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      clearTimeout(closeTimer.current);
    };
  }, []);

  // Prevent zoom on double tap for iOS
  useEffect(() => {
    let lastInfoTouchEnd = 0;
    const onTouchEnd = (event) => {
      const now = new Date().getTime();
      if (now - lastInfoTouchEnd <= 300) {
        event.preventDefault();
      }
      lastInfoTouchEnd = now;
    };
    document.addEventListener('touchend', onTouchEnd, false);
    return () => document.removeEventListener('touchend', onTouchEnd, false);
  }, []);

  const wrapperStyle =
    phase === 'enter'
      ? { opacity: '0', transform: 'translateY(20px)' }
      : phase === 'shown'
        ? { transition: 'all 0.4s ease', opacity: '1', transform: 'translateY(0)' }
        : phase === 'closing'
          ? { transition: 'all 0.3s ease', opacity: '0', transform: 'scale(0.95)' }
          : { transition: 'all 0.3s ease', opacity: '0', transform: 'scale(0.95)', display: 'none' };

  return (
    <>
  <div className="hotel-info-wrapper" style={wrapperStyle}>
        <div className="hotel-info-header-section">
          <div className="info-header-subtitle">About the hotel</div>
          <h1 className="info-main-title">Book your stay at Hollister Inn, Hollister CA</h1>
          <button className="info-close-btn" onClick={() => closeHotelInfoModal()}>×</button>
        </div>
        <div className="hotel-info-content-area">
          <p className="hotel-info-description">
            Hollister Inn, Hollister California is the perfect choice for travelers looking for value, comfort, and convenience. Located at 152 San Felipe Road, you are just 700 meters from downtown Hollister and close to key destinations around San Benito County. Enjoy easy access to nearby shopping, dining, and scenic outdoor spots like Pinnacles National Park, Mission San Juan Bautista, and Hollister Hills State Vehicular Recreation Area.
          </p>
          <p className="hotel-info-description">
            Guests can take advantage of our outdoor swimming pool (infinity pool, open all year, all ages welcome), free public on-site parking (no reservation required), complimentary high-speed WiFi in all areas, and an outdoor BBQ patio area. Our 24-hour front desk is always available to assist with express check-in and check-out.
          </p>
          <p className="hotel-info-description">
            Each guest room is equipped with air conditioning, private bathroom with bathtub or shower, refrigerator, microwave, tea and coffee maker, iron and ironing board, hair dryer, alarm clock, and a flat-screen TV with premium cable channels.
          </p>
          <div className="hotel-highlights-section">
            <h2 className="highlights-title">Things You'll Love</h2>
            <div className="hotel-highlights-grid">
              <div className="highlight-item">
                <div className="highlight-check-mark">✓</div>
                <div className="highlight-description">700 m from the centre of Hollister</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-check-mark">✓</div>
                <div className="highlight-description">Outdoor swimming pool (open all year)</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-check-mark">✓</div>
                <div className="highlight-description">Free on-site parking (no reservation needed)</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-check-mark">✓</div>
                <div className="highlight-description">BBQ facilities & outdoor patio picnic area</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-check-mark">✓</div>
                <div className="highlight-description">Tea/coffee maker in all guest rooms</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-check-mark">✓</div>
                <div className="highlight-description">Gateway to Pinnacles National Park & Mission San Juan Bautista</div>
              </div>
            </div>
          </div>
          <button className="hotel-booking-btn" onClick={() => initiateHotelBooking()}>Book Now</button>
          <div className="clear-float"></div>
        </div>
      </div>
    </>
  );
}
