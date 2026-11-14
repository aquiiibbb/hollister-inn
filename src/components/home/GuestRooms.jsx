import { bookNow } from '../../config/hotel';
import { useState } from 'react';

export default function GuestRooms({ openRoomModal, navigate }) {
  // null until a filter button is clicked (cards keep their stylesheet display until then)
  const [filter, setFilter] = useState(null);
  const cardStyle = (type) =>
    filter === null ? undefined : { display: filter === 'all' || type === filter ? 'flex' : 'none' };

  return (
    <div className="guest-rooms-section" id="guest-rooms">
      <div className="rooms-header">
        <div className="rooms-title">
          <p className="tag guest-rooms">GUEST ROOMS</p>
          <h2>Available Guest Rooms</h2>
        </div>
      </div>
      <div className="room-selection-filters">
        <button onClick={() => setFilter('all')} className={'filter-btn' + ((filter ?? 'all') === 'all' ? ' active' : '')}>All rooms</button>
        {" "}
        <button onClick={() => setFilter('1bed')} className={'filter-btn' + ((filter ?? 'all') === '1bed' ? ' active' : '')}>🛏️ King / 1 Bed (2)</button>
        {" "}
        <button onClick={() => setFilter('2bed')} className={'filter-btn' + ((filter ?? 'all') === '2bed' ? ' active' : '')}>🛏️ 2 Beds / Family (1)</button>
      </div>
      <div className="rooms-grid" id="rooms-grid">
        <div className="room-card" data-type="1bed" style={cardStyle("1bed")}>
          <div className="room-image" onClick={() => openRoomModal('room1-modal')} style={{ cursor: "pointer" }}>
            <img src="/Assets/656218827.jpg" alt="King Bed - Non Smoking (NK)" />
            <div className="image-overlay">
              <span className="view-photos">View Details</span>
            </div>
          </div>
          <div className="room-details">
            <h3>King Bed - Non Smoking (NK)</h3>
            <div className="room-specs">
              <span className="spec">🛏️ 1 King Bed</span>
              {" "}
              <span className="spec">👥 2 Guests</span>
              {" "}
              <span className="spec">🚭 Non-Smoking</span>
            </div>
            <div className="room-features">
              <div className="feature-row">
                <span>Microwave</span>
                {" "}
                <span>Refrigerator</span>
                {" "}
                <span>Coffee/Tea Maker</span>
              </div>
              <div className="feature-row">
                <span>Free High-Speed WiFi</span>
                {" "}
                <span>Flat-Screen TV</span>
                {" "}
                <span>Private Bath</span>
              </div>
            </div>
            <button className="room-details-btn" onClick={() => openRoomModal('room1-modal')}>Room Details</button>
          </div>
          <div className="room-pricing">
            <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
          </div>
        </div>

        <div className="room-card" data-type="1bed" style={cardStyle("1bed")}>
          <div className="room-image" onClick={() => openRoomModal('room2-modal')} style={{ cursor: "pointer" }}>
            <img src="/Assets/unnamed-16.webp" alt="King Bed with Seating Area (K)" />
            <div className="image-overlay">
              <span className="view-photos">View Details</span>
            </div>
          </div>
          <div className="room-details">
            <h3>King Bed with Sitting Area (K)</h3>
            <div className="room-specs">
              <span className="spec">🛏️ 1 King Bed</span>
              {" "}
              <span className="spec">👥 2 Guests</span>
              {" "}
              <span className="spec">📐 Workstation</span>
            </div>
            <div className="room-features">
              <div className="feature-row">
                <span>Microwave</span>
                {" "}
                <span>Refrigerator</span>
                {" "}
                <span>Coffee/Tea Maker</span>
              </div>
              <div className="feature-row">
                <span>Free High-Speed WiFi</span>
                {" "}
                <span>Flat-Screen TV</span>
                {" "}
                <span>Private Bath</span>
              </div>
            </div>
            <button className="room-details-btn" onClick={() => openRoomModal('room2-modal')}>Room Details</button>
          </div>
          <div className="room-pricing">
            <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
          </div>
        </div>

        <div className="room-card" data-type="2bed" style={cardStyle("2bed")}>
          <div className="room-image" onClick={() => openRoomModal('room3-modal')} style={{ cursor: "pointer" }}>
            <img src="/Assets/656219085.jpg" alt="Two Queen Beds - Family Room (QQ)" />
            <div className="image-overlay">
              <span className="view-photos">View Details</span>
            </div>
          </div>
          <div className="room-details">
            <h3>Two Queen Beds – Family Room (QQ)</h3>
            <div className="room-specs">
              <span className="spec">🛏️ 2 Queen Beds</span>
              {" "}
              <span className="spec">👥 Up to 4 Guests</span>
              {" "}
              <span className="spec">👨‍👩‍👧 Family Friendly</span>
            </div>
            <div className="room-features">
              <div className="feature-row">
                <span>Microwave</span>
                {" "}
                <span>Refrigerator</span>
                {" "}
                <span>Coffee/Tea Maker</span>
              </div>
              <div className="feature-row">
                <span>Free High-Speed WiFi</span>
                {" "}
                <span>Flat-Screen TV</span>
                {" "}
                <span>Private Bath</span>
              </div>
            </div>
            <button className="room-details-btn" onClick={() => openRoomModal('room3-modal')}>Room Details</button>
          </div>
          <div className="room-pricing">
            <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
          </div>
        </div>
      </div>
      <div className="more-rooms-container">
        <button className="more-rooms-btn" onClick={() => navigate('/rooms')}>
          <span>More Rooms</span>
          {" "}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
