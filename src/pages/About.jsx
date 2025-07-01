import './About.css';

function About() {
  const team = [
    {
      name: 'John Doe',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
    },
    {
      name: 'Mike Johnson',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
    }
  ];

  const languages = [
    {
      name: 'English',
      flag: '🇺🇸',
      description: 'Primary language with full feature support and comprehensive documentation.'
    },
    {
      name: 'Hindi',
      flag: '🇮🇳',
      description: 'हिंदी भाषा में पूर्ण सहायता के साथ स्थानीय उपयोगकर्ताओं के लिए।'
    },
    {
      name: 'Spanish',
      flag: '🇪🇸',
      description: 'Soporte completo en español para usuarios de habla hispana.'
    },
    {
      name: 'French',
      flag: '🇫🇷',
      description: 'Support complet en français pour les utilisateurs francophones.'
    },
    {
      name: 'German',
      flag: '🇩🇪',
      description: 'Vollständige Unterstützung auf Deutsch für deutschsprachige Benutzer.'
    },
    {
      name: 'Arabic',
      flag: '🇸🇦',
      description: 'دعم كامل باللغة العربية للمستخدمين الناطقين بالعربية.'
    }
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Our Project</h1>
          <p>Revolutionizing venue booking through innovative technology, exceptional service, and multilingual support</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                We are dedicated to simplifying the venue booking process by providing a comprehensive 
                platform that connects event organizers with the perfect venues for their needs. Our 
                mission is to make venue booking accessible, transparent, and efficient for everyone.
              </p>
              <p>
                Through our innovative platform, we aim to bridge the gap between venue owners and 
                event organizers, creating a seamless experience that benefits both parties while 
                supporting multiple languages and cultures.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
                alt="Team collaboration" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section features-overview">
        <div className="container">
          <h2 className="section-title">Project Features</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3>Venue Management</h3>
              <p>Comprehensive venue listing and management system with detailed information, photos, availability tracking, and multi-language descriptions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Booking System</h3>
              <p>Advanced booking management with real-time availability, automated confirmations, payment processing, and calendar integration.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>User Management</h3>
              <p>Secure user authentication and role-based access control for customers, venue owners, and administrators with profile customization.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Advanced Search</h3>
              <p>Powerful search and filter functionality with location-based results, price ranges, amenities, and availability filters.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Payment Integration</h3>
              <p>Secure payment gateway integration with multiple payment options, automated billing, and international currency support.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics Dashboard</h3>
              <p>Comprehensive reporting and analytics for venue owners and administrators to track performance, bookings, and revenue.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section language-section">
        <div className="container">
          <h2 className="section-title">Multi-Language Support</h2>
          <p className="section-subtitle">Our platform supports multiple languages to serve users worldwide</p>
          <div className="language-grid">
            {languages.map((language, index) => (
              <div key={index} className="language-card">
                <div className="language-flag">{language.flag}</div>
                <h3>{language.name}</h3>
                <p>{language.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="grid grid-3">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section technology-section">
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React.js 18+</li>
                <li>JavaScript ES6+</li>
                <li>CSS3 & HTML5</li>
                <li>React Router</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JWT Authentication</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Tools & Services</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Vite Build Tool</li>
                <li>Payment Gateway APIs</li>
                <li>Cloud Hosting</li>
                <li>Multi-language Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;