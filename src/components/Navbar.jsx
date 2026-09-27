import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#" className="navbar-logo">
          Lumié<span>.</span>
        </a>

        {/* Navigation */}
        <nav className="navbar-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA */}
        <a href="#booking" className="navbar-book-btn">
          Book Appointment
          <span>↗</span>
        </a>

      </div>
    </header>
  );
}

export default Navbar;