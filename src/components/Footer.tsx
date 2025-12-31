import { Link } from 'react-router-dom';
import './Footer.css';

interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-container container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">FSM Global Solutions</h3>
            <p className="footer-description">
              Empowering enterprises with reliable IT infrastructure, unified communications, and cloud solutions.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/solutions">Solutions</Link>
              <Link to="/services">Services</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Solutions</h4>
            <nav className="footer-links">
              <Link to="/solutions">IT Infrastructure</Link>
              <Link to="/solutions">Unified Communications</Link>
              <Link to="/solutions">Cyber Security</Link>
              <Link to="/solutions">Cloud Services</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <p>Hyderabad, Telangana, India</p>
              <p>info@fsmgspl.com</p>
              <p>+91-799-799-8000</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FSM Global Solutions Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
