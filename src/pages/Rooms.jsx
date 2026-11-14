import { bookNow } from '../config/hotel';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePageStyle from '../hooks/usePageStyle';
import css from '../styles/room.css?raw';

/* ── Image slider data ── */
const roomImages = {
  room1: ['Assets/656218827.jpg', 'Assets/656218830.jpg', 'Assets/unnamed-16.webp', 'Assets/unnamed-17.webp', 'Assets/unnamed-21.webp', 'Assets/unnamed-25.webp', 'Assets/656218982.jpg', 'Assets/unnamed-1.webp'],
  room2: ['Assets/unnamed-16.webp', 'Assets/unnamed-17.webp', 'Assets/656218827.jpg', 'Assets/656218830.jpg', 'Assets/unnamed-21.webp', 'Assets/unnamed-26.webp', 'Assets/656218982.jpg', 'Assets/unnamed-14.webp'],
  room3: ['Assets/unnamed-13.webp', 'Assets/656218827.jpg', 'Assets/656218830.jpg', 'Assets/unnamed-1.webp', 'Assets/656218982.jpg'],
  room4: ['Assets/unnamed-21.webp', 'Assets/unnamed-25.webp', 'Assets/unnamed-26.webp', 'Assets/unnamed-30.webp', 'Assets/656218827.jpg', 'Assets/unnamed-1.webp'],
  room5: ['Assets/656219085.jpg', 'Assets/unnamed-15.webp', 'Assets/unnamed-14.webp', 'Assets/unnamed-27.webp', 'Assets/unnamed-23.webp'],
  room6: ['Assets/unnamed-25.webp', 'Assets/unnamed-21.webp', 'Assets/unnamed-30.webp', 'Assets/656218827.jpg', 'Assets/unnamed-26.webp'],
  room7: ['Assets/656219085.jpg', 'Assets/unnamed-15.webp', 'Assets/unnamed-14.webp', 'Assets/unnamed-27.webp', 'Assets/unnamed-23.webp'],
  room8: ['Assets/unnamed-13.webp', 'Assets/656219085.jpg', 'Assets/unnamed-15.webp', 'Assets/unnamed-14.webp'],
  room9: ['Assets/656218827.jpg', 'Assets/656218830.jpg', 'Assets/unnamed-16.webp', 'Assets/656218982.jpg', 'Assets/unnamed-1.webp'],
  room10: ['Assets/656218830.jpg', 'Assets/656218827.jpg', 'Assets/unnamed-17.webp', 'Assets/656218982.jpg', 'Assets/unnamed-14.webp'],
};

const CARD_COUNT = 10;

export default function Rooms() {
  usePageStyle(css, 'Hotel Rooms - All Available Rooms');
  const navigate = useNavigate();

  const [filter, setFilter] = useState('all');
  const [openModal, setOpenModal] = useState(null);
  const [slides, setSlides] = useState({}); // { room1: { src, opacity } }
  const [shownCards, setShownCards] = useState({});
  const slideIndex = useRef({});
  const slideTimers = useRef([]);

  /* ── Filter ── */
  const cardStyle = (i, type) => {
    const style = {};
    if (!(filter === 'all' || type === filter)) style.display = 'none';
    if (shownCards[i]) {
      style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      style.opacity = '1';
      style.transform = 'translateY(0)';
    } else {
      style.opacity = '0';
      style.transform = 'translateY(20px)';
    }
    return style;
  };

  /* ── Modals ── */
  const openRoomModal = (id) => setOpenModal(id);
  const closeModal = (id) => setOpenModal((cur) => (cur === id ? null : cur));
  const overlayClose = (e, id) => {
    if (e.target === e.currentTarget) closeModal(id);
  };

  const modalSlide = (roomId, dir) => {
    const imgs = roomImages[roomId];
    const cur = slideIndex.current[roomId] || 0;
    const next = (cur + dir + imgs.length) % imgs.length;
    slideIndex.current[roomId] = next;
    setSlides((s) => ({ ...s, [roomId]: { src: '/' + imgs[cur], ...s[roomId], opacity: '0' } }));
    slideTimers.current.push(
      setTimeout(() => {
        setSlides((s) => ({ ...s, [roomId]: { src: '/' + imgs[slideIndex.current[roomId]], opacity: '1' } }));
      }, 150)
    );
  };


  // body scroll lock while a modal is open
  useEffect(() => {
    document.body.style.overflow = openModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openModal]);

  // Escape closes any open modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenModal(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  /* ── Entrance animation ── */
  useEffect(() => {
    const timers = [];
    for (let i = 0; i < CARD_COUNT; i++) {
      timers.push(setTimeout(() => setShownCards((s) => ({ ...s, [i]: true })), i * 80));
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => () => slideTimers.current.forEach(clearTimeout), []);

  return (
    <>
  <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back to Hotel</button>
        <div className="page-header">
          <h1 className="page-title">All Available Rooms</h1>
          <p className="page-subtitle">Choose from our selection of comfortable and well-equipped rooms</p>
        </div>
        <div className="room-selection-filters">
          <button onClick={() => setFilter('all')} className={'filter-btn' + (filter === 'all' ? ' active' : '')}>All Rooms</button>
          {" "}
          <button onClick={() => setFilter('1bed')} className={'filter-btn' + (filter === '1bed' ? ' active' : '')}>🛏️ 1 Bed</button>
          {" "}
          <button onClick={() => setFilter('2bed')} className={'filter-btn' + (filter === '2bed' ? ' active' : '')}>🛏️ 2 Beds</button>
          {" "}
          <button onClick={() => setFilter('suite')} className={'filter-btn' + (filter === 'suite' ? ' active' : '')}>🏨 Suites</button>
          {" "}
          <button onClick={() => setFilter('handicap')} className={'filter-btn' + (filter === 'handicap' ? ' active' : '')}>♿ Accessible</button>
          {" "}
          <button onClick={() => setFilter('jacuzzi')} className={'filter-btn' + (filter === 'jacuzzi' ? ' active' : '')}>🛁 Jacuzzi</button>
        </div>
        <div className="rooms-grid" id="rooms-grid">
          <div className="room-card" data-type="1bed" style={cardStyle(0, "1bed")}>
            <div className="room-image" onClick={() => openRoomModal('room1-modal')} style={{ cursor: "pointer" }}>
              <img src="/Assets/656218827.jpg" alt="King Beds - Non Smoking (NK)" />
              <div className="image-overlay">
                <span className="view-photos">📷 View Details</span>
              </div>
            </div>
            <div className="room-details">
              <h3>King Bed – Non Smoking (NK)</h3>
              <div className="room-specs">
                <span className="spec">🛏️ 1 King Bed</span>
                {" "}
                <span className="spec">🚭 Non-Smoking</span>
                {" "}
                <span className="spec">📐 300 sq ft</span>
                {" "}
                <span className="spec">👥 Max 2 Guests</span>
              </div>
              <div className="room-features">
                <div className="feature-row">
                  <span>• Flat TV</span>
                  {" "}
                  <span>• Coffee maker</span>
                  {" "}
                  <span>• Free WiFi</span>
                  {" "}
                  <span>• Hair Dryer</span>
                  {" "}
                  <span>• Refrigerator</span>
                  {" "}
                  <span>• Iron/Board</span>
                  {" "}
                  <span>• Microwave</span>
                </div>
              </div>
              <button className="room-details-btn" onClick={() => openRoomModal('room1-modal')}>Room Details</button>
            </div>
            <div className="room-pricing">
              <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
          <div className="room-card" data-type="1bed" style={cardStyle(1, "1bed")}>
            <div className="room-image" onClick={() => openRoomModal('room2-modal')} style={{ cursor: "pointer" }}>
              <img src="/Assets/unnamed-16.webp" alt="King Beds - Smoking (K)" />
              <div className="image-overlay">
                <span className="view-photos">📷 View Details</span>
              </div>
            </div>
            <div className="room-details">
              <h3>King Bed – Smoking (K)</h3>
              <div className="room-specs">
                <span className="spec">🛏️ 1 King Bed</span>
                {" "}
                <span className="spec">🚬 Smoking</span>
                {" "}
                <span className="spec">📐 300 sq ft</span>
                {" "}
                <span className="spec">👥 Max 2 Guests</span>
              </div>
              <div className="room-features">
                <div className="feature-row">
                  <span>• Flat TV</span>
                  {" "}
                  <span>• Coffee maker</span>
                  {" "}
                  <span>• Free WiFi</span>
                  {" "}
                  <span>• Hair Dryer</span>
                  {" "}
                  <span>• Refrigerator</span>
                  {" "}
                  <span>• Iron/Board</span>
                  {" "}
                  <span>• Microwave</span>
                </div>
              </div>
              <button className="room-details-btn" onClick={() => openRoomModal('room2-modal')}>Room Details</button>
            </div>
            <div className="room-pricing">
              <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
          <div className="room-card" data-type="handicap" style={cardStyle(2, "handicap")}>
            <div className="room-image" onClick={() => openRoomModal('room3-modal')} style={{ cursor: "pointer" }}>
              <img src="/Assets/unnamed-13.webp" alt="Handicap King Room - Non Smoking (HNK)" />
              <div className="image-overlay">
                <span className="view-photos">📷 View Details</span>
              </div>
            </div>
            <div className="room-details">
              <h3>Handicap King Room – Non Smoking (HNK)</h3>
              <div className="room-specs">
                <span className="spec">🛏️ 1 King Bed</span>
                {" "}
                <span className="spec">♿ Accessible</span>
                {" "}
                <span className="spec">🚭 Non-Smoking</span>
                {" "}
                <span className="spec">📐 300 sq ft</span>
              </div>
              <div className="room-features">
                <div className="feature-row">
                  <span>• Coffee maker</span>
                  {" "}
                  <span>{"• Bathtub, Shampoo & Conditioner"}</span>
                  {" "}
                  <span>{"• Body soap & Flat TV"}</span>
                  {" "}
                  <span>• Hair Dryer</span>
                  {" "}
                  <span>• Refrigerator</span>
                  {" "}
                  <span>• Iron/Board</span>
                </div>
              </div>
              <button className="room-details-btn" onClick={() => openRoomModal('room3-modal')}>Room Details</button>
            </div>
            <div className="room-pricing">
              <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
          <div className="room-card" data-type="suite" style={cardStyle(3, "suite")}>
            <div className="room-image" onClick={() => openRoomModal('room4-modal')} style={{ cursor: "pointer" }}>
              <img src="/Assets/unnamed-21.webp" alt="King Business Suites - Non Smoking (BNK)" />
              <div className="image-overlay">
                <span className="view-photos">📷 View Details</span>
              </div>
            </div>
            <div className="room-details">
              <h3>King Business Suite – Non Smoking (BNK)</h3>
              <div className="room-specs">
                <span className="spec">🛏️ 1 King Bed</span>
                {" "}
                <span className="spec">🚭 Non-Smoking</span>
                {" "}
                <span className="spec">📐 300 sq ft</span>
                {" "}
                <span className="spec">👥 Max 3 Guests</span>
              </div>
              <div className="room-features">
                <div className="feature-row">
                  <span>• Flat TV</span>
                  {" "}
                  <span>• Coffee maker</span>
                  {" "}
                  <span>• Free WiFi</span>
                  {" "}
                  <span>• Hair Dryer</span>
                  {" "}
                  <span>• Refrigerator</span>
                  {" "}
                  <span>• Iron/Board</span>
                  {" "}
                  <span>• Microwave</span>
                </div>
              </div>
              <button className="room-details-btn" onClick={() => openRoomModal('room4-modal')}>Room Details</button>
            </div>
            <div className="room-pricing">
              <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
          <div className="room-card" data-type="2bed" style={cardStyle(4, "2bed")}>
            <div className="room-image" onClick={() => openRoomModal('room5-modal')} style={{ cursor: "pointer" }}>
              <img src="/Assets/656219085.jpg" alt="Two Queen Beds - Non Smoking (NQQ)" />
              <div className="image-overlay">
                <span className="view-photos">📷 View Details</span>
              </div>
            </div>
            <div className="room-details">
              <h3>Two Queen Beds – Non Smoking (NQQ)</h3>
              <div className="room-specs">
                <span className="spec">🛏️ 2 Queen Beds</span>
                {" "}
                <span className="spec">🚭 Non-Smoking</span>
                {" "}
                <span className="spec">📐 300 sq ft</span>
                {" "}
                <span className="spec">👥 Max 4 Guests</span>
              </div>
              <div className="room-features">
                <div className="feature-row">
                  <span>• Flat TV</span>
                  {" "}
                  <span>• Coffee maker</span>
                  {" "}
                  <span>• Free WiFi</span>
                  {" "}
                  <span>• Hair Dryer</span>
                  {" "}
                  <span>• Refrigerator</span>
                  {" "}
                  <span>• Iron/Board</span>
                  {" "}
                  <span>• Microwave</span>
                </div>
              </div>
              <button className="room-details-btn" onClick={() => openRoomModal('room5-modal')}>Room Details</button>
            </div>
            <div className="room-pricing">
              <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
          <div className="room-card" data-type="suite" style={cardStyle(5, "suite")}>
            <div className="room-image" onClick={() => openRoomModal('room6-modal')} style={{ cursor: "pointer" }}>
              <img src="/Assets/unnamed-25.webp" alt="King Business Suites - Smoking (BK)" />
              <div className="image-overlay">
                <span className="view-photos">📷 View Details</span>
              </div>
            </div>
            <div className="room-details">
              <h3>King Business Suite – Smoking (BK)</h3>
              <div className="room-specs">
                <span className="spec">🛏️ 1 King Bed</span>
                {" "}
                <span className="spec">🚬 Smoking</span>
                {" "}
                <span className="spec">📐 300 sq ft</span>
                {" "}
                <span className="spec">👥 Max 3 Guests</span>
              </div>
              <div className="room-features">
                <div className="feature-row">
                  <span>• Flat TV</span>
                  {" "}
                  <span>• Coffee maker</span>
                  {" "}
                  <span>• Free WiFi</span>
                  {" "}
                  <span>• Hair Dryer</span>
                  {" "}
                  <span>• Refrigerator</span>
                  {" "}
                  <span>• Iron/Board</span>
                  {" "}
                  <span>• Microwave</span>
                </div>
              </div>
              <button className="room-details-btn" onClick={() => openRoomModal('room6-modal')}>Room Details</button>
            </div>
            <div className="room-pricing">
              <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
          <div className="room-card" data-type="2bed" style={cardStyle(6, "2bed")}>
            <div className="room-image" onClick={() => openRoomModal('room7-modal')} style={{ cursor: "pointer" }}>
              <img src="/Assets/656219085.jpg" alt="Two Queen Beds - Smoking (QQ)" />
              <div className="image-overlay">
                <span className="view-photos">📷 View Details</span>
              </div>
            </div>
            <div className="room-details">
              <h3>Two Queen Beds – Smoking (QQ)</h3>
              <div className="room-specs">
                <span className="spec">🛏️ 2 Queen Beds</span>
                {" "}
                <span className="spec">🚬 Smoking</span>
                {" "}
                <span className="spec">📐 300 sq ft</span>
                {" "}
                <span className="spec">👥 Max 4 Guests</span>
              </div>
              <div className="room-features">
                <div className="feature-row">
                  <span>• Flat TV</span>
                  {" "}
                  <span>• Coffee maker</span>
                  {" "}
                  <span>• Free WiFi</span>
                  {" "}
                  <span>• Hair Dryer</span>
                  {" "}
                  <span>• Refrigerator</span>
                  {" "}
                  <span>• Iron/Board</span>
                  {" "}
                  <span>• Microwave</span>
                </div>
              </div>
              <button className="room-details-btn" onClick={() => openRoomModal('room7-modal')}>Room Details</button>
            </div>
            <div className="room-pricing">
              <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
          <div className="room-card" data-type="handicap" style={cardStyle(7, "handicap")}>
            <div className="room-image" onClick={() => openRoomModal('room8-modal')} style={{ cursor: "pointer" }}>
              <img src="/Assets/unnamed-13.webp" alt="Handicap Two Queen Beds - Non Smoking (HNQQ)" />
              <div className="image-overlay">
                <span className="view-photos">📷 View Details</span>
              </div>
            </div>
            <div className="room-details">
              <h3>Handicap Two Queen Beds – Non Smoking (HNQQ)</h3>
              <div className="room-specs">
                <span className="spec">🛏️ 2 Queen Beds</span>
                {" "}
                <span className="spec">♿ Accessible</span>
                {" "}
                <span className="spec">🚭 Non-Smoking</span>
                {" "}
                <span className="spec">📐 300 sq ft</span>
              </div>
              <div className="room-features">
                <div className="feature-row">
                  <span>• Flat TV</span>
                  {" "}
                  <span>• Coffee maker</span>
                  {" "}
                  <span>• Free WiFi</span>
                  {" "}
                  <span>• Hair Dryer</span>
                  {" "}
                  <span>• Refrigerator</span>
                  {" "}
                  <span>• Iron/Board</span>
                  {" "}
                  <span>• Microwave</span>
                </div>
              </div>
              <button className="room-details-btn" onClick={() => openRoomModal('room8-modal')}>Room Details</button>
            </div>
            <div className="room-pricing">
              <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
          <div className="room-card" data-type="jacuzzi" style={cardStyle(8, "jacuzzi")}>
            <div className="room-image" onClick={() => openRoomModal('room9-modal')} style={{ cursor: "pointer" }}>
              <img src="/Assets/656218827.jpg" alt="King Jacuzzi - Non Smoking (SNK)" />
              <div className="image-overlay">
                <span className="view-photos">📷 View Details</span>
              </div>
            </div>
            <div className="room-details">
              <h3>King Jacuzzi – Non Smoking (SNK)</h3>
              <div className="room-specs">
                <span className="spec">🛏️ 1 King Bed</span>
                {" "}
                <span className="spec">🛁 Whirlpool / Jetted Tub</span>
                {" "}
                <span className="spec">🚭 Non-Smoking</span>
                {" "}
                <span className="spec">📐 300 sq ft</span>
              </div>
              <div className="room-features">
                <div className="feature-row">
                  <span>• Flat TV</span>
                  {" "}
                  <span>• Coffee maker</span>
                  {" "}
                  <span>• Free WiFi</span>
                  {" "}
                  <span>• Hair Dryer</span>
                  {" "}
                  <span>• Refrigerator</span>
                  {" "}
                  <span>• Iron/Board</span>
                  {" "}
                  <span>• Microwave</span>
                </div>
              </div>
              <button className="room-details-btn" onClick={() => openRoomModal('room9-modal')}>Room Details</button>
            </div>
            <div className="room-pricing">
              <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
          <div className="room-card" data-type="jacuzzi" style={cardStyle(9, "jacuzzi")}>
            <div className="room-image" onClick={() => openRoomModal('room10-modal')} style={{ cursor: "pointer" }}>
              <img src="/Assets/656218830.jpg" alt="King Jacuzzi - Smoking (SK)" />
              <div className="image-overlay">
                <span className="view-photos">📷 View Details</span>
              </div>
            </div>
            <div className="room-details">
              <h3>King Jacuzzi – Smoking (SK)</h3>
              <div className="room-specs">
                <span className="spec">🛏️ 1 King Bed</span>
                {" "}
                <span className="spec">🛁 Whirlpool / Jetted Tub</span>
                {" "}
                <span className="spec">🚬 Smoking</span>
                {" "}
                <span className="spec">📐 300 sq ft</span>
              </div>
              <div className="room-features">
                <div className="feature-row">
                  <span>• Flat TV</span>
                  {" "}
                  <span>• Coffee maker</span>
                  {" "}
                  <span>• Free WiFi</span>
                  {" "}
                  <span>• Hair Dryer</span>
                  {" "}
                  <span>• Refrigerator</span>
                  {" "}
                  <span>• Iron/Board</span>
                  {" "}
                  <span>• Microwave</span>
                </div>
              </div>
              <button className="room-details-btn" onClick={() => openRoomModal('room10-modal')}>Room Details</button>
            </div>
            <div className="room-pricing">
              <button className="book-room-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
  <div className="modal-overlay" id="room1-modal" onClick={(event) => { overlayClose(event, 'room1-modal'); }} style={openModal === 'room1-modal' ? { display: 'block' } : undefined}>
        <div className="room-modal">
          <button className="modal-close-btn" onClick={() => closeModal('room1-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room1-img" alt="Room" src={slides.room1?.src ?? "/Assets/656218827.jpg"} style={slides.room1 ? { opacity: slides.room1.opacity } : undefined} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room1', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room1', 1)}>›</button>
              <div className="modal-image-caption">Guest room with one king bed | Hollister Inn, Hollister CA</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>King Bed – Non Smoking (NK)</h3>
            <p className="modal-bed-info">1 King Bed • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Max 2 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🛏️</div>
                <span>1 King Bed</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚭</div>
                <span>Non-Smoking</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Amenities</h4>
              <h5>Room</h5>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🍽️</div>
                  <span>Microwave</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">☕</div>
                  <span>Coffee maker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🖥️</div>
                  <span>Ergonomic desk</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">❄️</div>
                  <span>Refrigerator</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">💨</div>
                  <span>Hair Dryer</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">👔</div>
                  <span>Iron and Ironing Board</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📶</div>
                  <span>Free WiFi</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📺</div>
                  <span>Flat TV</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🌟</div>
                  <span>Premium channels</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
  <div className="modal-overlay" id="room2-modal" onClick={(event) => { overlayClose(event, 'room2-modal'); }} style={openModal === 'room2-modal' ? { display: 'block' } : undefined}>
        <div className="room-modal">
          <button className="modal-close-btn" onClick={() => closeModal('room2-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room2-img" alt="Room" src={slides.room2?.src ?? "/Assets/unnamed-16.webp"} style={slides.room2 ? { opacity: slides.room2.opacity } : undefined} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room2', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room2', 1)}>›</button>
              <div className="modal-image-caption">King bed smoking room | Hollister Inn, Hollister CA</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>King Bed – Smoking (K)</h3>
            <p className="modal-bed-info">1 King Bed • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Max 2 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🛏️</div>
                <span>1 King Bed</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚬</div>
                <span>Smoking</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Amenities</h4>
              <h5>Room</h5>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">☕</div>
                  <span>Coffee maker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🖥️</div>
                  <span>Ergonomic desk</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📶</div>
                  <span>Free WiFi</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📺</div>
                  <span>Flat TV</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">❄️</div>
                  <span>Refrigerator</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">💨</div>
                  <span>Hair Dryer</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">👔</div>
                  <span>Iron and Ironing Board</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🌟</div>
                  <span>Premium channels</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🚬</div>
                  <span>Smoking allowed</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🍽️</div>
                  <span>Microwave</span>
                </div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
  <div className="modal-overlay" id="room3-modal" onClick={(event) => { overlayClose(event, 'room3-modal'); }} style={openModal === 'room3-modal' ? { display: 'block' } : undefined}>
        <div className="room-modal">
          <button className="modal-close-btn" onClick={() => closeModal('room3-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room3-img" alt="Room" src={slides.room3?.src ?? "/Assets/unnamed-13.webp"} style={slides.room3 ? { opacity: slides.room3.opacity } : undefined} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room3', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room3', 1)}>›</button>
              <div className="modal-image-caption">Handicap King room | Hollister Inn, Hollister CA</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>Handicap King Room – Non Smoking (HNK)</h3>
            <p className="modal-bed-info">1 King Bed • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Max 2 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">♿</div>
                <span>Accessible</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚭</div>
                <span>Non-Smoking</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Amenities</h4>
              <h5>Room</h5>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧴</div>
                  <span>{"Body soap & shampoo"}</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🌟</div>
                  <span>Premium channels</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">❄️</div>
                  <span>Refrigerator</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">💨</div>
                  <span>Hair Dryer</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">👔</div>
                  <span>Iron and Ironing Board</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🛁</div>
                  <span>Accessible Bathtub with Bench</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">♿</div>
                  <span>Wheelchair accessible</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🍽️</div>
                  <span>Microwave</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">☕</div>
                  <span>Coffee maker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🤲</div>
                  <span>Grab bars</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📶</div>
                  <span>Free WiFi</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📺</div>
                  <span>Flat TV</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
  <div className="modal-overlay" id="room4-modal" onClick={(event) => { overlayClose(event, 'room4-modal'); }} style={openModal === 'room4-modal' ? { display: 'block' } : undefined}>
        <div className="room-modal">
          <button className="modal-close-btn" onClick={() => closeModal('room4-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room4-img" alt="Room" src={slides.room4?.src ?? "/Assets/unnamed-21.webp"} style={slides.room4 ? { opacity: slides.room4.opacity } : undefined} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room4', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room4', 1)}>›</button>
              <div className="modal-image-caption">King Business Suite – Non Smoking | Hollister Inn, Hollister CA</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>King Business Suite – Non Smoking (BNK)</h3>
            <p className="modal-bed-info">1 King Bed • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Max 3 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🛏️</div>
                <span>1 King Bed</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚭</div>
                <span>Non-Smoking</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Amenities</h4>
              <h5>Room</h5>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">☕</div>
                  <span>Coffee maker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🖥️</div>
                  <span>Ergonomic desk</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📶</div>
                  <span>Free WiFi</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">❄️</div>
                  <span>Refrigerator</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">💨</div>
                  <span>Hair Dryer</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">👔</div>
                  <span>Iron and Ironing Board</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📺</div>
                  <span>Flat TV</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🌟</div>
                  <span>Premium channels</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🍽️</div>
                  <span>Microwave</span>
                </div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
  <div className="modal-overlay" id="room5-modal" onClick={(event) => { overlayClose(event, 'room5-modal'); }} style={openModal === 'room5-modal' ? { display: 'block' } : undefined}>
        <div className="room-modal">
          <button className="modal-close-btn" onClick={() => closeModal('room5-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room5-img" alt="Room" src={slides.room5?.src ?? "/Assets/656219085.jpg"} style={slides.room5 ? { opacity: slides.room5.opacity } : undefined} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room5', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room5', 1)}>›</button>
              <div className="modal-image-caption">Two Queen Beds – Non Smoking | Hollister Inn, Hollister CA</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>Two Queen Beds – Non Smoking (NQQ)</h3>
            <p className="modal-bed-info">2 Queen Beds • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Max 4 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🛏️</div>
                <span>2 Queen Beds</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚭</div>
                <span>Non-Smoking</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Amenities</h4>
              <h5>Room</h5>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">☕</div>
                  <span>Coffee maker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🖥️</div>
                  <span>Work desk</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📶</div>
                  <span>Free WiFi</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📺</div>
                  <span>Flat TV</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">❄️</div>
                  <span>Refrigerator</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">💨</div>
                  <span>Hair Dryer</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">👔</div>
                  <span>Iron and Ironing Board</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🌟</div>
                  <span>Premium channels</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🍽️</div>
                  <span>Microwave</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
  <div className="modal-overlay" id="room6-modal" onClick={(event) => { overlayClose(event, 'room6-modal'); }} style={openModal === 'room6-modal' ? { display: 'block' } : undefined}>
        <div className="room-modal">
          <button className="modal-close-btn" onClick={() => closeModal('room6-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room6-img" alt="Room" src={slides.room6?.src ?? "/Assets/unnamed-25.webp"} style={slides.room6 ? { opacity: slides.room6.opacity } : undefined} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room6', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room6', 1)}>›</button>
              <div className="modal-image-caption">King Business Suite – Smoking | Hollister Inn, Hollister CA</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>King Business Suite – Smoking (BK)</h3>
            <p className="modal-bed-info">1 King Bed • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Max 3 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🛏️</div>
                <span>1 King Bed</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚬</div>
                <span>Smoking</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Amenities</h4>
              <h5>Room</h5>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">☕</div>
                  <span>Coffee maker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🍽️</div>
                  <span>Microwave</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🌟</div>
                  <span>Premium channels</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">❄️</div>
                  <span>Refrigerator</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">💨</div>
                  <span>Hair Dryer</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">👔</div>
                  <span>Iron and Ironing Board</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📺</div>
                  <span>Flat TV</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📶</div>
                  <span>Free WiFi</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🚬</div>
                  <span>Smoking allowed</span>
                </div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
  <div className="modal-overlay" id="room7-modal" onClick={(event) => { overlayClose(event, 'room7-modal'); }} style={openModal === 'room7-modal' ? { display: 'block' } : undefined}>
        <div className="room-modal">
          <button className="modal-close-btn" onClick={() => closeModal('room7-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room7-img" alt="Room" src={slides.room7?.src ?? "/Assets/656219085.jpg"} style={slides.room7 ? { opacity: slides.room7.opacity } : undefined} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room7', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room7', 1)}>›</button>
              <div className="modal-image-caption">Two Queen Beds – Smoking | Hollister Inn, Hollister CA</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>Two Queen Beds – Smoking (QQ)</h3>
            <p className="modal-bed-info">2 Queen Beds • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Max 4 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🛏️</div>
                <span>2 Queen Beds</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚬</div>
                <span>Smoking</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Amenities</h4>
              <h5>Room</h5>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">☕</div>
                  <span>Coffee maker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🖥️</div>
                  <span>Work desk</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📶</div>
                  <span>Free WiFi</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📺</div>
                  <span>Flat TV</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">❄️</div>
                  <span>Refrigerator</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">💨</div>
                  <span>Hair Dryer</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">👔</div>
                  <span>Iron and Ironing Board</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🌟</div>
                  <span>Premium channels</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🚬</div>
                  <span>Smoking allowed</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🍽️</div>
                  <span>Microwave</span>
                </div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
  <div className="modal-overlay" id="room8-modal" onClick={(event) => { overlayClose(event, 'room8-modal'); }} style={openModal === 'room8-modal' ? { display: 'block' } : undefined}>
        <div className="room-modal">
          <button className="modal-close-btn" onClick={() => closeModal('room8-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room8-img" alt="Room" src={slides.room8?.src ?? "/Assets/unnamed-13.webp"} style={slides.room8 ? { opacity: slides.room8.opacity } : undefined} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room8', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room8', 1)}>›</button>
              <div className="modal-image-caption">Handicap Two Queen Beds – Non Smoking | Hollister Inn, Hollister CA</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>Handicap Two Queen Beds – Non Smoking (HNQQ)</h3>
            <p className="modal-bed-info">2 Queen Beds • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Max 4 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">♿</div>
                <span>Accessible</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚭</div>
                <span>Non-Smoking</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Amenities</h4>
              <h5>Room</h5>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">♿</div>
                  <span>Wheelchair accessible</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🤲</div>
                  <span>Grab bars</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🛁</div>
                  <span>Accessible Bathtub with Bench</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🍽️</div>
                  <span>Microwave</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🌟</div>
                  <span>Premium channels</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">❄️</div>
                  <span>Refrigerator</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">💨</div>
                  <span>Hair Dryer</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">👔</div>
                  <span>Iron and Ironing Board</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">☕</div>
                  <span>Coffee maker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📺</div>
                  <span>Flat TV</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📶</div>
                  <span>Free WiFi</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
  <div className="modal-overlay" id="room9-modal" onClick={(event) => { overlayClose(event, 'room9-modal'); }} style={openModal === 'room9-modal' ? { display: 'block' } : undefined}>
        <div className="room-modal">
          <button className="modal-close-btn" onClick={() => closeModal('room9-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room9-img" alt="Room" src={slides.room9?.src ?? "/Assets/656218827.jpg"} style={slides.room9 ? { opacity: slides.room9.opacity } : undefined} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room9', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room9', 1)}>›</button>
              <div className="modal-image-caption">King Jacuzzi – Non Smoking | Hollister Inn, Hollister CA</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>King Jacuzzi – Non Smoking (SNK)</h3>
            <p className="modal-bed-info">1 King Bed • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Max 2 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🛁</div>
                <span>Whirlpool / Jetted Tub</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚭</div>
                <span>Non-Smoking</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Amenities</h4>
              <h5>Room</h5>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">☕</div>
                  <span>Coffee maker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📶</div>
                  <span>Free WiFi</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">❄️</div>
                  <span>Refrigerator</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">💨</div>
                  <span>Hair Dryer</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">👔</div>
                  <span>Iron and Ironing Board</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📺</div>
                  <span>Flat TV</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🌟</div>
                  <span>Premium channels</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🍽️</div>
                  <span>Microwave</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
  <div className="modal-overlay" id="room10-modal" onClick={(event) => { overlayClose(event, 'room10-modal'); }} style={openModal === 'room10-modal' ? { display: 'block' } : undefined}>
        <div className="room-modal">
          <button className="modal-close-btn" onClick={() => closeModal('room10-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room10-img" alt="Room" src={slides.room10?.src ?? "/Assets/656218830.jpg"} style={slides.room10 ? { opacity: slides.room10.opacity } : undefined} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room10', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room10', 1)}>›</button>
              <div className="modal-image-caption">King Jacuzzi – Smoking | Hollister Inn, Hollister CA</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>King Jacuzzi – Smoking (SK)</h3>
            <p className="modal-bed-info">1 King Bed • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Max 2 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🛁</div>
                <span>Whirlpool / Jetted Tub</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚬</div>
                <span>Smoking</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Amenities</h4>
              <h5>Room</h5>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🚬</div>
                  <span>Smoking allowed</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🧥</div>
                  <span>Clothes Hangers</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">❄️</div>
                  <span>Refrigerator</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">💨</div>
                  <span>Hair Dryer</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">👔</div>
                  <span>Iron and Ironing Board</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📺</div>
                  <span>Flat TV</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🌟</div>
                  <span>Premium channels</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">📶</div>
                  <span>Free WiFi</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🔊</div>
                  <span>Bluetooth speaker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">☕</div>
                  <span>Coffee maker</span>
                </div>
                <div className="modal-amenity-item">
                  <div className="modal-amenity-icon">🍽️</div>
                  <span>Microwave</span>
                </div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
