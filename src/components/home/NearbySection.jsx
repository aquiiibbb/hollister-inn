export default function NearbySection() {
  return (
    <div className="nearby-section">
        <div className="nearby-left">
          <div className="nearby-left-content">
            <h4>Find Us</h4>
            <div className="nearby-address-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#661f31" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>152 San Felipe Road, Hollister, CA 95023, United States</span>
            </div>
            <p className="nearby-book-text">
              Book your stay at Hotel Hollister Inn in Hollister, California. Our comfortable rooms, free WiFi and friendly 24-hour front desk make it an easy base for exploring San Benito County, with Mission San Juan Bautista, Pinnacles National Park and Hollister Hills State Vehicular Recreation Area all within reach. Ideal for business travelers, weekend getaways and family stays.
            </p>
          </div>
          <div className="nearby-quick-highlights">
            <div className="nearby-highlight-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#661f31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>24/7 Front Desk</span>
            </div>
            <div className="nearby-highlight-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#661f31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                <line x1="12" y1="20" x2="12.01" y2="20"></line>
              </svg>
              <span>Free High-Speed Wi-Fi</span>
            </div>
            <div className="nearby-highlight-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#661f31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <span>Free Self Parking</span>
            </div>
          </div>
        </div>
        <div className="nearby-right">
          <h3>What's nearby</h3>
          <div className="nearby-grid">
            <div className="nearby-column">
              <div className="nearby-heading">
                <div className="nearby-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h5>Dining Near Hollister Inn</h5>
              </div>
              <div className="nearby-item">
                <span>Downtown Hollister</span>
                {" "}
                <small>Local restaurants and cafés</small>
              </div>
              <div className="nearby-item">
                <span>Family dining</span>
                {" "}
                <small>Casual restaurants nearby</small>
              </div>
              <div className="nearby-item">
                <span>Fast food</span>
                {" "}
                <small>Quick bites nearby</small>
              </div>
              <div className="nearby-item">
                <span>Wineries</span>
                {" "}
                <small>San Benito County wine tasting</small>
              </div>
              <div className="nearby-item">
                <span>Casa de Fruta</span>
                {" "}
                <small>Roadside stop and dining</small>
              </div>
            </div>
            <div className="nearby-column">
              <div className="nearby-heading">
                <div className="nearby-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h5>Attractions</h5>
              </div>
              <div className="nearby-item">
                <span>Mission San Juan Bautista</span>
                {" "}
                <small>Short drive</small>
              </div>
              <div className="nearby-item">
                <span>Pinnacles National Park</span>
                {" "}
                <small>Day trip</small>
              </div>
              <div className="nearby-item">
                <span>Hollister Hills SVRA</span>
                {" "}
                <small>Short drive</small>
              </div>
              <div className="nearby-item">
                <span>San Benito County Historical Park</span>
                {" "}
                <small>Nearby</small>
              </div>
              <div className="nearby-item">
                <span>Casa de Fruta</span>
                {" "}
                <small>Short drive</small>
              </div>
            </div>
            <div className="nearby-column">
              <div className="nearby-heading">
                <div className="nearby-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                    <line x1="9" y1="22" x2="9" y2="18"></line>
                    <line x1="15" y1="22" x2="15" y2="18"></line>
                    <line x1="9" y1="6" x2="9.01" y2="6"></line>
                    <line x1="15" y1="6" x2="15.01" y2="6"></line>
                    <line x1="9" y1="10" x2="9.01" y2="10"></line>
                    <line x1="15" y1="10" x2="15.01" y2="10"></line>
                    <line x1="9" y1="14" x2="9.01" y2="14"></line>
                    <line x1="15" y1="14" x2="15.01" y2="14"></line>
                  </svg>
                </div>
                <h5>{"Business & Key Locations Nearby"}</h5>
              </div>
              <div className="nearby-item">
                <span>Hazel Hawkins Memorial Hospital</span>
                {" "}
                <small>Nearby healthcare facility</small>
              </div>
              <div className="nearby-item">
                <span>Hollister Municipal Airport</span>
                {" "}
                <small>Nearby</small>
              </div>
              <div className="nearby-item">
                <span>Gilroy Premium Outlets</span>
                {" "}
                <small>Shopping</small>
              </div>
              <div className="nearby-item">
                <span>Downtown Hollister</span>
                {" "}
                <small>Shops and services</small>
              </div>
              <div className="nearby-item">
                <span>Highway 25 / Highway 156</span>
                {" "}
                <small>Easy road access</small>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
