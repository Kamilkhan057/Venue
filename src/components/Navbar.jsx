import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Project' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/search', label: 'Search' },
    { path: '/login', label: 'Login' },
    { path: '/register', label: 'Register' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className='logo'><span className='latter'>V</span>anue</div>
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;