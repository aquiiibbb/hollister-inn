export default function PhotoGrid({ navigate }) {
  return (
    <div className="hotel-preview">
      <div className="preview-left">
        <img src="/Assets/30728994.jpg" alt="Hollister Inn exterior and welcome sign in Hollister CA" />
      </div>
      <div className="preview-right">
        <img src="/Assets/656218827.jpg" alt="Hollister Inn comfortable king bed room" />
        <img src="/Assets/904328424.jpg" alt="Hollister Inn outdoor swimming pool" />
        <img src="/Assets/unnamed-24.webp" alt="Hollister Inn front desk and reception lobby" />
        <img src="/Assets/unnamed-22.webp" alt="Hollister Inn outdoor BBQ facilities and patio" />
        <div className="preview-last">
          <button onClick={() => navigate('/gallery')}>📷 All photos (38)</button>
        </div>
      </div>
    </div>
  );
}
