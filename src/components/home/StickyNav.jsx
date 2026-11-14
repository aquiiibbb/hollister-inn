export default function StickyNav({ activeNav, scrollToSection }) {
  return (
    <div className="sticky-nav" id="sticky-nav">
      <div className="sticky-nav-container">
        <button
          type="button"
          onClick={() => scrollToSection('overview')}
          className={'nav-item' + (activeNav === 'overview' ? ' active' : '')}
        >
          <svg className="nav-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          </svg>
          <span>Overview</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('guest-rooms')}
          className={'nav-item' + (activeNav === 'guest-rooms' ? ' active' : '')}
        >
          <svg className="nav-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
          </svg>
          <span>Guest Rooms</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('amenities')}
          className={'nav-item' + (activeNav === 'amenities' ? ' active' : '')}
        >
          <svg className="nav-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
          </svg>
          <span>Amenities</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('location')}
          className={'nav-item' + (activeNav === 'location' ? ' active' : '')}
        >
          <svg className="nav-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Location</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('info')}
          className={'nav-item' + (activeNav === 'info' ? ' active' : '')}
        >
          <svg className="nav-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>Info</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('reviews')}
          className={'nav-item' + (activeNav === 'reviews' ? ' active' : '')}
        >
          <svg className="nav-icon" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>Reviews</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className={'nav-item' + (activeNav === 'contact' ? ' active' : '')}
        >
          <svg className="nav-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Contact Us</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('terms')}
          className={'nav-item' + (activeNav === 'terms' ? ' active' : '')}
        >
          <svg className="nav-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>Policies</span>
        </button>
      </div>
    </div>
  );
}
