import { useEffect, useRef, useState } from 'react';

export default function AmenitiesSection({ openRoomModal }) {
  // ===== AMENITIES SLIDER (Authentic Hollister Inn Photos) =====
  const amenImages = [
    '/Assets/904328424.jpg',
    '/Assets/unnamed-22.webp',
    '/Assets/unnamed-4.webp',
    '/Assets/unnamed-24.webp',
    '/Assets/unnamed-28.webp',
  ];
  const amenIndex = useRef(0);
  const [amenSrc, setAmenSrc] = useState(amenImages[0]);

  const amenSlide = (dir) => {
    amenIndex.current = (amenIndex.current + dir + amenImages.length) % amenImages.length;
    setAmenSrc(amenImages[amenIndex.current]);
  };

  useEffect(() => {
    const timer = setInterval(() => amenSlide(1), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="amenities-section" id="amenities">
      <div className="amenities-left">
        <p className="tag">AMENITIES</p>
        <h2>
          Featured Amenities <span>(12)</span>
        </h2>
        <div className="amenities-list">
          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h20"></path>
                <path d="M20 12v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5"></path>
                <path d="M12 12V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8"></path>
                <circle cx="16" cy="7" r="1"></circle>
              </svg>
            </span>
            <span>Outdoor Swimming Pool</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4"></rect>
                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
              </svg>
            </span>
            <span>Free On-Site Parking</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                <line x1="12" y1="20" x2="12.01" y2="20"></line>
              </svg>
            </span>
            <span>Free High-Speed WiFi</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </span>
            <span>Tea/Coffee Maker in All Rooms</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="11" r="7"></circle>
                <line x1="7" y1="11" x2="17" y2="11"></line>
                <line x1="12" y1="4" x2="12" y2="18"></line>
                <line x1="9" y1="18" x2="6" y2="21"></line>
                <line x1="15" y1="18" x2="18" y2="21"></line>
              </svg>
            </span>
            <span>BBQ Facilities & Patio</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                <line x1="9" y1="12" x2="15" y2="12"></line>
              </svg>
            </span>
            <span>Non-Smoking & Family Rooms</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="4" r="2"></circle>
                <path d="M7 21v-4a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v4"></path>
                <path d="M12 11V7"></path>
              </svg>
            </span>
            <span>Facilities for Disabled Guests</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07"></line>
              </svg>
            </span>
            <span>Air Conditioning & Heating</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fde047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </span>
            <span>24-Hour Front Desk</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </span>
            <span>Daily Housekeeping</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <line x1="8" y1="6" x2="16" y2="6"></line>
                <line x1="8" y1="10" x2="16" y2="10"></line>
                <line x1="8" y1="14" x2="12" y2="14"></line>
                <circle cx="15" cy="14" r="1"></circle>
                <rect x="8" y="17" width="8" height="2" rx="0.5"></rect>
              </svg>
            </span>
            <span>Vending Machines (Snacks & Drinks)</span>
          </div>

          <div className="amenity-item">
            <span className="amenity-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="2" width="18" height="20" rx="2"></rect>
                <circle cx="12" cy="13" r="5"></circle>
                <path d="M12 10a3 3 0 0 1 3 3"></path>
                <circle cx="7" cy="6" r="1"></circle>
                <circle cx="10" cy="6" r="1"></circle>
              </svg>
            </span>
            <span>Laundry Facilities*</span>
          </div>
        </div>
        <button className="amenities-btn-dark" onClick={() => openRoomModal('amenities-modal')}>View all facilities</button>
        <p className="note">*May require an additional charge</p>
      </div>
      <div className="amenities-right">
        <div className="amenities-image-slider">
          <div className="amenities-slider-container">
            <img id="amenities-slide-img" className="amenities-slider-image" alt="Amenities" src={amenSrc} />
            {" "}
            <button className="amenities-slider-arrow amenities-slider-arrow-left" onClick={() => amenSlide(-1)}>‹</button>
            {" "}
            <button className="amenities-slider-arrow amenities-slider-arrow-right" onClick={() => amenSlide(1)}>›</button>
          </div>
          <div className="amenities-slider-indicators" id="amen-indicators"></div>
        </div>
      </div>
    </div>
  );
}
