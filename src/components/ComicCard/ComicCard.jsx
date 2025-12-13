// ComicCard.jsx - CORREGIDO
import './ComicCard.css';

const ComicCard = ({ comic }) => {
  if (!comic) return null;

  return (
    <div className="comic-card">
      <a href={comic.url || "#"} className="comic-link">
        <div className="comic-content">
          {/* IMAGEN A LA IZQUIERDA (3 COLUMNAS) */}
          <div className="comic-image-container">
            <div className="comic-image-wrapper">
              <img 
                src={comic.imageUrl || "/placeholder.jpg"} 
                alt={`Portada de ${comic.title}`}
                className="comic-image"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* CONTENIDO A LA DERECHA (9 COLUMNAS) */}
          <div className="comic-info">
            {/* TÍTULO SIN ENLACE (ya está enlazado el contenedor completo) */}
            <h3 className="comic-title">
              <span>{comic.title}</span> {/* Cambiado de <a> a <span> */}
            </h3>
            
            {/* LISTA DE LOS ÚLTIMOS 3 CAPÍTULOS */}
            {comic.chapters && comic.chapters.length > 0 && (
              <div className="chapters-list">
                {comic.chapters.slice(0, 3).map((chapter, index) => (
                  <div key={index} className="chapter-item">
                    <div className="chapter-info">
                      <span className="chapter-dot">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      <span className="chapter-number">{chapter.number}</span>
                    </div>
                    <span className="chapter-time">{chapter.timeAgo}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ComicCard;