export default function TermsSection() {
  return (
    <div className="terms-section" id="terms">
      <div className="terms-inner">
        <p className="terms-tag">HOUSE RULES</p>
        <h2 className="terms-heading">House Rules & Hotel Policies</h2>
        <p className="terms-sub">
          Hollister Inn takes special requests — add in the next step! For any questions, contact us at (831) 637-1641.
        </p>
        <div className="policy-grid">
          <div className="policy-card">
            <div className="policy-card-title">
              <span className="policy-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </span>
              Check-in & Check-out
            </div>
            <div className="policy-row">
              <span className="policy-key">Check-in</span>
              <span className="policy-val">From 15:00 to 00:00 (3:00 PM – Midnight)</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Check-out</span>
              <span className="policy-val">From 11:00 to 11:30 AM</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Requirement</span>
              <span className="policy-val">Photo ID & credit card required at check-in</span>
            </div>
          </div>

          <div className="policy-card">
            <div className="policy-card-title">
              <span className="policy-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M6 12h.01M18 12h.01"></path>
                </svg>
              </span>
              Refundable Damage Deposit
            </div>
            <div className="policy-row">
              <span className="policy-key">Amount</span>
              <span className="policy-val">US$150 required on arrival</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Payment</span>
              <span className="policy-val">Collected as cash payment</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Refund</span>
              <span className="policy-val">Reimbursed on check-out in full cash, subject to inspection</span>
            </div>
          </div>

          <div className="policy-card">
            <div className="policy-card-title">
              <span className="policy-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
              Children & Extra Beds
            </div>
            <div className="policy-row">
              <span className="policy-key">Child policy</span>
              <span className="policy-val">Children of any age are welcome</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Adult rates</span>
              <span className="policy-val">Ages 18 and above charged as adults</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Cots (0–2 yrs)</span>
              <span className="policy-val">Cot upon request: Free (subject to availability)</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Extra beds</span>
              <span className="policy-val">No extra beds available at this property</span>
            </div>
          </div>

          <div className="policy-card">
            <div className="policy-card-title">
              <span className="policy-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                  <circle cx="8" cy="10" r="2"></circle>
                  <line x1="13" y1="9" x2="18" y2="9"></line>
                </svg>
              </span>
              Age Restriction & ID
            </div>
            <div className="policy-row">
              <span className="policy-key">Minimum age</span>
              <span className="policy-val">The minimum age for check-in is 20</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">ID required</span>
              <span className="policy-val">Valid government-issued photo ID</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Special requests</span>
              <span className="policy-val">Subject to availability upon check-in</span>
            </div>
          </div>

          <div className="policy-card">
            <div className="policy-card-title">
              <span className="policy-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                </svg>
              </span>
              Pets & Smoking
            </div>
            <div className="policy-row">
              <span className="policy-key">Pets</span>
              <span className="policy-val">Pets are not allowed</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Smoking</span>
              <span className="policy-val">Designated smoking area available / Non-smoking rooms</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Parking</span>
              <span className="policy-val">Free public parking on-site (no reservation needed)</span>
            </div>
          </div>

          <div className="policy-card">
            <div className="policy-card-title">
              <span className="policy-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </span>
              Payment & Cancellation
            </div>
            <div className="policy-row">
              <span className="policy-key">Accepted cards</span>
              <span className="policy-val">American Express, VISA, MasterCard, Discover</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Cancellation</span>
              <span className="policy-val">Policies vary according to accommodation type</span>
            </div>
            <div className="policy-row">
              <span className="policy-key">Prepayment</span>
              <span className="policy-val">Check conditions of your required room option</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
