import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './Carousel.css'; // Tus estilos personalizados

const ComicCarousel = () => {
  // Datos de ejemplo
  const featuredComics = [
    {
      id: 1,
      title: "The Divine Demon Jeong Cheon",
      imageUrl: "/carousel-1.jpg",
      description: "A legendary being who wished to sweep the Jianghu in a storm of blood, the Divine Demon, Jeong Cheon.",
      status: "Ongoing",
      rating: 8.7,
    },
    {
      id: 2,
      title: "Iron-Blooded Warrior",
      imageUrl: "/carousel-2.jpg",
      description: "By the Author and Studio that brought you Absolute Regression! Tian Hejin, popularly called as the Iron-Blooded Warrior.",
      status: "Ongoing",
      rating: 9.2,
    },
    {
      id: 3,
      title: "Supreme Mage Returns",
      imageUrl: "/carousel-3.jpg",
      description: "By the Studio that brought you Standard of Reincarnation and Genius Prismatic Mage and many more! The Supreme Mage Returns.",
      status: "Ongoing",
      rating: 8.9,
    }
  ];

  return (
    <section className="comic-carousel">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        effect={'fade'}
        speed={1000}
        allowTouchMove={true}
        className="swiper-container"
      >
        {featuredComics.map((comic) => (
          <SwiperSlide key={comic.id}>
            <div 
              className="slide-background"
              style={{ backgroundImage: `url(${comic.imageUrl})` }}
            >
              <div className="slide-overlay">
                <div className="slide-content">
                  <div className="comic-badge">
                    <span className="status-badge">{comic.status}</span>
                    <div className="rating-stars">
                      {/* Inserta aquí tu función renderStars que ya tienes */}
                    </div>
                  </div>
                  
                  <h2 className="comic-title">{comic.title}</h2>
                  <p className="comic-description">{comic.description}</p>
                  
                  <div className="carousel-buttons">
                    <button className="read-now-btn">Leer Ahora</button>
                    <button className="details-btn">Ver Detalles</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Contenedor personalizado para la paginación de puntos */}
      <div className="custom-pagination"></div>
    </section>
  );
};

export default ComicCarousel;