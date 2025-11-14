import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const ComicCarousel = () => {
  // Configuración del carousel [citation:6]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    arrows: true,
    adaptiveHeight: true
  };

  // Datos de ejemplo para el carousel [citation:1]
  const featuredComics = [
    {
      id: 1,
      title: "The Divine Demon Jeong Cheon",
      imageUrl: "/carousel-1.jpg",
      description: "A legendary being who wished to sweep the Jianghu in a storm of blood, the Divine Demon, Jeong Cheon.",
      status: "Ongoing",
      rating: 8.7,
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"]
    },
    {
      id: 2,
      title: "Iron-Blooded Warrior",
      imageUrl: "/carousel-2.jpg", 
      description: "By the Author and Studio that brought you Absolute Regression! Tian Hejin, popularly called as the Iron-Blooded Warrior.",
      status: "Ongoing",
      rating: 9.2,
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"]
    },
    {
      id: 3,
      title: "Supreme Mage Returns",
      imageUrl: "/carousel-3.jpg",
      description: "By the Studio that brought you Standard of Reincarnation and Genius Prismatic Mage and many more! The Supreme Mage Returns.",
      status: "Ongoing", 
      rating: 8.9,
      genres: ["Action", "Adventure", "Fantasy", "Rebirth"]
    }
  ];

  return (
    <section className="comic-carousel">
      <Slider {...settings}>
        {featuredComics.map((comic) => (
          <div key={comic.id} className="carousel-slide">
            <div 
              className="slide-background"
              style={{ backgroundImage: `url(${comic.imageUrl})` }}
            >
              <div className="slide-overlay">
                <div className="slide-content">
                  <div className="comic-badge">
                    <span className="status-badge">{comic.status}</span>
                    <div className="rating-stars">
                      {renderStars(comic.rating)}
                    </div>
                  </div>
                  
                  <h2 className="comic-title">{comic.title}</h2>
                  <p className="comic-description">{comic.description}</p>
                  
                  <div className="comic-genres">
                    {comic.genres.map((genre, index) => (
                      <span key={index} className="genre-tag">{genre}</span>
                    ))}
                  </div>
                  
                  <div className="carousel-buttons">
                    <button className="read-now-btn">Leer Ahora</button>
                    <button className="details-btn">Ver Detalles</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );

  // Función para renderizar estrellas (reutilizada de ComicCard)
  function renderStars(rating) {
    const maxStars = 5;
    const starRating = (rating / 10) * maxStars;
    
    return (
      <div className="stars-container">
        {[...Array(maxStars)].map((_, index) => {
          const starValue = index + 1;
          let starClass = 'star-empty';
          
          if (starRating >= starValue) {
            starClass = 'star-full';
          } else if (starRating >= starValue - 0.5) {
            starClass = 'star-half';
          }
          
          return (
            <span key={index} className={`star ${starClass}`}>
              ★
            </span>
          );
        })}
        <span className="rating-value">{rating.toFixed(1)}</span>
      </div>
    );
  }
};

export default ComicCarousel;