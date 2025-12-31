import { useState } from 'react';
import './Contact.css';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleDownload = () => {
    alert('Company profile download functionality to be implemented');
  };

  return (
    <div className={`contact ${darkMode ? 'dark' : 'light'}`}>
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Let's discuss how we can help transform your enterprise
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="info-title">Get in Touch</h2>
              <p className="info-text">
                Our team of experts is ready to help you achieve your technology goals. Reach out to discuss your requirements.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="detail-icon"></div>
                  <div className="detail-content">
                    <h3 className="detail-label">Address</h3>
                    <p className="detail-value">Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon"></div>
                  <div className="detail-content">
                    <h3 className="detail-label">Email</h3>
                    <p className="detail-value">info@fsmgspl.com</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon"></div>
                  <div className="detail-content">
                    <h3 className="detail-label">Phone</h3>
                    <p className="detail-value">+91-799-799-8000</p>
                  </div>
                </div>
              </div>

              <button className="download-btn" onClick={handleDownload}>
                Download Company Profile
              </button>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  {submitted ? 'Message Sent!' : 'Request a Consultation'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="map-title">Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160143277!2d78.24323209999999!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hyderabad Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
