import { bookNow } from '../../config/hotel';
import { useState } from 'react';

export default function Modals({ openModalId, closeModal }) {
  // ===== ROOM IMAGE SLIDERS (Real Hollister Inn Photos) =====
  const roomImages = {
    room1: [
      '/Assets/656218827.jpg',
      '/Assets/656218830.jpg',
      '/Assets/unnamed-16.webp',
      '/Assets/unnamed-17.webp',
      '/Assets/unnamed-21.webp',
      '/Assets/unnamed-25.webp',
      '/Assets/unnamed-26.webp',
      '/Assets/unnamed-30.webp',
      '/Assets/656218982.jpg',
      '/Assets/unnamed-1.webp',
    ],
    room2: [
      '/Assets/unnamed-16.webp',
      '/Assets/unnamed-17.webp',
      '/Assets/unnamed-21.webp',
      '/Assets/unnamed-25.webp',
      '/Assets/unnamed-26.webp',
      '/Assets/656218827.jpg',
      '/Assets/656218830.jpg',
      '/Assets/656218982.jpg',
      '/Assets/unnamed-14.webp',
    ],
    room3: [
      '/Assets/656219085.jpg',
      '/Assets/unnamed-15.webp',
      '/Assets/unnamed-14.webp',
      '/Assets/unnamed-27.webp',
      '/Assets/unnamed-23.webp',
      '/Assets/unnamed-30.webp',
    ],
  };

  const [roomIndexes, setRoomIndexes] = useState({ room1: 0, room2: 0, room3: 0 });

  const modalSlide = (room, dir) => {
    const len = roomImages[room].length;
    setRoomIndexes((idx) => ({ ...idx, [room]: (idx[room] + dir + len) % len }));
  };

  const roomSrc = (room) => roomImages[room][roomIndexes[room]];

  return (
    <>
      {/* Read More Modal */}
      <div id="readmore-modal" onClick={() => closeModal('readmore-modal')} className={'modal-overlay' + (openModalId === 'readmore-modal' ? ' open' : '')}>
        <div className="room-modal readmore-modal" onClick={(event) => { event.stopPropagation(); }}>
          <button className="modal-close-btn" onClick={() => closeModal('readmore-modal')}>✕</button>
          <div className="modal-header readmore-header">
            <p className="readmore-top-title">About the hotel</p>
            <h2>Book your stay at Hollister Inn, Hollister CA</h2>
          </div>
          <div className="readmore-body">
            <p>
              Hollister Inn offers a comfortable and affordable stay at 152 San Felipe Road in Hollister, California, conveniently located just 700 meters from the centre of Hollister. Guests enjoy easy access to nearby shopping, local restaurants, and San Benito County attractions including Mission San Juan Bautista, Pinnacles National Park, and Hollister Hills State Vehicular Recreation Area.
            </p>
            <p>
              Designed for convenience and relaxation, the hotel features an outdoor swimming pool (infinity pool, open all year, all ages welcome), free on-site public parking, complimentary high-speed WiFi in all areas, and an outdoor courtyard with BBQ facilities and picnic area. A 24-hour front desk is always available to assist with express check-in/check-out and local recommendations.
            </p>
            <p>
              Each guest room is equipped with modern conveniences including air conditioning, private bathroom with bathtub or shower, refrigerator, microwave, tea and coffee maker, flat-screen TV with cable channels, hair dryer, alarm clock, and clothes rack.
            </p>
            <div className="readmore-love-box">
              <h3>Things You’ll Love</h3>
              <div className="readmore-love-grid">
                <div className="love-item">
                  <span className="love-check">✓</span>
                  <span>700 m from the centre of Hollister</span>
                </div>
                <div className="love-item">
                  <span className="love-check">✓</span>
                  <span>Outdoor swimming pool (open all year)</span>
                </div>
                <div className="love-item">
                  <span className="love-check">✓</span>
                  <span>Free on-site parking (no reservation required)</span>
                </div>
                <div className="love-item">
                  <span className="love-check">✓</span>
                  <span>BBQ facilities & outdoor patio picnic area</span>
                </div>
                <div className="love-item">
                  <span className="love-check">✓</span>
                  <span>Tea/coffee maker in all guest rooms</span>
                </div>
                <div className="love-item">
                  <span className="love-check">✓</span>
                  <span>Near Pinnacles National Park & Mission San Juan Bautista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room 1 Modal */}
      <div id="room1-modal" onClick={() => closeModal('room1-modal')} className={'modal-overlay' + (openModalId === 'room1-modal' ? ' open' : '')}>
        <div className="room-modal" onClick={(event) => { event.stopPropagation(); }}>
          <button className="modal-close-btn" onClick={() => closeModal('room1-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image" id="room1-img-wrap">
              <img id="room1-img" alt="King Bed Room" src={roomSrc('room1')} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room1', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room1', 1)}>›</button>
              <div className="modal-image-caption">King Bed – Non Smoking (Double)</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>King Bed – Non Smoking (NK)</h3>
            <p className="modal-bed-info">1 King Bed • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>2 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🚭</div>
                <span>Non-Smoking</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Room Amenities</h4>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🚿</div><span>Private Bathroom & Shower</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">📺</div><span>Flat-screen TV & Cable Channels</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🖥️</div><span>Desk & Office Chair</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">❄️</div><span>Refrigerator</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🍽️</div><span>Microwave</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">☕</div><span>Tea / Coffee Maker</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">💨</div><span>Hair Dryer</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">👔</div><span>Iron & Ironing Facilities</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">📶</div><span>Free High-Speed WiFi</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">⏰</div><span>Alarm Clock</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🧥</div><span>Clothes Rack</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">❄️</div><span>Air Conditioning & Heating</span></div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Room 2 Modal */}
      <div id="room2-modal" onClick={(event) => { if (event.target === event.currentTarget) closeModal('room2-modal'); }} className={'modal-overlay' + (openModalId === 'room2-modal' ? ' open' : '')}>
        <div className="room-modal" onClick={(event) => { event.stopPropagation(); }}>
          <button className="modal-close-btn" onClick={() => closeModal('room2-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room2-img" alt="King Bed Room with Seating Area" src={roomSrc('room2')} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room2', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room2', 1)}>›</button>
              <div className="modal-image-caption">King Bed with Sitting Area (Double)</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>King Bed with Sitting Area (K)</h3>
            <p className="modal-bed-info">1 King Bed • 1 Room</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>2 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🛋️</div>
                <span>Lounge Sofa</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">📐</div>
                <span>300 sq ft</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Room Amenities</h4>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🚿</div><span>Private Bathroom & Bath</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">📺</div><span>Flat-screen TV & Cable</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">☕</div><span>Coffee / Tea Maker</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🍽️</div><span>Microwave</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">❄️</div><span>Refrigerator</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">💨</div><span>Hair Dryer</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">👔</div><span>Iron & Ironing Facilities</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">📶</div><span>Free High-Speed WiFi</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">⏰</div><span>Alarm Clock</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🧥</div><span>Clothes Rack</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">❄️</div><span>Air Conditioning & Heating</span></div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Room 3 Modal */}
      <div id="room3-modal" onClick={() => closeModal('room3-modal')} className={'modal-overlay' + (openModalId === 'room3-modal' ? ' open' : '')}>
        <div className="room-modal" onClick={(event) => { event.stopPropagation(); }}>
          <button className="modal-close-btn" onClick={() => closeModal('room3-modal')}>✕</button>
          <div className="modal-header">
            <h2>Room Details</h2>
          </div>
          <div className="modal-image-section">
            <div className="modal-main-image">
              <img id="room3-img" alt="Two Queen Beds Room" src={roomSrc('room3')} />
              {" "}
              <button className="modal-nav-btn modal-prev" onClick={() => modalSlide('room3', -1)}>‹</button>
              {" "}
              <button className="modal-nav-btn modal-next" onClick={() => modalSlide('room3', 1)}>›</button>
              <div className="modal-image-caption">Two Queen Beds – Family Room (QQ)</div>
            </div>
          </div>
          <div className="modal-info-section">
            <h3>Two Queen Beds – Family Room (QQ)</h3>
            <p className="modal-bed-info">2 Queen Beds • Up to 4 Guests</p>
            <div className="modal-features">
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👥</div>
                <span>Up to 4 Guests</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">🛏️</div>
                <span>2 Queen Beds</span>
              </div>
              <div className="modal-feature-item">
                <div className="modal-feature-icon">👨‍👩‍👧</div>
                <span>Family Friendly</span>
              </div>
            </div>
            <div className="modal-amenities-section">
              <h4>Room Amenities</h4>
              <div className="modal-amenities-grid">
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🚿</div><span>Private Bathroom & Bath/Shower</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">📺</div><span>Flat-screen TV with Cable Channels</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🖥️</div><span>Desk & Large Mirror</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">☕</div><span>Coffee / Tea Maker</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🍽️</div><span>Microwave</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">❄️</div><span>Refrigerator</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">💨</div><span>Hair Dryer</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">👔</div><span>Iron & Ironing Facilities</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">📶</div><span>Free High-Speed WiFi</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">⏰</div><span>Alarm Clock</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">🧥</div><span>Clothes Rack</span></div>
                <div className="modal-amenity-item"><div className="modal-amenity-icon">❄️</div><span>Air Conditioning & Soundproofing</span></div>
              </div>
            </div>
            <div className="modal-pricing">
              <button className="modal-book-btn" onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities of Hollister Inn Modal (Screenshot 1) */}
      <div id="amenities-modal" onClick={() => closeModal('amenities-modal')} className={'modal-overlay' + (openModalId === 'amenities-modal' ? ' open' : '')}>
        <div className="room-modal" onClick={(event) => { event.stopPropagation(); }} style={{ maxWidth: '820px', maxHeight: '90vh', overflowY: 'auto' }}>
          <button className="modal-close-btn" onClick={() => closeModal('amenities-modal')}>✕</button>
          <div className="modal-header">
            <h2>Facilities of Hollister Inn</h2>
          </div>
          <div className="modal-info-section" style={{ padding: '24px' }}>
            {/* Most popular */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a' }}>Most popular facilities</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ background: '#eaf4ff', color: '#006ce4', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>🏊 Outdoor swimming pool</span>
                <span style={{ background: '#eaf4ff', color: '#006ce4', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>🅿️ Free parking</span>
                <span style={{ background: '#eaf4ff', color: '#006ce4', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>🚭 Non-smoking rooms</span>
                <span style={{ background: '#eaf4ff', color: '#006ce4', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>♿ Facilities for disabled guests</span>
                <span style={{ background: '#eaf4ff', color: '#006ce4', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>📶 Free WiFi</span>
                <span style={{ background: '#eaf4ff', color: '#006ce4', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>👨‍👩‍👧 Family rooms</span>
                <span style={{ background: '#eaf4ff', color: '#006ce4', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}>☕ Tea/coffee maker in all rooms</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              {/* Great for your stay */}
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '10px' }}>⭐ Great for your stay</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13.5px', color: '#444', lineHeight: '1.8' }}>
                  <li>✓ Private bathroom</li>
                  <li>✓ Parking on site</li>
                  <li>✓ Air conditioning</li>
                  <li>✓ Bath or shower</li>
                  <li>✓ Free WiFi</li>
                  <li>✓ Family rooms</li>
                  <li>✓ Flat-screen TV</li>
                  <li>✓ Free parking</li>
                  <li>✓ BBQ facilities</li>
                  <li>✓ Facilities for disabled guests</li>
                </ul>
              </div>

              {/* Bathroom */}
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '10px' }}>🚿 Bathroom</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13.5px', color: '#444', lineHeight: '1.8' }}>
                  <li>✓ Toilet paper</li>
                  <li>✓ Towels</li>
                  <li>✓ Bath or shower</li>
                  <li>✓ Shared toilet</li>
                  <li>✓ Private bathroom</li>
                  <li>✓ Toilet</li>
                  <li>✓ Hairdryer</li>
                  <li>✓ Bath</li>
                </ul>
              </div>

              {/* Media & Kitchen */}
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '10px' }}>📺 Media & Kitchen</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13.5px', color: '#444', lineHeight: '1.8' }}>
                  <li>✓ Flat-screen TV</li>
                  <li>✓ Cable channels</li>
                  <li>✓ DVD player</li>
                  <li>✓ Coffee machine</li>
                  <li>✓ Microwave</li>
                  <li>✓ Refrigerator</li>
                  <li>✓ Tumble dryer</li>
                  <li>✓ Telephone & Fax</li>
                </ul>
              </div>

              {/* Outdoor & Pool */}
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '10px' }}>🏊 Outdoor Swimming Pool</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13.5px', color: '#444', lineHeight: '1.8' }}>
                  <li>✓ Infinity pool</li>
                  <li>✓ Open all year</li>
                  <li>✓ All ages welcome</li>
                  <li>✓ Opening times</li>
                  <li>✓ BBQ facilities & patio</li>
                </ul>
              </div>

              {/* Services & Security */}
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '10px' }}>🛎️ Services & Security</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13.5px', color: '#444', lineHeight: '1.8' }}>
                  <li>✓ 24-hour front desk</li>
                  <li>✓ Daily housekeeping</li>
                  <li>✓ Express check-in/out</li>
                  <li>✓ Concierge service</li>
                  <li>✓ Wake-up service</li>
                  <li>✓ Vending machine (snacks)</li>
                  <li>✓ Vending machine (drinks)</li>
                  <li>✓ CCTV outside property</li>
                  <li>✓ Fire extinguishers & smoke alarms</li>
                </ul>
              </div>

              {/* Accessibility */}
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '10px' }}>♿ Accessibility</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13.5px', color: '#444', lineHeight: '1.8' }}>
                  <li>✓ Wheelchair accessible units</li>
                  <li>✓ Entire unit on ground floor</li>
                  <li>✓ Lower bathroom sink</li>
                  <li>✓ Raised toilet</li>
                  <li>✓ Toilet with grab rails</li>
                  <li>✓ Upper floors by stairs only</li>
                </ul>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #eee', marginTop: '20px', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>🗣️ Languages spoken: </span>
                <span style={{ fontSize: '14px', color: '#555' }}>English</span>
              </div>
              <button className="modal-book-btn" style={{ padding: '8px 24px' }} onClick={() => bookNow()}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
