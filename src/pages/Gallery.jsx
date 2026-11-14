import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePageStyle from '../hooks/usePageStyle';
import css from '../styles/gallery.css?raw';

// ===== AUTHENTIC HOLLISTER INN GALLERY IMAGES (All 38 Photos) =====
const imageData = [
  { id: '30728994', ext: 'jpg', caption: 'Hollister Inn Welcome Sign & Front Driveway', category: 'Exterior' },
  { id: '656218827', ext: 'jpg', caption: 'King Bed with Sitting Sofa & Warm Lighting', category: 'Rooms & Suites' },
  { id: '656218830', ext: 'jpg', caption: 'King Bed with Dark Wood Headboard & Nightstands', category: 'Rooms & Suites' },
  { id: '656218982', ext: 'jpg', caption: 'Private Bathroom with Bath, Shower & Fresh Towel Rack', category: 'Rooms & Suites' },
  { id: '656219085', ext: 'jpg', caption: 'Two Queen Beds Family Room with Desk & Flat-Screen TV', category: 'Rooms & Suites' },
  { id: '904328424', ext: 'jpg', caption: 'Outdoor Swimming Pool & Sundeck (Open All Year)', category: 'Pool & Amenities' },
  { id: 'unnamed-1', ext: 'webp', caption: 'Granite Vanity Counter, Hairdryer & Private Bath', category: 'Rooms & Suites' },
  { id: 'unnamed-2', ext: 'webp', caption: 'Aerial Drone View of Hollister Inn & Parking Lot', category: 'Exterior' },
  { id: 'unnamed-3', ext: 'webp', caption: 'Iconic Front Marquee Sign & Portico Entrance', category: 'Exterior' },
  { id: 'unnamed-4', ext: 'webp', caption: 'Breakfast Dining Area with Coffee Bar & Arched Window', category: 'Lobby & Dining' },
  { id: 'unnamed-5', ext: 'webp', caption: 'Two-Story Guest Wing & On-Site Parking', category: 'Exterior' },
  { id: 'unnamed-6', ext: 'webp', caption: 'Covered Drive-Up Entrance with Floral Planters', category: 'Exterior' },
  { id: 'unnamed-7', ext: 'webp', caption: 'Breakfast Lounge Table Setup & Morning Amenities', category: 'Lobby & Dining' },
  { id: 'unnamed-8', ext: 'webp', caption: 'Front Sign with US Flag & Rock Water Fountain', category: 'Exterior' },
  { id: 'unnamed-9', ext: 'webp', caption: '24-Hour Front Desk Reception Counter & Lobby Decor', category: 'Lobby & Dining' },
  { id: 'unnamed-10', ext: 'webp', caption: 'Front Courtyard Flower Garden Landscaping', category: 'Exterior' },
  { id: 'unnamed-11', ext: 'webp', caption: 'Sunny Exterior Guest Rooms & Free Parking View', category: 'Exterior' },
  { id: 'unnamed-12', ext: 'webp', caption: 'California Floral Landscaping & Mediterranean Facade', category: 'Exterior' },
  { id: 'unnamed-13', ext: 'webp', caption: 'Ground Floor Guest Room Entrances with Parking in Front', category: 'Exterior' },
  { id: 'unnamed-14', ext: 'webp', caption: 'Guest Bathroom with Bath Tub, Shower & Rolled Towels', category: 'Rooms & Suites' },
  { id: 'unnamed-15', ext: 'webp', caption: 'Granite Countertop Vanity Sink & Toiletries', category: 'Rooms & Suites' },
  { id: 'unnamed-16', ext: 'webp', caption: 'King Bed with Burgundy Bedding & Sitting Table', category: 'Rooms & Suites' },
  { id: 'unnamed-17', ext: 'webp', caption: 'King Room Flat-Screen TV, Dresser & Entryway', category: 'Rooms & Suites' },
  { id: 'unnamed-18', ext: 'webp', caption: 'Illuminated Hollister Inn Landmark Sign & Office', category: 'Exterior' },
  { id: 'unnamed-19', ext: 'webp', caption: 'Hotel Exterior & Parking Courtyard Illuminated at Night', category: 'Exterior' },
  { id: 'unnamed-20', ext: 'webp', caption: 'Evening Exterior View of Guest Room Entrances', category: 'Exterior' },
  { id: 'unnamed-21', ext: 'webp', caption: 'Spacious King Room with Workstation, Mirror & TV', category: 'Rooms & Suites' },
  { id: 'unnamed-22', ext: 'webp', caption: 'Outdoor BBQ Facilities, Patio Seating & Wishing Well', category: 'Pool & Amenities' },
  { id: 'unnamed-23', ext: 'webp', caption: 'Wall-Mounted Hairdryer & Bathroom Fixtures', category: 'Rooms & Suites' },
  { id: 'unnamed-24', ext: 'webp', caption: 'Front Lobby Desk & Area Travel Guide Stand', category: 'Lobby & Dining' },
  { id: 'unnamed-25', ext: 'webp', caption: 'Room Workstation with Chair, TV, Microwave & Fridge', category: 'Rooms & Suites' },
  { id: 'unnamed-26', ext: 'webp', caption: 'Comfortable In-Room Lounge Sofa Seating', category: 'Rooms & Suites' },
  { id: 'unnamed-27', ext: 'webp', caption: 'Room Entertainment Unit, Desk & Bedroom Area', category: 'Rooms & Suites' },
  { id: 'unnamed-28', ext: 'webp', caption: 'Exterior Courtyard & Upper Floor Balcony Walkway', category: 'Exterior' },
  { id: 'unnamed-29', ext: 'webp', caption: 'Upper Exterior Balcony Walkway with Guest Seating', category: 'Exterior' },
  { id: 'unnamed-30', ext: 'webp', caption: 'Dresser, Flat-Screen TV, Coffee Maker & Mini Fridge', category: 'Rooms & Suites' },
  { id: 'unnamed-31', ext: 'webp', caption: 'Staircase Access to Upper Floor Rooms', category: 'Exterior' },
  { id: 'unnamed-32', ext: 'webp', caption: 'Upper Balcony View of Grounds & Scenic Hills', category: 'Exterior' },
];

const allImages = imageData.map((d) => ({
  ...d,
  url: `/Assets/${d.id}.${d.ext}`,
}));

const categories = [
  { name: 'All Photos', label: 'All Photos (38)' },
  { name: 'Rooms & Suites', label: 'Rooms & Suites (15)' },
  { name: 'Exterior', label: 'Exterior (17)' },
  { name: 'Pool & Amenities', label: 'Pool & Amenities (2)' },
  { name: 'Lobby & Dining', label: 'Lobby & Dining (4)' },
];

export default function Gallery() {
  usePageStyle(css, 'Photo Gallery – Hollister Inn, Hollister CA');
  const navigate = useNavigate();

  const [currentCategory, setCurrentCategory] = useState('All Photos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('photos');

  const filteredImages =
    currentCategory === 'All Photos' ? allImages : allImages.filter((img) => img.category === currentCategory);
  const safeIndex = currentIndex >= filteredImages.length ? 0 : currentIndex;
  const img = filteredImages[safeIndex] || allImages[0];

  const galleryNext = () => setCurrentIndex((safeIndex + 1) % filteredImages.length);
  const galleryPrev = () => setCurrentIndex((safeIndex - 1 + filteredImages.length) % filteredImages.length);

  const filterCategory = (cat) => {
    setCurrentCategory(cat);
    setCurrentIndex(0);
  };

  const closeGallery = () => navigate('/');

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') galleryNext();
      if (e.key === 'ArrowLeft') galleryPrev();
      if (e.key === 'Escape') closeGallery();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  const maxThumb = Math.min(filteredImages.length, 12);

  return (
    <div className="gallery-container">
      <button className="close-button" onClick={closeGallery} aria-label="Close Gallery">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div className="gallery-header">
        <h1 className="gallery-title">Hotel Hollister Inn – Photo Gallery</h1>
        <div className="tab-navigation">
          <button
            className={'tab-button ' + (activeTab === 'photos' ? 'active' : 'inactive')}
            id="tab-photos"
            onClick={() => setActiveTab('photos')}
          >
            <span>📷</span> Photos ({allImages.length})
          </button>
        </div>
        <div className="category-filters" id="category-filters" style={{ display: activeTab === 'photos' ? 'flex' : 'none' }}>
          {categories.map((c) => (
            <button
              key={c.name}
              className={'category-button' + (currentCategory === c.name ? ' active' : '')}
              onClick={() => filterCategory(c.name)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="main-image-container">
        {/* Photos Tab */}
        <div id="photos-tab" style={{ display: activeTab === 'photos' ? 'block' : 'none' }}>
          <div className="image-wrapper">
            <img id="gallery-main-img" src={img.url} alt={img.caption} className="main-image" />
            <button className="nav-arrow prev" onClick={galleryPrev} aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="nav-arrow next" onClick={galleryNext} aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <div className="image-caption">
              <p id="gallery-caption">{img.caption}</p>
            </div>
            <div className="image-counter" id="gallery-counter">
              {safeIndex + 1} / {filteredImages.length}
            </div>
          </div>
          <div className="thumbnail-strip" id="thumbnail-strip">
            {filteredImages.slice(0, maxThumb).map((t, i) => (
              <button
                key={t.id}
                className={'thumbnail-button' + (i === safeIndex ? ' active' : '')}
                onClick={() => setCurrentIndex(i)}
              >
                <img src={t.url} alt={`Thumbnail ${i + 1}`} className="thumbnail-image" />
              </button>
            ))}
            {filteredImages.length > maxThumb && (
              <div className="thumbnail-more">{`+${filteredImages.length - maxThumb} more`}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
