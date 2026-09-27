import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              Lumié<span>.</span>
            </a>

            <p>
              A modern beauty experience designed around
              you, your style, and your special moments.
            </p>

            <a href="#booking" className="footer-book-link">
              Book your appointment <span>↗</span>
            </a>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h4>EXPLORE</h4>

            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonials">Testimonials</a>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>CONTACT</h4>

            <a href="#contact">Contact Us</a>
            <a href="tel:+923001234567">+92 300 1234567</a>
            <a href="mailto:hello@lumiesalon.com">
              hello@lumiesalon.com
            </a>
            <span>Gulshan-e-Iqbal, Karachi</span>
          </div>

          {/* Social */}
          <div className="footer-column">
            <h4>FOLLOW</h4>

            <a href="#" target="_blank" rel="noreferrer">
              Instagram ↗
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              Facebook ↗
            </a>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Lumié Salon. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <a href="#" className="back-to-top">
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;