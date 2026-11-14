// Central hotel details – edit here for contact info / booking link.
export const HOTEL = {
  name: 'Hollister Inn',
  fullName: 'Hotel Hollister Inn - Hollister California',
  street: '152 San Felipe Road',
  city: 'Hollister',
  state: 'CA',
  zip: '95023',
  phone: '(831) 637-1641',
  phoneTel: 'tel:+18316371641',
  fax: '(831) 637-8423',
};

// Put your online booking-engine link here (https://...). Until then "Book Now" calls the front desk.
export const BOOKING_URL = HOTEL.phoneTel;

export function bookNow() {
  if (/^https?:/i.test(BOOKING_URL)) window.open(BOOKING_URL, '_blank');
  else window.location.href = BOOKING_URL;
}
