import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Venue Booking System</h3>
            <p>Your trusted partner for finding and booking the perfect venues for any occasion.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/search">Search Venues</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Wedding Venues</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Conference Halls</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📞 +91 12345 67890</li>
              <li>✉️ info@venuebooking.com</li>
              <li>📍 123 Venue Street, City</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Venue Booking System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;