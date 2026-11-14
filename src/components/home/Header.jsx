export default function Header({ hotelDetailsOpen, showHotelDetails, closeHotelDetailsModal }) {
  return (
    <header className="hotel-header">
        <div className="hotel-header-container">
          <div className="hotel-top-row">
            <div className="hotel-logo-section">
              <div className="hotel-logo">
                <a href="/">
                  <img src="/Assets/logo.png" alt="Hollister Inn" />
                </a>
              </div>
            </div>
            <div className="hotel-main-info">
              <h1 className="hotel-title">
                <span className="hotel-title-desktop">HOLLISTER INN - HOLLISTER CALIFORNIA</span>
                <span className="hotel-title-mobile">HOLLISTER INN</span>
              </h1>
              <p className="hotel-subtitle">
                <span className="hotel-subtitle-desktop">152 San Felipe Road, Hollister, CA-95023</span>
                <span className="hotel-subtitle-mobile">152 San Felipe Rd, Hollister, CA 95023</span>
              </p>
            </div>
            <button className="hotel-details-btn" onClick={() => showHotelDetails()}>Hotel Details</button>
            {" "}
            <div id="hotelDetailsModal" className="modal" style={{ display: hotelDetailsOpen ? 'block' : 'none' }} onClick={(event) => { if (event.target === event.currentTarget) closeHotelDetailsModal(); }}>
              <div className="modal-content" style={{ width: "90%", maxWidth: "800px", height: "80vh" }}>
                <div className="modal-header">
                  <h3>Hotel Details</h3>
                  <span className="close" onClick={() => closeHotelDetailsModal()}>×</span>
                </div>
                <iframe id="hotelDetailsFrame" frameBorder="0" style={{ width: "100%", height: "calc(100% - 60px)", border: "none" }} src={hotelDetailsOpen ? '/s' : undefined}></iframe>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}
