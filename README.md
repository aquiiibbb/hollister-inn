# Hollister Inn Website – React + Vite

Hotel Hollister Inn – 152 San Felipe Road, Hollister, CA 95023
Front Desk: (831) 637-1641 | Fax: (831) 637-8423

```bash
npm install
npm run dev       # development
npm run build     # production build -> dist/
npm run preview   # preview the build
```

## Edit contact / booking link
`src/config/hotel.js` – phone, fax, address and `BOOKING_URL`.
Set `BOOKING_URL` to your online booking engine link (https://...). Until then every "Book Now" button calls (831) 637-1641.

## Color palette (taken from the Hollister Inn logo)
| Use | Color | Hex |
|---|---|---|
| Primary (buttons, links, accents) | Hollister Maroon | `#661F31` |
| Hover / darker maroon | Deep Maroon | `#4F1626` |
| Footer / darkest | Wine Black | `#3A0F1B` |
| Logo fleur-de-lis / highlights | Gold | `#D4B106` |
| Soft accent / borders | Antique Gold | `#B8962E` |
| Light gold tint | Pale Gold | `#E8D48A` |
| Header background | Cream | `#FFF2D0` |
| Header title text | Olive Brown | `#605018` |
| Body text | Charcoal | `#1A1A1A` |
| Page background | White | `#FFFFFF` |

CSS variables are defined at the bottom of `src/styles/index.css` (`--hi-maroon`, `--hi-gold`, ...).

## Routes
`/` home, `/gallery`, `/rooms`, `/s` (hotel details modal), `/amen`, `/book`, `/readmore`
