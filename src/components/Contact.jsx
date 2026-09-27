import "./Contact.css";
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-eyebrow">GET IN TOUCH</p>

          <h2>
            Let's make your
            <br />
            <span>beauty moment special.</span>
          </h2>

          <p className="contact-intro">
            Have a question, need help choosing a service, or want to
            book your appointment? We would love to hear from you.
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Info */}
          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">01</div>
              <div>
                <span>VISIT US</span>
                <h3>Gulshan-e-Iqbal, Karachi</h3>
                <p>
                  Visit Lumié Salon for a relaxing and personalized
                  beauty experience.
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">02</div>
              <div>
                <span>CALL US</span>
                <h3>+92 300 1234567</h3>
                <p>
                  Our team is available to help you with bookings
                  and questions.
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">03</div>
              <div>
                <span>EMAIL US</span>
                <h3>hello@lumiesalon.com</h3>
                <p>
                  Send us a message and we will get back to you soon.
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">04</div>
              <div>
                <span>OPENING HOURS</span>
                <h3>Mon – Sun · 10:00 AM – 8:00 PM</h3>
                <p>
                  Appointments are recommended, especially for bridal
                  and special occasion services.
                </p>
              </div>
            </div>

          </div>

          {/* Contact Card */}
          <div className="contact-card">
            <div className="contact-card-top">
              <span>BOOKING SUPPORT</span>
              <div className="contact-dot"></div>
            </div>

            <h3>
              Ready for your
              <br />
              <em>next appointment?</em>
            </h3>

            <p>
              Choose your favorite service and reserve your preferred
              date and time through WhatsApp.
            </p>

            <a href="#booking" className="contact-book-btn">
              Book an Appointment
              <span>↗</span>
            </a>

            <div className="contact-card-line"></div>

            <div className="contact-socials">
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="WhatsApp">
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;