import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-eyebrow">
          LUXURY BEAUTY · KARACHI
        </p>

        <h1>
          Your beauty,
          <br />
          <em>your moment.</em>
        </h1>

        <p className="hero-description">
          Discover personalized beauty treatments designed to
          make you feel confident, relaxed, and beautifully you.
        </p>

        <div className="hero-actions">
          <a href="#booking" className="hero-primary-btn">
            Book an Appointment
            <span>↗</span>
          </a>

          <a href="#services" className="hero-secondary-btn">
            Explore Services
          </a>
        </div>

        <div className="hero-bottom">

          <div className="hero-trust">
            <div className="hero-avatars">
              <div className="avatar avatar-one">A</div>
              <div className="avatar avatar-two">S</div>
              <div className="avatar avatar-three">M</div>
            </div>

            <div>
              <strong>2,000+</strong>
              <span>Happy clients</span>
            </div>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;