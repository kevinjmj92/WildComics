import './ComicCard.css';

const ComicCard = ({ comic }) => {
  if (!comic) return null;

  // Función para renderizar las estrellas según la calificación
  const renderStars = (rating) => {
    const maxStars = 5;
    const starRating = (rating / 10) * maxStars; // Convertir de 0-10 a 0-5 estrellas
    
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
  };

  return (
    <div className="comic-card">
      <a href={comic.url || "#"} className="comic-link">
        <div className="comic-image-container">
          <img 
            src={comic.imageUrl || "/placeholder.jpg"} 
            alt={`Portada de ${comic.title}`}
            className="comic-image"
            loading="lazy"
          />
          <div className="comic-overlay">
            <span className="comic-status">{comic.status || "Ongoing"}</span>
          </div>
        </div>
        
        <div className="comic-info">
          <h3 className="comic-title">{comic.title}</h3>
          
          {comic.genres && comic.genres.length > 0 && (
            <div className="comic-genres">
              {comic.genres.slice(0, 3).map((genre, index) => (
                <span key={index} className="genre-tag">{genre}</span>
              ))}
            </div>
          )}
          
          {/* Reemplazamos el autor por el sistema de calificación */}
          {comic.rating && (
            <div className="comic-rating">
              {renderStars(comic.rating)}
            </div>
          )}
          
          {comic.latestChapter && (
            <p className="comic-chapter">{comic.latestChapter}</p>
          )}
        </div>
      </a>
    </div>
  );
};

export default ComicCard;