const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    service: "Hair Styling",
    rating: 5,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "Absolutely loved my experience at Lumié. The stylist understood exactly what I wanted and the final look was beautiful.",
  },
  {
    id: 2,
    name: "Sana Ahmed",
    service: "Facial & Skincare",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "The facial was so relaxing and my skin felt fresh and glowing afterwards. The whole salon has such a beautiful atmosphere.",
  },
  {
    id: 3,
    name: "Maham Ali",
    service: "Manicure",
    rating: 5,
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "My nails looked perfect! The staff was professional, gentle, and paid attention to every little detail.",
  },
  {
    id: 4,
    name: "Hira Shah",
    service: "Bridal Makeup",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "Lumié made my special day even more memorable. My makeup looked elegant, natural, and lasted beautifully throughout the event.",
  },
  {
    id: 5,
    name: "Zoya Malik",
    service: "Beauty Treatment",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "From booking to the final result, everything felt smooth and professional. I will definitely be coming back.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        {/* Heading */}
        <div className="testimonials-heading">
          <div>
            <p className="section-eyebrow">CLIENT LOVE</p>

            <h2>
              Loved by women,
              <br />
              <span>trusted by many.</span>
            </h2>
          </div>

          <div className="testimonial-heading-text">
            <div className="overall-rating">
              <strong>4.9</strong>

              <div>
                <div className="rating-stars">
                  ★★★★★
                </div>

                <span>Based on 200+ client experiences</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Review */}
        <div className="featured-testimonial">
          <div className="featured-image">
            <img
              src={testimonials[0].image}
              alt={testimonials[0].name}
            />

            <div className="featured-image-label">
              <span>01</span>
              <p>OUR CLIENTS</p>
            </div>
          </div>

          <div className="featured-content">
            <div className="large-stars">
              ★★★★★
            </div>

            <blockquote>
              “{testimonials[0].review}”
            </blockquote>

            <div className="featured-client">
              <strong>{testimonials[0].name}</strong>
              <span>{testimonials[0].service}</span>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="testimonial-grid">
          {testimonials.slice(1).map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.id}
            >
              <div className="testimonial-card-top">
                <div className="client-info">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                  />

                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.service}</span>
                  </div>
                </div>

                <div className="card-stars">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>

              <p className="testimonial-review">
                “{testimonial.review}”
              </p>

              <span className="verified-client">
                ✓ Verified Client
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;