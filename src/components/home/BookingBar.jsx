import { bookNow } from '../../config/hotel';
import { useEffect, useState } from 'react';

export default function BookingBar() {
  const DAY_MS = 24 * 60 * 60 * 1000;
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dateFormat = { weekday: 'short', day: '2-digit', month: 'short' };

  // Booking state
  const [checkinDate, setCheckinDate] = useState(() => new Date());
  const [checkoutDate, setCheckoutDate] = useState(() => new Date(Date.now() + DAY_MS)); // Tomorrow
  const [guests, setGuests] = useState({ rooms: 1, adults: 1, children: 0 });
  const [guestDisplay, setGuestDisplay] = useState('1 room, 1 guest');
  const [dateType, setDateType] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(() => new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear());
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [guestSelectorOpen, setGuestSelectorOpen] = useState(false);

  // Date picker functions
  const showDatePicker = (type) => {
    setDateType(type);
    setDatePickerOpen(true);
  };
  const hideDatePicker = () => setDatePickerOpen(false);

  const navigateMonth = (direction) => {
    let month = currentMonth + direction;
    let year = currentYear;
    if (month > 11) {
      month = 0;
      year++;
    } else if (month < 0) {
      month = 11;
      year--;
    }
    setCurrentMonth(month);
    setCurrentYear(year);
  };

  const isSelectedDate = (date) =>
    date.toDateString() === (dateType === 'checkin' ? checkinDate : checkoutDate).toDateString();

  const selectDate = (date) => {
    if (dateType === 'checkin') {
      setCheckinDate(date);
      // Auto-adjust checkout if it's before checkin
      if (checkoutDate <= date) setCheckoutDate(new Date(date.getTime() + DAY_MS));
    } else if (date > checkinDate) {
      // Don't allow checkout before checkin
      setCheckoutDate(date);
    }
    hideDatePicker();
  };

  // Calendar cells: weekday headers + 42 days
  const firstDay = new Date(currentYear, currentMonth, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());
  const today = new Date().toDateString();
  const calendarCells = [
    ...dayNames.map((day) => (
      <div key={'wd-' + day} className="date-picker-weekday">{day}</div>
    )),
    ...Array.from({ length: 42 }, (_, i) => {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      let cls = 'date-picker-day';
      if (currentDate.getMonth() !== currentMonth) cls += ' other-month';
      if (currentDate.toDateString() === today) cls += ' today';
      if (isSelectedDate(currentDate)) cls += ' selected';
      return (
        <div key={i} className={cls} onClick={() => selectDate(currentDate)}>{currentDate.getDate()}</div>
      );
    }),
  ];

  // Guest selector functions
  const showGuestSelector = () => setGuestSelectorOpen(true);
  const hideGuestSelector = () => setGuestSelectorOpen(false);

  const updateGuestCount = (type, change) => {
    setGuests((g) => {
      if (type === 'rooms') return { ...g, rooms: Math.max(1, g.rooms + change) };
      if (type === 'adults') return { ...g, adults: Math.max(1, g.adults + change) };
      return { ...g, children: Math.max(0, g.children + change) };
    });
  };

  const applyGuestChanges = () => {
    const totalGuests = guests.adults + guests.children;
    const roomText = guests.rooms === 1 ? 'room' : 'rooms';
    const guestText = totalGuests === 1 ? 'guest' : 'guests';
    setGuestDisplay(`${guests.rooms} ${roomText}, ${totalGuests} ${guestText}`);
    hideGuestSelector();
  };

  // Escape closes both pickers
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setDatePickerOpen(false);
        setGuestSelectorOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
<div className="booking-row">
        <div className="booking-field" onClick={() => showDatePicker('checkin')}>
          <label className="booking-label">Check in</label>
          <div className="booking-value" id="checkin-display">{checkinDate.toLocaleDateString("en-US", dateFormat)}</div>
        </div>
        <div className="booking-field" onClick={() => showDatePicker('checkout')}>
          <label className="booking-label">Check out</label>
          <div className="booking-value" id="checkout-display">{checkoutDate.toLocaleDateString("en-US", dateFormat)}</div>
        </div>
        <div className="booking-field" onClick={() => showGuestSelector()}>
          <label className="booking-label">
            <span className="booking-label-desktop">Rooms & guests</span>
            <span className="booking-label-mobile">Rooms</span>
          </label>
          <div className="booking-value" id="guest-display">
            <span className="booking-val-desktop">{guestDisplay}</span>
            <span className="booking-val-mobile">{guests.rooms} {guests.rooms === 1 ? 'Room' : 'Rooms'}</span>
          </div>
        </div>
        <button className="search-btn" onClick={() => bookNow()}>Book Now</button>
      </div>
<div id="date-picker-modal" className="booking-modal" style={datePickerOpen ? { display: "block" } : undefined} onClick={(event) => { if (event.target === event.currentTarget) hideDatePicker(); }}>
        <div className="booking-modal-content">
          <div className="booking-modal-header">
            <h3 id="date-picker-title">{dateType === 'checkin' ? 'Select Check-in Date' : dateType === 'checkout' ? 'Select Check-out Date' : 'Select Date'}</h3>
            <span className="modal-close" onClick={() => hideDatePicker()}>×</span>
          </div>
          <div className="date-picker-container">
            <div className="date-picker-header">
              <button className="date-picker-nav" onClick={() => navigateMonth(-1)}>{"<"}</button>
              {" "}
              <span className="date-picker-month" id="current-month-display">{`${monthNames[currentMonth]} ${currentYear}`}</span>
              {" "}
              <button className="date-picker-nav" onClick={() => navigateMonth(1)}>{">"}</button>
            </div>
            <div className="date-picker-grid" id="date-picker-grid">{calendarCells}</div>
          </div>
        </div>
      </div>
<div id="guest-selector-modal" className="booking-modal" style={guestSelectorOpen ? { display: "block" } : undefined} onClick={(event) => { if (event.target === event.currentTarget) hideGuestSelector(); }}>
        <div className="booking-modal-content">
          <div className="booking-modal-header">
            <h3>{"Rooms & Guests"}</h3>
            <span className="modal-close" onClick={() => hideGuestSelector()}>×</span>
          </div>
          <div className="guest-selector-container">
            <div className="guest-selector-row">
              <span className="guest-selector-label">Rooms</span>
              <div className="guest-counter">
                <button className="guest-counter-btn" onClick={() => updateGuestCount('rooms', -1)}>−</button>
                {" "}
                <span className="guest-counter-value" id="rooms-counter">{guests.rooms}</span>
                {" "}
                <button className="guest-counter-btn" onClick={() => updateGuestCount('rooms', 1)}>+</button>
              </div>
            </div>
            <div className="guest-selector-row">
              <span className="guest-selector-label">Adults</span>
              <div className="guest-counter">
                <button className="guest-counter-btn" onClick={() => updateGuestCount('adults', -1)}>−</button>
                {" "}
                <span className="guest-counter-value" id="adults-counter">{guests.adults}</span>
                {" "}
                <button className="guest-counter-btn" onClick={() => updateGuestCount('adults', 1)}>+</button>
              </div>
            </div>
            <div className="guest-selector-row">
              <span className="guest-selector-label">Children</span>
              <div className="guest-counter">
                <button className="guest-counter-btn" onClick={() => updateGuestCount('children', -1)}>−</button>
                {" "}
                <span className="guest-counter-value" id="children-counter">{guests.children}</span>
                {" "}
                <button className="guest-counter-btn" onClick={() => updateGuestCount('children', 1)}>+</button>
              </div>
            </div>
            <button className="guest-apply-btn" onClick={() => applyGuestChanges()}>Apply</button>
          </div>
        </div>
      </div>
    </>
  );
}
