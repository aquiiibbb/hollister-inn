export default function StickyNav({ activeNav, scrollToSection }) {
  return (
    <div className="sticky-nav" id="sticky-nav">
      <div className="sticky-nav-container">
        <button onClick={() => scrollToSection('overview')} className={'nav-item' + (activeNav === 'overview' ? ' active' : '')}>📋 Overview</button>
        {" "}
        <button onClick={() => scrollToSection('guest-rooms')} className={'nav-item' + (activeNav === 'guest-rooms' ? ' active' : '')}>🛏️ Guest Rooms</button>
        {" "}
        <button onClick={() => scrollToSection('amenities')} className={'nav-item' + (activeNav === 'amenities' ? ' active' : '')}>🏊 Amenities</button>
        {" "}
        <button onClick={() => scrollToSection('location')} className={'nav-item' + (activeNav === 'location' ? ' active' : '')}>📍 Location</button>
        {" "}
        <button onClick={() => scrollToSection('info')} className={'nav-item' + (activeNav === 'info' ? ' active' : '')}>ℹ️ Info</button>
        {" "}
        <button onClick={() => scrollToSection('reviews')} className={'nav-item' + (activeNav === 'reviews' ? ' active' : '')}>⭐ Reviews</button>
        {" "}
        <button onClick={() => scrollToSection('contact')} className={'nav-item' + (activeNav === 'contact' ? ' active' : '')}>📞 Contact Us</button>
        {" "}
        <button onClick={() => scrollToSection('terms')} className={'nav-item' + (activeNav === 'terms' ? ' active' : '')}>📜 Policies</button>
      </div>
    </div>
  );
}
