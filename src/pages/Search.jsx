import { useState } from 'react';
import './Search.css';

function Search() {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    eventType: '',
    capacity: '',
    priceRange: '',
    amenities: []
  });

  const [searchResults] = useState([
    {
      id: 1,
      name: 'Grand Ballroom',
      location: 'Mumbai, Maharashtra',
      capacity: 500,
      price: 50000,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      amenities: ['AC', 'Parking', 'Catering', 'Sound System']
    },
    {
      id: 2,
      name: 'Crystal Palace',
      location: 'Delhi, Delhi',
      capacity: 300,
      price: 35000,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      amenities: ['AC', 'Parking', 'Decoration', 'Sound System']
    },
    {
      id: 3,
      name: 'Royal Gardens',
      location: 'Bangalore, Karnataka',
      capacity: 800,
      price: 75000,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      amenities: ['Garden', 'Parking', 'Catering', 'Photography']
    },
    {
      id: 4,
      name: 'Modern Conference Hall',
      location: 'Pune, Maharashtra',
      capacity: 150,
      price: 20000,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      amenities: ['AC', 'Projector', 'WiFi', 'Sound System']
    }
  ]);

  const handleFilterChange = (field, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAmenityChange = (amenity) => {
    setSearchFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <div className="search">
      <section className="search-hero">
        <div className="container">
          <h1>Find Your Perfect Venue</h1>
          <p>Search from thousands of venues across the country</p>
        </div>
      </section>

      <section className="search-content">
        <div className="container">
          <div className="search-layout">
            {/* Search Filters */}
            <div className="search-filters">
              <h3>Search Filters</h3>
              
              <div className="filter-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Enter city or area"
                  value={searchFilters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="filter-group">
                <label>Event Type</label>
                <select
                  value={searchFilters.eventType}
                  onChange={(e) => handleFilterChange('eventType', e.target.value)}
                  className="form-control"
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="conference">Conference</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Capacity</label>
                <select
                  value={searchFilters.capacity}
                  onChange={(e) => handleFilterChange('capacity', e.target.value)}
                  className="form-control"
                >
                  <option value="">Select Capacity</option>
                  <option value="0-50">0-50 Guests</option>
                  <option value="51-100">51-100 Guests</option>
                  <option value="101-300">101-300 Guests</option>
                  <option value="301-500">301-500 Guests</option>
                  <option value="500+">500+ Guests</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Price Range</label>
                <select
                  value={searchFilters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="form-control"
                >
                  <option value="">Select Price Range</option>
                  <option value="0-25000">₹0 - ₹25,000</option>
                  <option value="25001-50000">₹25,001 - ₹50,000</option>
                  <option value="50001-100000">₹50,001 - ₹1,00,000</option>
                  <option value="100000+">₹1,00,000+</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Amenities</label>
                <div className="amenities-list">
                  {['AC', 'Parking', 'Catering', 'Sound System', 'Decoration', 'Photography', 'Garden', 'WiFi', 'Projector'].map(amenity => (
                    <label key={amenity} className="amenity-checkbox">
                      <input
                        type="checkbox"
                        checked={searchFilters.amenities.includes(amenity)}
                        onChange={() => handleAmenityChange(amenity)}
                      />
                      {amenity}
                    </label>
                  ))}
                </div>
              </div>

              <button className="btn btn-primary search-btn">Search Venues</button>
            </div>

            {/* Search Results */}
            <div className="search-results">
              <div className="results-header">
                <h3>Available Venues ({searchResults.length})</h3>
                <div className="sort-options">
                  <select className="form-control">
                    <option>Sort by Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                    <option>Capacity</option>
                  </select>
                </div>
              </div>

              <div className="venues-grid">
                {searchResults.map(venue => (
                  <div key={venue.id} className="venue-card">
                    <div className="venue-image">
                      <img src={venue.image} alt={venue.name} />
                      <div className="venue-rating">
                        ⭐ {venue.rating}
                      </div>
                    </div>
                    <div className="venue-info">
                      <h4>{venue.name}</h4>
                      <p className="venue-location">📍 {venue.location}</p>
                      <p className="venue-capacity">👥 Capacity: {venue.capacity} guests</p>
                      <div className="venue-amenities">
                        {venue.amenities.map(amenity => (
                          <span key={amenity} className="amenity-tag">{amenity}</span>
                        ))}
                      </div>
                      <div className="venue-footer">
                        <div className="venue-price">₹{venue.price.toLocaleString()}/day</div>
                        <button className="btn btn-primary">Book Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;