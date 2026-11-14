import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePageStyle from '../hooks/usePageStyle';
import indexCss from '../styles/index.css?raw';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css?raw';
import Header from '../components/home/Header';
import BookingBar from '../components/home/BookingBar';
import PhotoGrid from '../components/home/PhotoGrid';
import SocialSidebar from '../components/home/SocialSidebar';
import StickyNav from '../components/home/StickyNav';
import Overview from '../components/home/Overview';
import GuestRooms from '../components/home/GuestRooms';
import AmenitiesSection from '../components/home/AmenitiesSection';
import LocationSection from '../components/home/LocationSection';
import NearbySection from '../components/home/NearbySection';
import InfoSection from '../components/home/InfoSection';
import ReviewsSection from '../components/home/ReviewsSection';
import ContactSection from '../components/home/ContactSection';
import TermsSection from '../components/home/TermsSection';
import Modals from '../components/home/Modals';
import Footer from '../components/home/Footer';

// Original load order: style.css first, then Bootstrap.
const css = indexCss + '\n' + bootstrapCss.replace(/\/\*# sourceMappingURL=.*?\*\//g, '');

// Sections Mapping (same order as the sticky nav buttons)
const sections = ['overview', 'guest-rooms', 'amenities', 'location', 'info', 'reviews', 'contact', 'terms'];

export default function Home() {
  usePageStyle(css, 'Hotel Hollister Inn | Hollister, California');
  const navigate = useNavigate();

  const [openModalId, setOpenModalId] = useState(null); // readmore / room1-3 / amenities overlays
  const [hotelDetailsOpen, setHotelDetailsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const isManualScrolling = useRef(false);
  const manualTimer = useRef(null);

  // ===== MODAL OVERLAY =====
  const openRoomModal = (id) => setOpenModalId(id);
  const closeModal = (id) => setOpenModalId((cur) => (cur === id ? null : cur));

  // ===== HOTEL DETAILS MODAL (iframe) =====
  const showHotelDetails = () => setHotelDetailsOpen(true);
  const closeHotelDetailsModal = () => setHotelDetailsOpen(false);

  // lock page scroll while a modal is open
  useEffect(() => {
    document.body.style.overflow = openModalId || hotelDetailsOpen ? 'hidden' : '';
  }, [openModalId, hotelDetailsOpen]);

  useEffect(() => () => {
    document.body.style.overflow = '';
  }, []);

  // ===== ESC KEY: close all modals =====
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setHotelDetailsOpen(false);
        setOpenModalId(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // ===== Click scroll to section =====
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    isManualScrolling.current = true;
    if (sections.includes(id)) setActiveNav(id);

    const header = document.querySelector('.hotel-header');
    const stickyNav = document.querySelector('.sticky-nav');
    const headerHeight = header ? header.getBoundingClientRect().height : 44;
    const navHeight = stickyNav ? stickyNav.getBoundingClientRect().height : 40;
    const totalOffset = headerHeight + navHeight + 8;

    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });

    clearTimeout(manualTimer.current);
    manualTimer.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 800);
  };

  // ===== Scroll spy (debounced) =====
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (isManualScrolling.current) return;
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveNav(sections[i]);
          break;
        }
      }
    };

    const onScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(manualTimer.current);
    };
  }, []);

  return (
    <>
      {/* ===== HEADER ===== */}
      <Header
        hotelDetailsOpen={hotelDetailsOpen}
        showHotelDetails={showHotelDetails}
        closeHotelDetailsModal={closeHotelDetailsModal}
      />

      {/* booking row + date picker / guest selector modals */}
      <BookingBar />

      {/* ===== MAIN WRAPPER ===== */}
      <div className="hotel-preview-wrapper">
        <PhotoGrid navigate={navigate} />
        <SocialSidebar />
        <StickyNav activeNav={activeNav} scrollToSection={scrollToSection} />
        <Overview openRoomModal={openRoomModal} />
        <GuestRooms openRoomModal={openRoomModal} navigate={navigate} />
        <AmenitiesSection openRoomModal={openRoomModal} />
        <LocationSection />
        <NearbySection />
        <InfoSection />
        <ReviewsSection />
        <ContactSection />
        <TermsSection />
      </div>

      {/* read more / room details / amenities modals */}
      <Modals openModalId={openModalId} closeModal={closeModal} />

      {/* footer (FAQ + accessibility widget) */}
      <Footer />
    </>
  );
}
