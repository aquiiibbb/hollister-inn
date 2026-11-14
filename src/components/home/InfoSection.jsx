export default function InfoSection() {
  return (
    <div className="info-section" id="info">
      <p className="tag">INFO</p>
      <h2>Essential details</h2>
      <div className="info-grid">
        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div>
            <h4>Check-In</h4>
            <p>3:00 PM – 12:00 AM</p>
            <small style={{ color: '#6b7280', fontSize: '12px' }}>Photo ID & credit card</small>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </div>
          <div>
            <h4>Check-Out</h4>
            <p>11:00 AM – 11:30 AM</p>
            <small style={{ color: '#6b7280', fontSize: '12px' }}>Standard check-out</small>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div>
            <h4>Front Desk</h4>
            <p>(831) 637-1641</p>
            <small style={{ color: '#6b7280', fontSize: '12px' }}>24-hour service</small>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
              <circle cx="8" cy="10" r="2"></circle>
              <line x1="13" y1="9" x2="18" y2="9"></line>
              <line x1="13" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <div>
            <h4>Age Restriction</h4>
            <p>Minimum age is 20</p>
            <small style={{ color: '#6b7280', fontSize: '12px' }}>For primary guest</small>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div>
            <h4>Children & Beds</h4>
            <p>Children welcome</p>
            <small style={{ color: '#6b7280', fontSize: '12px' }}>Free cot (0–2 yrs) on request</small>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
            </svg>
          </div>
          <div>
            <h4>Pets</h4>
            <p>Pets are not allowed</p>
            <small style={{ color: '#6b7280', fontSize: '12px' }}>Service animals only</small>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2"></rect>
              <circle cx="12" cy="12" r="2"></circle>
              <path d="M6 12h.01M18 12h.01"></path>
            </svg>
          </div>
          <div>
            <h4>Damage Deposit</h4>
            <p>US$150 cash deposit</p>
            <small style={{ color: '#6b7280', fontSize: '12px' }}>Refundable at check-out</small>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="4"></rect>
              <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
            </svg>
          </div>
          <div>
            <h4>Parking</h4>
            <p>Free on-site parking</p>
            <small style={{ color: '#6b7280', fontSize: '12px' }}>No reservation needed</small>
          </div>
        </div>
      </div>
    </div>
  );
}
