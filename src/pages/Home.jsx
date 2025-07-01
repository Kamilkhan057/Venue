import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const modules = [
    {
      title: 'Venue Management',
      description: 'Comprehensive venue listing and management system with detailed information, photos, and availability tracking for all types of events.',
      icon: '🏢'
    },
    {
      title: 'Booking Management',
      description: 'Advanced booking system with real-time availability, automated confirmations, payment processing, and customer management.',
      icon: '📅'
    },
    {
      title: 'Login Management',
      description: 'Secure user authentication and role-based access control for customers, venue owners, and administrators with complete security.',
      icon: '👥'
    }
  ];

  const galleryImages = [
    {
      id: 1,
      title: 'Grand Wedding Hall',
      description: 'Elegant ballroom perfect for weddings and large celebrations',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 2,
      title: 'Corporate Conference Center',
      description: 'Modern facilities equipped for business meetings and conferences',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 3,
      title: 'Outdoor Garden Venue',
      description: 'Beautiful garden setting for intimate gatherings and parties',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 4,
      title: 'Luxury Banquet Hall',
      description: 'Premium venue with world-class amenities and service',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 5,
      title: 'Rooftop Event Space',
      description: 'Stunning city views for memorable celebrations',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 6,
      title: 'Traditional Heritage Venue',
      description: 'Classic architecture with modern amenities',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>A VENUE SHOULD BE AS IMPRESSIVE AS YOUR BUSINESS</h1>
            <p>Find the perfect venue for your special events, weddings, corporate meetings, and celebrations with our comprehensive booking platform.</p>
            <div className="hero-buttons">
              <Link to="/search" className="btn btn-primary">Search Venues</Link>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Elegant venue interior" 
          />
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Venue Booking System</h2>
          <div className="about-content">
            <p>
              A Venue Booking System is a comprehensive platform designed to connect event organizers with the perfect venues for their needs. 
              Our system can handle events with capacities ranging from intimate gatherings to large celebrations with 300+ guests. 
              The most common types of venues include elegant ballrooms, conference halls, garden spaces, and heritage buildings, 
              with larger events accommodated by premium banquet halls and outdoor venues.
            </p>
            <p>
              Events may be used for scheduled venue bookings, corporate meetings, wedding celebrations, private parties, or special occasions. 
              Our promotional venues may be used for business launches, cultural events, and others are privately operated for a wide range of purposes, 
              including entertainment events, social gatherings, and professional conferences.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Our Premium Venues</h2>
          <p className="section-subtitle">Discover our collection of stunning venues perfect for any occasion</p>
          <div className="gallery-grid">
            {galleryImages.map((venue) => (
              <div key={venue.id} className="gallery-item">
                <img src={venue.image} alt={venue.title} />
                <div className="gallery-overlay">
                  <h3>{venue.title}</h3>
                  <p>{venue.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modules Section */}
      <section className="section modules-section">
        <div className="container">
          <h2 className="section-title">Project Modules</h2>
          <div className="grid grid-3">
            {modules.map((module, index) => (
              <div key={index} className="module-card">
                <div className="module-icon">{module.icon}</div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <Link to="/about" className="btn btn-primary">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Platform?</h2>
          <div className="grid grid-2">
            <div className="feature-item">
              <div className="feature-icon">🌟</div>
              <h3>Premium Venues</h3>
              <p>Access to the finest venues in your city with verified quality standards, professional service, and exceptional facilities for all types of events.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with transparent costs, no hidden fees, and flexible payment options to suit your budget and requirements.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support with dedicated event coordinators to help you with planning, booking, and execution of your events.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Instant Booking</h3>
              <p>Quick and easy booking process with real-time availability, instant confirmation, secure payments, and digital contracts for peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;