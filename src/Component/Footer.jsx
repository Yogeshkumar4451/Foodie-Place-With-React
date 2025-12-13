import { FOOTER_URL } from "../Assets/images/Logo";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <img
          src={FOOTER_URL}
          alt="Logo"
          className="footer-logo"
        />
        <p className="footer-desc">
          Serving fresh, crispy, and delicious food since 2025. <br />
          Your taste, our responsibility.
        </p>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Menu</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>

      
      <div className="footer-section">
        <h3 className="footer-title">Customer Support</h3>
        <ul className="footer-list">
          <li>Help & FAQ</li>
          <li>Refund Policy</li>
          <li>Terms & Conditions</li>
          <li>Support</li>
        </ul>
      </div>

      
      <div className="footer-section">
        <h3 className="footer-title">Contact Us</h3>
        <p>📍 Ludhina, Punjab</p>
        <p>📞 +91 9884391999</p>
        <p>✉️ YogeshKumar234ldh@gmail.com</p>

        {/* Social Icons */}
        <div className="footer-socials">
          <span>📸</span>
          <span>👍</span>
          <span>▶️</span>
          <span>🐦</span>
        </div>
      </div>

      
      <div className="footer-bottom">
        © 2025 Foodie Place. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;