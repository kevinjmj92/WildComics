import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: 'https://us-a.tapas.io/sa/f7/16e8def2-901b-45ea-8d86-2aa4b05cc86b_z.jpg',
      title: 'THE BEGINNING AFTER THE END',
      genre: 'Action, Fantasy, Reincarnation',
      status: 'Ongoing',
      description: 'King Grey has unmatched strength, wealth, and prestige in a world where martial artists rule. But solitude lingers closely behind those with great power. Beneath the glamorous exterior of a powerful king lurks the shell of man, devoid of purpose and will.',
      chapters: 145,
      rating: 4.8
    },
    {
      id: 2,
      image: 'https://us-a.tapas.io/sa/f1/e50af48f-7bd6-433c-b3ae-4737b720d1bb_z.jpg',
      title: 'SOLO LEVELING',
      genre: 'Action, Adventure, Fantasy',
      status: 'Completed',
      description: '10 years ago, after the Gate opened and connected the real world with the realm of magic and monsters, some ordinary people received the power to hunt monsters within the Gate. They are known as Hunters.',
      chapters: 179,
      rating: 4.9
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/bf/40/88/bf40881d407f7536b8f3f211a334b190.jpg',
      title: 'TOMB RAIDER KING',
      genre: 'Action, Adventure, Supernatural',
      status: 'Ongoing',
      description: 'I came to know everything there is to know about relics. I will take everything from those who threw me away. The Tomb Raider that the world will remember!',
      chapters: 89,
      rating: 4.7
    }
  ];

  // Drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX || e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div 
      className="carousel-container"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Fondo difuminado */}
      <div 
        className="carousel-background"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>
      
      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-card">
              {/* Text Content */}
              <div className="slide-text-content">
                <div className="slide-header">
                  <h2 className="slide-title">{slide.title}</h2>
                  <div className="slide-rating">
                    <span className="rating-star">★</span>
                    <span className="rating-value">{slide.rating}</span>
                  </div>
                </div>
                
                <div className="slide-meta">
                  <span className="slide-genre">{slide.genre}</span>
                  <span className="slide-status">{slide.status}</span>
                  <span className="slide-chapters">{slide.chapters} Chapters</span>
                </div>
                
                <p className="slide-description">{slide.description}</p>
                
                <div className="slide-actions">
                  <button className="read-now-btn">
                    <span>Read Now</span>
                  </button>
                  <button className="bookmark-btn">
                    <span>Bookmark</span>
                  </button>
                </div>
              </div>

              {/* Comic Image */}
              <div className="slide-image-container">
                <img src={slide.image} alt={slide.title} className="slide-image" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;