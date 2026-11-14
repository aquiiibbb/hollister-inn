import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigationType } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Rooms = lazy(() => import('./pages/Rooms'));
const HotelDetails = lazy(() => import('./pages/HotelDetails'));
const Amenities = lazy(() => import('./pages/Amenities'));
const RoomDetails = lazy(() => import('./pages/RoomDetails'));
const ReadMore = lazy(() => import('./pages/ReadMore'));

// Each original .html file started at the top of the page when opened.
function ScrollToTop() {
  const { pathname } = useLocation();
  const type = useNavigationType();
  useEffect(() => {
    if (type !== 'POP') window.scrollTo(0, 0);
  }, [pathname, type]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/s" element={<HotelDetails />} />
        <Route path="/amen" element={<Amenities />} />
        <Route path="/book" element={<RoomDetails />} />
        <Route path="/readmore" element={<ReadMore />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
