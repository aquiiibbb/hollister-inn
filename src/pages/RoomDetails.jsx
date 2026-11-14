import { useEffect, useState } from 'react';
import { bookNow } from '../config/hotel';
import usePageStyle from '../hooks/usePageStyle';
import css from '../styles/book.css?raw';

const images = [
  '/Assets/656218827.jpg',
  '/Assets/656218830.jpg',
  '/Assets/unnamed-16.webp',
  '/Assets/unnamed-17.webp',
  '/Assets/unnamed-21.webp',
  '/Assets/656218982.jpg',
];

export default function RoomDetails() {
  usePageStyle(css, 'Room Details – Hollister Inn');

  const [index, setIndex] = useState(0);
  const [closed, setClosed] = useState(false);

  const nextImage = () => setIndex((i) => (i + 1) % images.length);
  const previousImage = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const closeRoomDetails = () => setClosed(true);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') previousImage();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'Escape') closeRoomDetails();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="room-details-container" style={closed ? { display: "none" } : undefined}>
        <div className="room-header-section">
          <h1 className="room-main-title">Room Details</h1>
          <button className="room-close-button" onClick={() => closeRoomDetails()} aria-label="Close">×</button>
        </div>
        <div className="room-image-carousel">
          <img alt="Hotel Room" className="room-image" src={images[index]} />
          {" "}
          <button className="carousel-nav-button carousel-prev" onClick={() => previousImage()}>‹</button>
          {" "}
          <button className="carousel-nav-button carousel-next" onClick={() => nextImage()}>›</button>
          <div className="room-image-caption">Guest room with one king bed and added amenities | Hollister Inn, Hollister CA</div>
        </div>
        <div className="room-content-area">
          <h2 className="room-type-title">1 King Bed, Non-Smoking (Double)</h2>
          <p className="room-bed-info">1 King Bed • 1 Room</p>
          <div className="room-features-grid">
            <div className="room-feature-item">
              <div className="room-feature-icon icon-purple">👥</div>
              <div className="room-feature-text">2 Guests</div>
            </div>
            <div className="room-feature-item">
              <div className="room-feature-icon icon-red">🚭</div>
              <div className="room-feature-text">Non-Smoking</div>
            </div>
            <div className="room-feature-item">
              <div className="room-feature-icon icon-gray">📐</div>
              <div className="room-feature-text">300 sq ft</div>
            </div>
          </div>
          <h3 className="amenities-section-title">Amenities</h3>
          <h4 className="amenities-category-title">Room Features</h4>
          <div className="amenities-grid">
            <div className="amenity-card">
              <div className="amenity-icon icon-blue">🚿</div>
              <div className="amenity-name">Private Bath / Shower</div>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon icon-blue">📺</div>
              <div className="amenity-name">Flat-Screen TV</div>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon icon-blue">📡</div>
              <div className="amenity-name">Cable Channels</div>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon icon-blue">💻</div>
              <div className="amenity-name">Desk with Electrical Outlet</div>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon icon-blue">❄️</div>
              <div className="amenity-name">Refrigerator</div>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon icon-pink">💨</div>
              <div className="amenity-name">Hair Dryer</div>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon icon-blue">👔</div>
              <div className="amenity-name">Iron and Ironing Board</div>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon icon-pink">🍽️</div>
              <div className="amenity-name">Microwave</div>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon icon-orange">☕</div>
              <div className="amenity-name">Coffee / Tea Maker</div>
            </div>
            <div className="amenity-card">
              <div className="amenity-icon icon-green">📶</div>
              <div className="amenity-name">Free High-Speed WiFi</div>
            </div>
          </div>
          <p className="cost-disclaimer">*Free on-site parking included</p>
          <button className="book-now-button" onClick={() => bookNow()}>Book Now</button>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    </>
  );
}
