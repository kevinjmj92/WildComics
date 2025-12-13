import { useState } from 'react';
import './PopularSection.css';

const PopularSection = () => {
  const [activeTab, setActiveTab] = useState('weekly');

  // Datos de ejemplo para los cómics populares
  const popularComics = [
    {
      id: 1,
      rank: 1,
      title: "Crimson Reset",
      imageUrl: "https://gg.asuracomic.net/storage/media/389087/conversions/01KC49F3ZYC7FZ7MCKQDA3M8PW-thumb-small.webp",
      genres: ["Action", "Adventure", "Fantasy", "Mystery"],
      rating: 9.4
    },
    {
      id: 2,
      rank: 2,
      title: "Kidnapped Dragons",
      imageUrl: "https://gg.asuracomic.net/storage/media/388329/conversions/01KC1KNJ4Z8ZNE9S7DJQCBQG1J-thumb-small.webp",
      genres: ["Action", "Adventure", "Fantasy", "Psychological"],
      rating: 9.2
    },
    {
      id: 3,
      rank: 3,
      title: "Reincarnator's Stream",
      imageUrl: "https://gg.asuracomic.net/storage/media/389323/conversions/01KC5R154EWDHDVZRD4JHSHED1-thumb-small.webp",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 8.7
    },
    {
      id: 4,
      rank: 4,
      title: "Nano Machine",
      imageUrl: "https://gg.asuracomic.net/storage/media/270399/conversions/01JKTBDEEZRNKTH6TRHPF5PCXM-thumb-small.webp",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.5
    },
    {
      id: 5,
      rank: 5,
      title: "Pick Me Up, Infinite Gacha",
      imageUrl: "https://gg.asuracomic.net/storage/media/368311/conversions/01K7Y2D725FJ9QH0EH4Q9BX58W-thumb-small.webp",
      genres: ["Action", "Adventure", "Comedy", "Fantasy"],
      rating: 9.8
    },
    {
      id: 6,
      rank: 6,
      title: "The Greatest Estate Developer",
      imageUrl: "https://gg.asuracomic.net/storage/media/163/conversions/fc6b81ea-thumb-small.webp",
      genres: ["Action", "Adventure", "Comedy", "Fantasy"],
      rating: 9.9
    },
    {
      id: 7,
      rank: 7,
      title: "Revenge of the Iron-Blooded Sword Hound",
      imageUrl: "https://gg.asuracomic.net/storage/media/298/conversions/01J7TV2G7719CVSTSW9T9M6F31-thumb-small.webp",
      genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
      rating: 9.6
    },
    {
      id: 8,
      rank: 8,
      title: "Swordmaster's Youngest Son",
      imageUrl: "https://gg.asuracomic.net/storage/media/316729/conversions/01JWECBDM60FZXH7BMGCMXBDM5-thumb-small.webp",
      genres: ["Action", "Another chance", "Fantasy", "Overpowered"],
      rating: 9.5
    },
    {
      id: 9,
      rank: 9,
      title: "Infinite Mage",
      imageUrl: "https://gg.asuracomic.net/storage/media/103/conversions/9ab6b724-thumb-small.webp",
      genres: ["Action", "Adventure", "Drama", "Fantasy"],
      rating: 9.2
    },
    {
      id: 10,
      rank: 10,
      title: "A Dragonslayer's Peerless Regression",
      imageUrl: "https://gg.asuracomic.net/storage/media/266162/01JJ78S117GDR2JEW066796E8B.gif",
      genres: ["Action", "Adventure", "Fantasy", "Regression"],
      rating: 9.2
    }
  ];

  // Función para renderizar estrellas
  const renderStars = (rating) => {
    const maxStars = 5;
    const normalizedRating = (rating / 10) * maxStars;
    const fullStars = Math.floor(normalizedRating);
    const hasHalfStar = normalizedRating % 1 >= 0.5;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="stars-container">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star full-star">★</span>
        ))}
        {hasHalfStar && <span className="star half-star">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="star empty-star">★</span>
        ))}
        <span className="rating-value">{rating}</span>
      </div>
    );
  };

  // SVG de corona para el primer lugar
  const CrownIcon = () => (
    <svg 
      className="crown-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" 
        fill="#FFD700" 
        stroke="#FFD700" 
        strokeWidth="1.5"
      />
      <path 
        d="M5 16H19V19H5V16Z" 
        fill="#FFD700" 
        stroke="#FFD700" 
        strokeWidth="1.5"
      />
    </svg>
  );

  // SVG de escudo para el segundo lugar
  const ShieldIcon = () => (
    <svg 
      className="shield-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 2L4 5V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V5L12 2Z" 
        fill="#C0C0C0" 
        stroke="#C0C0C0" 
        strokeWidth="1"
      />
    </svg>
  );

  // SVG de antorcha para el tercer lugar
  const TorchIcon = () => (
    <svg 
      className="torch-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" 
        fill="#CD7F32" 
        stroke="#CD7F32" 
        strokeWidth="1"
      />
      <path 
        d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" 
        fill="#8B4513" 
        stroke="#8B4513" 
        strokeWidth="1"
      />
      <path 
        d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z" 
        fill="#FFA500" 
        stroke="#FFA500" 
        strokeWidth="1"
      />
    </svg>
  );

  return (
    <div className="popular-section">
      {/* Encabezado */}
      <div className="popular-header">
        <h3>Popular</h3>
      </div>

      {/* Tabs */}
      <div className="popular-tabs">
        <div className="tabs-container">
          <button 
            className={`tab-button ${activeTab === 'weekly' ? 'active' : ''}`}
            onClick={() => setActiveTab('weekly')}
          >
            Weekly
          </button>
          <button 
            className={`tab-button ${activeTab === 'monthly' ? 'active' : ''}`}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
        </div>
      </div>

      {/* Lista de cómics - SIN SCROLL */}
      <div className="popular-comics-list">
        {popularComics.map(comic => (
          <div key={comic.id} className="popular-comic-card">
            {/* Número de ranking con colores especiales */}
            <div className="comic-rank">
              <div 
                className={`rank-number rank-${comic.rank}`}
              >
                {comic.rank === 1 && <CrownIcon />}
                {comic.rank === 2 && <ShieldIcon />}
                {comic.rank === 3 && <TorchIcon />}
                <span className="rank-text">{comic.rank}</span>
              </div>
            </div>

            {/* Imagen del cómic */}
            <div className="comic-image">
              <a href={`#/comic/${comic.id}`}>
                <img 
                  src={comic.imageUrl} 
                  alt={comic.title}
                  loading="lazy"
                />
              </a>
            </div>

            {/* Información del cómic */}
            <div className="comic-info">
              <h4 className="comic-title">
                <a href={`#/comic/${comic.id}`}>{comic.title}</a>
              </h4>
              
              <div className="comic-genres">
                <span className="genres-label">Genres:</span>
                {comic.genres.slice(0, 3).map((genre, index) => (
                  <span key={index} className="genre-text">
                    {genre}{index < Math.min(comic.genres.length - 1, 2) ? ',' : ''}
                  </span>
                ))}
                {comic.genres.length > 3 && <span className="genre-more">...</span>}
              </div>

              {/* Rating con estrellas */}
              <div className="comic-rating">
                {renderStars(comic.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;