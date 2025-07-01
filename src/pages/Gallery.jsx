import { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Venues' },
    { id: 'wedding', name: 'Wedding Halls' },
    { id: 'corporate', name: 'Corporate Venues' },
    { id: 'outdoor', name: 'Outdoor Spaces' },
    { id: 'banquet', name: 'Banquet Halls' },
    { id: 'conference', name: 'Conference Rooms' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Grand Wedding Ballroom',
      category: 'wedding',
      location: 'Mumbai, Maharashtra',
      capacity: '500 guests',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 2,
      title: 'Modern Conference Center',
      category: 'corporate',
      location: 'Delhi, Delhi',
      capacity: '200 guests',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 3,
      title: 'Beautiful Garden Venue',
      category: 'outdoor',
      location: 'Bangalore, Karnataka',
      capacity: '300 guests',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 4,
      title: 'Luxury Banquet Hall',
      category: 'banquet',
      location: 'Pune, Maharashtra',
      capacity: '400 guests',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 5,
      title: 'Executive Conference Room',
      category: 'conference',
      location: 'Chennai, Tamil Nadu',
      capacity: '50 guests',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 6,
      title: 'Royal Wedding Palace',
      category: 'wedding',
      location: 'Jaipur, Rajasthan',
      capacity: '800 guests',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 7,
      title: 'Corporate Event Space',
      category: 'corporate',
      location: 'Hyderabad, Telangana',
      capacity: '150 guests',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 8,
      title: 'Rooftop Garden Venue',
      category: 'outdoor',
      location: 'Goa, Goa',
      capacity: '250 guests',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    {
      id: 9,
      title: 'Premium Banquet Hall',
      category: 'banquet',
      location: 'Kolkata, West Bengal',
      capacity: '600 guests',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="gallery">
      <section className="gallery-hero">
        <div className="container">
          <h1>Venue Gallery</h1>
          <p>Explore our stunning collection of venues for every occasion</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p className="gallery-location">📍 {item.location}</p>
                    <p className="gallery-capacity">👥 {item.capacity}</p>
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Premium Venues</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10000+</div>
              <div className="stat-label">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;