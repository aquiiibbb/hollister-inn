export default function StickyNav({ activeNav, scrollToSection }) {
  return (
    <div className="sticky-nav" id="sticky-nav">
      <div className="sticky-nav-container">
        {/* Overview - Colored Clipboard */}
        <button
          type="button"
          onClick={() => scrollToSection('overview')}
          className={'nav-item' + (activeNav === 'overview' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="3" width="16" height="19" rx="2.5" fill="#c27803" />
            <rect x="6" y="6" width="12" height="14" rx="1" fill="#ffffff" />
            <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1z" fill="#64748b" />
            <rect x="8.5" y="9.5" width="7" height="1.8" rx="0.9" fill="#0284c7" />
            <rect x="8.5" y="13" width="7" height="1.8" rx="0.9" fill="#94a3b8" />
            <rect x="8.5" y="16.5" width="5" height="1.8" rx="0.9" fill="#94a3b8" />
          </svg>
          <span>Overview</span>
        </button>

        {/* Guest Rooms - Colored Bed */}
        <button
          type="button"
          onClick={() => scrollToSection('guest-rooms')}
          className={'nav-item' + (activeNav === 'guest-rooms' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M2 19V6a1 1 0 0 1 2 0v5h16V9a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-2H4v2a1 1 0 1 1-2 0z" fill="#1e3a8a" />
            <path d="M4 11h16v5H4z" fill="#2563eb" />
            <rect x="5.5" y="8" width="4.5" height="3" rx="1" fill="#ffffff" stroke="#93c5fd" strokeWidth="0.8" />
            <rect x="11.5" y="8" width="4.5" height="3" rx="1" fill="#ffffff" stroke="#93c5fd" strokeWidth="0.8" />
          </svg>
          <span>Guest Rooms</span>
        </button>

        {/* Amenities - Colored Pool */}
        <button
          type="button"
          onClick={() => scrollToSection('amenities')}
          className={'nav-item' + (activeNav === 'amenities' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="17" cy="5" r="3" fill="#f59e0b" />
            <path d="M2 14c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0v3c-2-1.5-4-1.5-6 0s-4 1.5-6 0-4-1.5-6 0v-3z" fill="#0284c7" />
            <path d="M2 18c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0v3c-2-1.5-4-1.5-6 0s-4 1.5-6 0-4-1.5-6 0v-3z" fill="#0ea5e9" />
            <circle cx="10" cy="7" r="2.2" fill="#f97316" />
            <path d="M7 13l3.5-3.5 3 2" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Amenities</span>
        </button>

        {/* Location - Colored Red Pin */}
        <button
          type="button"
          onClick={() => scrollToSection('location')}
          className={'nav-item' + (activeNav === 'location' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#dc2626" />
            <circle cx="12" cy="9" r="3" fill="#ffffff" />
            <circle cx="12" cy="9" r="1.5" fill="#dc2626" />
          </svg>
          <span>Location</span>
        </button>

        {/* Info - Colored Blue Badge */}
        <button
          type="button"
          onClick={() => scrollToSection('info')}
          className={'nav-item' + (activeNav === 'info' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#0284c7" />
            <circle cx="12" cy="7.5" r="1.5" fill="#ffffff" />
            <rect x="10.5" y="10.5" width="3" height="6.5" rx="1" fill="#ffffff" />
          </svg>
          <span>Info</span>
        </button>

        {/* Reviews - Colored Gold Star */}
        <button
          type="button"
          onClick={() => scrollToSection('reviews')}
          className={'nav-item' + (activeNav === 'reviews' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#f59e0b" stroke="#d97706" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="12 4 14.2 8.5 19 9.2 15.5 12.6 16.3 17.5 12 15.2" fill="#fbbf24" opacity="0.6" />
          </svg>
          <span>Reviews</span>
        </button>

        {/* Contact Us - Colored Pink Phone */}
        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className={'nav-item' + (activeNav === 'contact' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="#db2777" stroke="#be185d" strokeWidth="0.8" />
          </svg>
          <span>Contact Us</span>
        </button>

        {/* Policies - Colored Parchment */}
        <button
          type="button"
          onClick={() => scrollToSection('terms')}
          className={'nav-item' + (activeNav === 'terms' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 4H8a4 4 0 0 0-4 4v11a2 2 0 0 0 2 2h11a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" fill="#fef3c7" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 2v4a2 2 0 0 0 2 2h4" fill="#fde68a" stroke="#d97706" strokeWidth="1.2" />
            <line x1="8" y1="11" x2="14" y2="11" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="8" y1="14.5" x2="13" y2="14.5" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span>Policies</span>
        </button>
      </div>
    </div>
  );
}
