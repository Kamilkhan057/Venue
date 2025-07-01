import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    console.log('Login attempt:', formData);
    // Handle login logic here
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-form-section">
          <div className="login-form-wrapper">
            <div className="login-header">
              <h1>Welcome Back</h1>
              <p>Sign in to your account to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  Remember me
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="btn btn-primary login-btn">
                Sign In
              </button>

              <div className="login-divider">
                <span>Or continue with</span>
              </div>

              <div className="social-login">
                <button type="button" className="btn btn-social google-btn">
                  <span>🔍</span>
                  Google
                </button>
                <button type="button" className="btn btn-social facebook-btn">
                  <span>📘</span>
                  Facebook
                </button>
              </div>

              <div className="signup-link">
                <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
              </div>
            </form>
          </div>
        </div>

        <div className="login-image-section">
          <img 
            src="https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
            alt="Elegant venue" 
          />
          <div className="image-overlay">
            <h2>Find Your Perfect Venue</h2>
            <p>Join thousands of satisfied customers who have found their dream venues with us.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;