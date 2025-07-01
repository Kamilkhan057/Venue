import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'customer',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Please agree to the terms and conditions!');
      return;
    }
    console.log('Registration attempt:', formData);
    // Handle registration logic here
  };

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-form-section">
          <div className="register-form-wrapper">
            <div className="register-header">
              <h1>Create Account</h1>
              <p>Join us to find and book amazing venues</p>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="Enter first name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  required
                  placeholder="Enter phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="userType">Account Type</label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="customer">Customer</option>
                  <option value="venue-owner">Venue Owner</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="Create password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  I agree to the <Link to="/terms">Terms and Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
                </label>
              </div>

              <button type="submit" className="btn btn-primary register-btn">
                Create Account
              </button>

              <div className="register-divider">
                <span>Or register with</span>
              </div>

              <div className="social-register">
                <button type="button" className="btn btn-social google-btn">
                  <span>🔍</span>
                  Google
                </button>
                <button type="button" className="btn btn-social facebook-btn">
                  <span>📘</span>
                  Facebook
                </button>
              </div>

              <div className="login-link">
                <p>Already have an account? <Link to="/login">Sign in here</Link></p>
              </div>
            </form>
          </div>
        </div>

        <div className="register-image-section">
          <img 
            src="https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
            alt="Beautiful venue" 
          />
          <div className="image-overlay">
            <h2>Start Your Journey</h2>
            <p>Discover amazing venues and create unforgettable experiences for your special events.</p>
            <div className="stats">
              <div className="stat">
                <h3>1000+</h3>
                <p>Venues</p>
              </div>
              <div className="stat">
                <h3>5000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;