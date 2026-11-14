import { REVIEWS } from '../../config/reviews';

export default function ReviewsSection() {
  return (
    <div className="reviews-section" id="reviews">
      <div className="reviews-header">
        <div>
          <p className="tag">REVIEWS</p>
          <h2>Guest Reviews</h2>
        </div>
        <button className="review-btn" onClick={() => window.open('https://www.google.com/search?q=Hollister+Inn+152+San+Felipe+Road+Hollister+CA+reviews', '_blank')}>Show all reviews</button>
      </div>
      <div className="reviews-cards">
        {REVIEWS.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="review-header">
              <img className="avatar" src={r.photo} alt={r.name} />
              <div className="reviewer-info">
                <h4>{r.name}</h4>
                <p className="review-date">{r.source}</p>
              </div>
            </div>
            <div className="stars">
              ★★★★★{" "}
              <span className="verified">✓</span>
            </div>
            <p className="review-text">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
