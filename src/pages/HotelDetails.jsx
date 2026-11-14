import { useState } from 'react';
import usePageStyle from '../hooks/usePageStyle';
import css from '../styles/s.css?raw';

const hamptonImages = [
  { src: '/Assets/30728994.jpg', alt: 'Hotel Exterior & Welcome Sign' },
  { src: '/Assets/656218827.jpg', alt: 'King Bed Guest Room' },
  { src: '/Assets/904328424.jpg', alt: 'Outdoor Swimming Pool' },
  { src: '/Assets/656219085.jpg', alt: 'Two Queen Beds Family Room' },
  { src: '/Assets/unnamed-22.webp', alt: 'Outdoor BBQ Facilities & Patio' },
  { src: '/Assets/unnamed-24.webp', alt: 'Front Desk & Lobby' },
];

export default function HotelDetails() {
  usePageStyle(css, 'Hotel Hollister Inn – Details & Facilities');

  const [imageIndex, setImageIndex] = useState(0);
  const [hasSlid, setHasSlid] = useState(false);
  const [tab, setTab] = useState('nearby');
  const [collapsed, setCollapsed] = useState(false);

  const current = hamptonImages[imageIndex];
  const counterText = hasSlid ? `${imageIndex + 1} / ${hamptonImages.length}` : `1 / ${hamptonImages.length}`;

  const nextImage = () => {
    setHasSlid(true);
    setImageIndex((i) => (i + 1) % hamptonImages.length);
  };
  const previousImage = () => {
    setHasSlid(true);
    setImageIndex((i) => (i - 1 + hamptonImages.length) % hamptonImages.length);
  };
  const toggleDescription = () => setCollapsed((c) => !c);

  return (
    <>
      <div className="hampton-modal-container">
        <div className="hampton-modal-content">
          <div className="hampton-modal-left">
            <div className="hampton-image-container">
              <img className="hampton-main-image" src={current.src} alt={current.alt} />
              {" "}
              <button className="hampton-nav-arrow hampton-nav-left" onClick={() => previousImage()}>‹</button>
              {" "}
              <button className="hampton-nav-arrow hampton-nav-right" onClick={() => nextImage()}>›</button>
              <div className="hampton-image-counter">{counterText}</div>
            </div>
            <div className="hampton-hotel-info">
              <h2 className="hampton-hotel-title">Hotel Hollister Inn - Hollister California</h2>
              <div className="hampton-renovated-badge">700 m from Centre of Hollister</div>
              <div className="hampton-contact-links">
                <a href="https://maps.google.com/?q=152+San+Felipe+Road,+Hollister,+CA,+95023,+US" target="_blank" rel="noreferrer">Directions</a>
                {" "}
                <a href="tel:+18316371641">📞 (831) 637-1641</a>
              </div>
              <div className="hampton-description">
                <h3>Description</h3>
                <p style={collapsed ? { maxHeight: "50px" } : undefined}>
                  Hollister Inn, Hollister California is the perfect choice for travelers looking for value, comfort, and convenience. Located at 152 San Felipe Road, you are just 700 meters from downtown Hollister and close to key destinations around San Benito County. Enjoy easy access to nearby shopping, dining, and scenic outdoor spots like Pinnacles National Park, Mission San Juan Bautista, and Hollister Hills State Vehicular Recreation Area. Guests can take advantage of our outdoor swimming pool (infinity pool, open all year), on-site BBQ facilities with picnic tables, free high-speed WiFi, 24-hour front desk, and complimentary on-site parking. Each guest room is equipped with air conditioning, private bathroom, refrigerator, microwave, coffee maker, and flat-screen TV with cable channels.
                </p>
                <a onClick={(event) => { event.preventDefault(); toggleDescription(); }} href="#">{collapsed ? 'Read more' : 'Read less'}</a>
              </div>
            </div>
          </div>
          <div className="hampton-modal-right">
            <div className="hampton-section-header">
              <h2>Amenities & Highlights</h2>
            </div>
            <div className="hampton-amenities-grid">
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">🏊</div>
                <span>Outdoor swimming pool</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">🅿️</div>
                <span>Free parking on-site</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">📶</div>
                <span>Free high-speed WiFi</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">🚭</div>
                <span>Non-smoking rooms</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">☕</div>
                <span>Tea/coffee maker in rooms</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">🍖</div>
                <span>BBQ facilities & patio</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">🥤</div>
                <span>Vending machines</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">💨</div>
                <span>Hair dryer</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">🛎️</div>
                <span>24-Hour front desk</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">🏨</div>
                <span>Exterior corridors</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">♿</div>
                <span>Facilities for disabled guests</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">👨‍👩‍👧</div>
                <span>Family rooms available</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">❄️</div>
                <span>Air conditioning & heating</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">🧺</div>
                <span>Laundry facilities*</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">📺</div>
                <span>Flat-screen TV & cable</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">🧊</div>
                <span>Refrigerator & microwave</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">熨</div>
                <span>Iron/Board</span>
              </div>
              <div className="hampton-amenity-item">
                <div className="hampton-amenity-icon">🚫</div>
                <span>Pets not allowed</span>
              </div>
            </div>
            <div className="hampton-section">
              <h3>Overview & Policies</h3>
              <div className="hampton-info-table">
                <div className="hampton-info-row">
                  <span className="hampton-info-label">Check-in</span>
                  {" "}
                  <span className="hampton-info-value">15:00 to 00:00 (3:00 PM – Midnight)</span>
                </div>
                <div className="hampton-info-row">
                  <span className="hampton-info-label">Check-out</span>
                  {" "}
                  <span className="hampton-info-value">11:00 to 11:30 AM</span>
                </div>
                <div className="hampton-info-row">
                  <span className="hampton-info-label">Minimum check-in age</span>
                  {" "}
                  <span className="hampton-info-value">20 years old</span>
                </div>
                <div className="hampton-info-row">
                  <span className="hampton-info-label">Refundable deposit</span>
                  {" "}
                  <span className="hampton-info-value">US$150 cash deposit upon arrival (reimbursed at checkout)</span>
                </div>
                <div className="hampton-info-row">
                  <span className="hampton-info-label">Children policy</span>
                  {" "}
                  <span className="hampton-info-value">Children of all ages welcome (Free cot 0-2 yrs on request)</span>
                </div>
                <div className="hampton-info-row">
                  <span className="hampton-info-label">Pets</span>
                  {" "}
                  <span className="hampton-info-value">Pets are not allowed</span>
                </div>
                <div className="hampton-info-row">
                  <span className="hampton-info-label">Parking</span>
                  {" "}
                  <span className="hampton-info-value">Free public on-site parking (no reservation required)</span>
                </div>
                <div className="hampton-info-row">
                  <span className="hampton-info-label">Cards accepted</span>
                  {" "}
                  <span className="hampton-info-value">American Express, VISA, MasterCard, Discover</span>
                </div>
                <div className="hampton-info-row">
                  <span className="hampton-info-label">Languages</span>
                  {" "}
                  <span className="hampton-info-value">English</span>
                </div>
              </div>
            </div>
            <div className="hampton-section">
              <h3>Location and transportation</h3>
              <div className="hampton-tabs">
                <button onClick={() => setTab('nearby')} className={'hampton-tab-btn' + (tab === 'nearby' ? ' hampton-tab-active' : '')}>What's nearby</button>
                {" "}
                <button onClick={() => setTab('airport')} className={'hampton-tab-btn' + (tab === 'airport' ? ' hampton-tab-active' : '')}>Airport info</button>
              </div>
              <div id="nearby-content" className={'hampton-tab-content' + (tab === 'nearby' ? ' hampton-tab-show' : '')}>
                <div className="hampton-location-list">
                  <div className="hampton-location-item">
                    <span>Downtown Hollister</span>
                    {" "}
                    <span>700 m (Walking distance)</span>
                  </div>
                  <div className="hampton-location-item">
                    <span>Mission San Juan Bautista</span>
                    {" "}
                    <span>Short drive</span>
                  </div>
                  <div className="hampton-location-item">
                    <span>Hollister Hills State Vehicular Recreation Area</span>
                    {" "}
                    <span>Short drive</span>
                  </div>
                  <div className="hampton-location-item">
                    <span>Casa de Fruta</span>
                    {" "}
                    <span>Short drive</span>
                  </div>
                  <div className="hampton-location-item">
                    <span>Gilroy Premium Outlets</span>
                    {" "}
                    <span>Short drive</span>
                  </div>
                  <div className="hampton-location-item">
                    <span>Pinnacles National Park</span>
                    {" "}
                    <span>Day trip / Scenic drive</span>
                  </div>
                  <div className="hampton-location-item">
                    <span>Hazel Hawkins Memorial Hospital</span>
                    {" "}
                    <span>Nearby</span>
                  </div>
                  <div className="hampton-location-item">
                    <span>Hollister Municipal Airport</span>
                    {" "}
                    <span>Nearby</span>
                  </div>
                </div>
              </div>
              <div id="airport-content" className={'hampton-tab-content' + (tab === 'airport' ? ' hampton-tab-show' : '')}>
                <div className="hampton-location-list">
                  <div className="hampton-location-item">
                    <span>{"Norman Y. Mineta San José International Airport (SJC)"}</span>
                    {" "}
                    <span>Approx. 45 miles</span>
                  </div>
                  <div className="hampton-location-item">
                    <span>Monterey Regional Airport (MRY)</span>
                    {" "}
                    <span>Approx. 40 miles</span>
                  </div>
                  <div className="hampton-location-item">
                    <span>Estimated drive time</span>
                    {" "}
                    <span>About 45 - 60 minutes</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hampton-section">
              <h3>Accessible Features</h3>
              <div className="hampton-accessible-list">
                <div className="hampton-accessible-item">✓ Wheelchair accessible guest rooms</div>
                <div className="hampton-accessible-item">✓ Entire unit located on ground floor</div>
                <div className="hampton-accessible-item">✓ Lower bathroom sink & raised toilet</div>
                <div className="hampton-accessible-item">✓ Toilet with grab rails</div>
                <div className="hampton-accessible-item">✓ Free accessible parking spaces on site</div>
                <div className="hampton-accessible-item">✓ Accessible public entrance & registration desk</div>
                <div className="hampton-accessible-item">✓ Outdoor swimming pool access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
