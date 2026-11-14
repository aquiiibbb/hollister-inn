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
          <svg className="nav-icon-colored" width="17" height="17" viewBox="0 0 24 24">
            <rect x="4" y="3" width="16" height="19" rx="2" fill="#d97706" />
            <rect x="6" y="6" width="12" height="14" rx="1" fill="#ffffff" />
            <rect x="8" y="1" width="8" height="4" rx="1" fill="#64748b" />
            <rect x="8" y="9" width="8" height="1.5" rx="0.75" fill="#94a3b8" />
            <rect x="8" y="12" width="8" height="1.5" rx="0.75" fill="#94a3b8" />
            <rect x="8" y="15" width="5" height="1.5" rx="0.75" fill="#94a3b8" />
          </svg>
          <span>Overview</span>
        </button>

        {/* Guest Rooms - Colored Bed */}
        <button
          type="button"
          onClick={() => scrollToSection('guest-rooms')}
          className={'nav-item' + (activeNav === 'guest-rooms' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="17" height="17" viewBox="0 0 24 24">
            <rect x="2" y="5" width="2.5" height="15" rx="1" fill="#1e40af" />
            <rect x="19.5" y="10" width="2.5" height="10" rx="1" fill="#1e40af" />
            <path d="M4.5 12h15v6h-15z" fill="#3b82f6" />
            <rect x="5.5" y="8" width="5" height="4" rx="1" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.5" />
            <rect x="2" y="18" width="20" height="2" rx="1" fill="#1e3a8a" />
          </svg>
          <span>Guest Rooms</span>
        </button>

        {/* Amenities - Colored Pool */}
        <button
          type="button"
          onClick={() => scrollToSection('amenities')}
          className={'nav-item' + (activeNav === 'amenities' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="17" height="17" viewBox="0 0 24 24">
            <path d="M2 17c1.5 0 2.5-.8 4-.8s2.5.8 4 .8 2.5-.8 4-.8 2.5.8 4 .8 2.5-.8 4-.8v3c-1.5 0-2.5.8-4 .8s-2.5-.8-4-.8-2.5.8-4 .8-2.5-.8-4-.8-2.5.8-4 .8v-3z" fill="#0284c7" />
            <path d="M2 13c1.5 0 2.5-.8 4-.8s2.5.8 4 .8 2.5-.8 4-.8 2.5.8 4 .8 2.5-.8 4-.8v2.5c-1.5 0-2.5.8-4 .8s-2.5-.8-4-.8-2.5.8-4 .8-2.5-.8-4-.8-2.5.8-4 .8V13z" fill="#38bdf8" />
            <circle cx="16" cy="6" r="3" fill="#f59e0b" />
            <path d="m9 11 3-3 4 2" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span>Amenities</span>
        </button>

        {/* Location - Colored Red Pin */}
        <button
          type="button"
          onClick={() => scrollToSection('location')}
          className={'nav-item' + (activeNav === 'location' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="17" height="17" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#ef4444" />
            <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
          </svg>
          <span>Location</span>
        </button>

        {/* Info - Colored Blue Badge */}
        <button
          type="button"
          onClick={() => scrollToSection('info')}
          className={'nav-item' + (activeNav === 'info' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="17" height="17" viewBox="0 0 24 24">
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
          <svg className="nav-icon-colored" width="17" height="17" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" strokeLinejoin="round" />
          </svg>
          <span>Reviews</span>
        </button>

        {/* Contact Us - Colored Pink Phone */}
        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className={'nav-item' + (activeNav === 'contact' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="17" height="17" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="#ec4899" stroke="#db2777" strokeWidth="1" />
          </svg>
          <span>Contact Us</span>
        </button>

        {/* Policies - Colored Parchment */}
        <button
          type="button"
          onClick={() => scrollToSection('terms')}
          className={'nav-item' + (activeNav === 'terms' ? ' active' : '')}
        >
          <svg className="nav-icon-colored" width="17" height="17" viewBox="0 0 24 24">
            <path d="M19 4H8a4 4 0 0 0-4 4v11a2 2 0 0 0 2 2h11a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 2v4a2 2 0 0 0 2 2h4" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
            <line x1="8" y1="12" x2="14" y2="12" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="15" x2="13" y2="15" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>Policies</span>
        </button>
      </div>
    </div>
  );
}
