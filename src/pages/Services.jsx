import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Wedding Venues',
      description: 'Beautiful and elegant venues perfect for your special day with comprehensive wedding planning services.',
      icon: '💒',
      features: ['Bridal Suites', 'Catering Services', 'Decoration', 'Photography', 'Music & Entertainment'],
      price: 'Starting from ₹50,000',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: 2,
      title: 'Corporate Events',
      description: 'Professional venues equipped with modern technology for business meetings and corporate gatherings.',
      icon: '🏢',
      features: ['AV Equipment', 'High-Speed WiFi', 'Catering', 'Parking', 'Business Center'],
      price: 'Starting from ₹25,000',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: 3,
      title: 'Birthday Parties',
      description: 'Fun and vibrant venues for memorable birthday celebrations with entertainment and catering options.',
      icon: '🎂',
      features: ['Party Decorations', 'Entertainment', 'Catering', 'Photography', 'Party Favors'],
      price: 'Starting from ₹15,000',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: 4,
      title: 'Conference Halls',
      description: 'State-of-the-art conference facilities for seminars, workshops, and large business gatherings.',
      icon: '🎤',
      features: ['Advanced AV Systems', 'Live Streaming', 'Translation Services', 'Networking Areas', 'Catering'],
      price: 'Starting from ₹30,000',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: 5,
      title: 'Cultural Events',
      description: 'Traditional and cultural venues perfect for festivals, cultural programs, and community gatherings.',
      icon: '🎭',
      features: ['Traditional Decor', 'Cultural Catering', 'Stage Setup', 'Sound Systems', 'Lighting'],
      price: 'Starting from ₹20,000',
      image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: 6,
      title: 'Outdoor Events',
      description: 'Beautiful outdoor spaces for garden parties, picnics, and open-air celebrations.',
      icon: '🌳',
      features: ['Garden Settings', 'Weather Protection', 'Outdoor Catering', 'Lighting', 'Security'],
      price: 'Starting from ₹35,000',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    }
  ];

  const additionalServices = [
    {
      title: 'Event Planning',
      description: 'Complete event planning and coordination services',
      icon: '📋'
    },
    {
      title: 'Catering Services',
      description: 'Professional catering with diverse menu options',
      icon: '🍽️'
    },
    {
      title: 'Photography',
      description: 'Professional photography and videography services',
      icon: '📸'
    },
    {
      title: 'Decoration',
      description: 'Custom decoration and theme setup services',
      icon: '🎨'
    },
    {
      title: 'Entertainment',
      description: 'Live music, DJ, and entertainment arrangements',
      icon: '🎵'
    },
    {
      title: 'Transportation',
      description: 'Guest transportation and logistics coordination',
      icon: '🚐'
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive venue and event services for all your special occasions</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Venue Categories</h2>
          <p className="section-subtitle">Choose from our wide range of venue types and services</p>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon">{service.icon}</div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-features">
                    <h4>Included Features:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-footer">
                    <div className="service-price">{service.price}</div>
                    <button className="btn btn-primary">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section additional-services">
        <div className="container">
          <h2 className="section-title">Additional Services</h2>
          <p className="section-subtitle">Enhance your event with our professional add-on services</p>
          <div className="additional-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="additional-card">
                <div className="additional-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Perfect Venue?</h2>
            <p>Get started today and let us help you create an unforgettable event experience.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Browse Venues</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;