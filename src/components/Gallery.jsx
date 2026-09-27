function Gallery() {
  const galleryImages = [
    {
      image:
        "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Hair Styling",
      category: "HAIR",
    },
    {
      image:
        "https://images.pexels.com/photos/4586719/pexels-photo-4586719.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Facial & Skincare",
      category: "SKINCARE",
    },
    {
      image:
        "https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Manicure",
      category: "NAILS",
    },
    {
      image:
        "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Bridal Makeup",
      category: "BRIDAL",
    },
    {
      image:
        "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Hair Color",
      category: "HAIR",
    },
    {
      image:
        "https://images.pexels.com/photos/8534273/pexels-photo-8534273.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Beauty Treatment",
      category: "BEAUTY",
    },
    {
      image:
        "https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Our Salon",
      category: "LUMIÉ",
    },
    {
      image:
        "https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Relax & Refresh",
      category: "WELLNESS",
    },
    {
  image:
    "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=1200",
  title: "Beauty Details",
  category: "LUMIÉ",
},
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <div>
          <p className="section-eyebrow">OUR WORLD</p>

          <h2>
            A glimpse of
            <br />
            <span>Lumié.</span>
          </h2>
        </div>

        <p>
          Step into a space designed for beauty, relaxation,
          and moments that are completely yours.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <article
            className={`gallery-card gallery-card-${index + 1}`}
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
            />

            <div className="gallery-overlay">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;