import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Simulate logged-in user (replace with real auth state later)
  const isLoggedIn = true;
  const userProfilePic = 'https://img.freepik.com/premium-vector/3d-user-login-form-page_169241-6920.jpg?semt=ais_items_boosted&w=740'; // You can use any user image URL


  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Project' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/search', label: 'Search' },
    !isLoggedIn && { path: '/login', label: 'Login' },
    !isLoggedIn && { path: '/register', label: 'Register' },
    { path: '/contact', label: 'Contact' }
  ].filter(Boolean); 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className='logo'><span className='latter'>V</span>ENUE</div>
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
          <div className="navbar-avatar">
              <img src={userProfilePic} alt="User" />
            </div>
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