import services from "../data/services";

function Services({ selectedService, onSelectService }) {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <div>
          <p className="section-eyebrow">OUR SERVICES</p>

          <h2>
            Beauty services,
            <br />
            <span>made for you.</span>
          </h2>
        </div>

        <p className="section-description">
          From everyday beauty care to special occasions,
          our treatments are designed around you.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article
            className={`service-card ${
              selectedService?.id === service.id ? "selected" : ""
            }`}
            key={service.id}
          >
            <div className="service-image-wrapper">
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />

              <span className="service-category">
                {service.category}
              </span>
            </div>

            <div className="service-info">
              <div>
                <h3>{service.name}</h3>

                <p>{service.description}</p>
              </div>

              <div className="service-meta">
                <div>
                  <strong>Rs. {service.price.toLocaleString()}</strong>
                  <span>{service.duration}</span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="select-service-btn"
                >
                  {selectedService?.id === service.id
                    ? "Selected ✓"
                    : "Select"}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;