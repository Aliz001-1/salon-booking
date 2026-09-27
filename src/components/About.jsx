function About() {
  const images = [
    {
      src: "https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Luxury modern salon interior",
      className: "about-image-large",
    },
  {
  src: "https://images.pexels.com/photos/7750117/pexels-photo-7750117.jpeg?auto=compress&cs=tinysrgb&w=900",
  alt: "Elegant modern salon interior",
  className: "about-image-small",
}, {
      src: "https://images.pexels.com/photos/35983913/pexels-photo-35983913.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Bridal makeup session",
      className: "about-image-small",
    },
    {
      src: "https://images.pexels.com/photos/34025154/pexels-photo-34025154.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Professional bridal makeup",
      className: "about-image-small",
    },
    {
      src: "https://images.pexels.com/photos/7750117/pexels-photo-7750117.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Modern beauty salon",
      className: "about-image-small",
    },
    {
      src: "https://images.pexels.com/photos/12498753/pexels-photo-12498753.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Professional makeup artist",
      className: "about-image-small",
    },
    {
      src: "https://images.pexels.com/photos/13068379/pexels-photo-13068379.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Luxury beauty salon interior",
      className: "about-image-small",
    },
    {
      src: "https://images.pexels.com/photos/37339789/pexels-photo-37339789.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Bride getting ready",
      className: "about-image-small",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left: Image Gallery */}
        <div className="about-gallery">
          {images.map((image, index) => (
            <div
              className={`about-gallery-item ${image.className}`}
              key={index}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Right: About Content */}
        <div className="about-content">
          <p className="section-eyebrow">ABOUT LUMIÉ</p>

          <h2>
            Beauty is not
            <br />
            <span>just a service.</span>
          </h2>

          <p className="about-lead">
            It is a moment to slow down, take care of yourself,
            and leave feeling completely confident.
          </p>

          <p>
            Lumié Salon is a modern beauty and wellness studio
            created for women who want professional beauty care
            in a calm, welcoming environment.
          </p>

          <p>
            From everyday hair styling and skincare to manicures
            and bridal beauty, every appointment is designed with
            attention to detail and a personal touch.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <div className="about-stat">
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>

            <div className="about-stat">
              <strong>2K+</strong>
              <span>Happy Clients</span>
            </div>

            <div className="about-stat">
              <strong>15+</strong>
              <span>Beauty Services</span>
            </div>
          </div>

          <a href="#booking" className="about-button">
            Book Your Visit →
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
