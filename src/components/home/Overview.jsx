export default function Overview({ openRoomModal }) {
  return (
    <div className="overview-container">
      <div className="overview-section" id="overview">
        <div className="overview-left">
          <p className="tag">OVERVIEW</p>
          <h2>“Book our affordable hotel in Hollister for a comfortable and convenient stay.”</h2>
          <p className="desc">
            The Hollister Inn offers an affordable stay conveniently located at 152 San Felipe Road, just 700 meters from the centre of Hollister, California. Guests enjoy easy access to nearby shopping centers, restaurants, and local attractions including Mission San Juan Bautista, Pinnacles National Park, and Hollister Hills State Vehicular Recreation Area. Relax in our outdoor swimming pool, enjoy on-site BBQ facilities, and stay connected with complimentary high-speed WiFi and free truck & car parking.
          </p>
          <button className="read-more-btn" onClick={() => openRoomModal('readmore-modal')}>Read More</button>
        </div>
        <div className="overview-right-wrapper">
          <div className="overview-right">
            <h3>Highlights</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                    <line x1="12" y1="20" x2="12.01" y2="20"></line>
                  </svg>
                </div>
                <div className="highlight-info">
                  <span className="highlight-title">Free WiFi</span>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6"></path>
                    <path d="M6 8h12a3 3 0 0 1 3 3v1H3v-1a3 3 0 0 1 3-3z"></path>
                    <line x1="10" y1="4" x2="10" y2="8"></line>
                    <line x1="14" y1="4" x2="14" y2="8"></line>
                  </svg>
                </div>
                <div className="highlight-info">
                  <span className="highlight-title">Hair Dryer</span>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h20"></path>
                    <path d="M20 12v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5"></path>
                    <path d="M12 12V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8"></path>
                    <circle cx="16" cy="7" r="1"></circle>
                  </svg>
                </div>
                <div className="highlight-info">
                  <span className="highlight-title">Outdoor Pool</span>
                  <small className="highlight-sub">Open all year</small>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                    <line x1="8" y1="6" x2="16" y2="6"></line>
                    <line x1="8" y1="10" x2="16" y2="10"></line>
                    <line x1="8" y1="14" x2="12" y2="14"></line>
                    <circle cx="15" cy="14" r="1"></circle>
                    <rect x="8" y="17" width="8" height="2" rx="0.5"></rect>
                  </svg>
                </div>
                <div className="highlight-info">
                  <span className="highlight-title">Vending Machines*</span>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div className="highlight-info">
                  <span className="highlight-title">Truck Parking</span>
                  <small className="highlight-sub">Free on-site</small>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="highlight-info">
                  <span className="highlight-title">Check in / out</span>
                  <small className="highlight-sub">3:00 PM / 11:30 AM</small>
                </div>
              </div>
            </div>
            <button className="amenities-btn" onClick={() => openRoomModal('amenities-modal')}>View all amenities</button>
          </div>
        </div>
      </div>
    </div>
  );
}
