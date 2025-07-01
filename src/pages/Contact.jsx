import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any questions or support</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                We're here to help you find the perfect venue for your special event. 
                Reach out to us through any of the following ways:
              </p>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>123 Venue Street<br />Mumbai, Maharashtra 400001<br />India</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+91 12345 67890<br />+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>info@venuebooking.com<br />support@venuebooking.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-details">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 7:00 PM<br />Saturday - Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-link">📘 Facebook</a>
                  <a href="#" className="social-link">📷 Instagram</a>
                  <a href="#" className="social-link">🐦 Twitter</a>
                  <a href="#" className="social-link">💼 LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="contact-form-wrapper">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                        placeholder="Enter your full name"
                      />
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
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-control"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Support</option>
                        <option value="venue-owner">Venue Owner Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="6"
                      required
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <h3>📍 Our Location</h3>
              <p>123 Venue Street, Mumbai, Maharashtra 400001</p>
              <p>We're located in the heart of the city, easily accessible by public transport.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I book a venue?</h3>
              <p>Simply search for venues in your preferred location, compare options, and click "Book Now" on your chosen venue. You'll be guided through the booking process.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, debit cards, UPI payments, and bank transfers. All payments are processed securely.</p>
            </div>
            <div className="faq-item">
              <h3>Can I cancel my booking?</h3>
              <p>Yes, you can cancel your booking according to the venue's cancellation policy. Please check the specific terms when booking.</p>
            </div>
            <div className="faq-item">
              <h3>How do I list my venue?</h3>
              <p>If you're a venue owner, register for a venue owner account and follow the venue listing process. Our team will help you get started.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;