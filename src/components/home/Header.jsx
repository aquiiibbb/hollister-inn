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
              <h1 className="hotel-title">HOLLISTER INN - HOLLISTER CALIFORNIA</h1>
              <p className="hotel-subtitle">152 San Felipe Road, Hollister, CA-95023</p>
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
