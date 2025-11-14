import { useState, useEffect } from 'react';
import ComicCard from '../ComicCard/ComicCard';
import './ComicGrid.css';

const ComicGrid = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  // Datos de ejemplo basados en AsuraComic
  // En la sección de sampleComics, reemplaza el autor por rating:
const sampleComics = [
  {
    id: 1,
    title: "The Divine Demon Jeong Cheon",
    imageUrl: "https://gg.asuracomic.net/storage/media/369068/conversions/01K85Q9ZG4MQQAWQN5PRCE5R2W-optimized.webp",
    genres: ["Action", "Adventure", "Fantasy", "Martial Arts", "Murim", "Rebirth"],
    status: "Ongoing",
    rating: 8.7, // Nueva propiedad de calificación
    latestChapter: "Capítulo 45",
    url: "#"
  },
  {
    id: 2,
    title: "Iron-Blooded Warrior",
    imageUrl: "https://gg.asuracomic.net/storage/media/298/conversions/01J7TV2G7719CVSTSW9T9M6F31-thumb-small.webp",
    genres: ["Action", "Adventure", "Fantasy", "Martial Arts"],
    status: "Ongoing",
    rating: 7.9,
    latestChapter: "Capítulo 32",
    url: "#"
  },
  {
    id: 3,
    title: "Supreme Mage Returns",
    imageUrl: "https://gg.asuracomic.net/storage/media/103/conversions/9ab6b724-thumb-small.webp",
    genres: ["Action", "Adventure", "Fantasy", "Rebirth", "Revenge"],
    status: "Ongoing",
    rating: 9.2,
    latestChapter: "Capítulo 78",
    url: "#"
  },
  {
    id: 4,
    title: "Heavenly Demon",
    imageUrl: "https://gg.asuracomic.net/storage/media/36/conversions/d86aab25-thumb-small.webp",
    genres: ["Action", "Fantasy", "Martial Arts", "Wuxia"],
    status: "Ongoing",
    rating: 8.1,
    latestChapter: "Capítulo 56",
    url: "#"
  },
  {
    id: 5,
    title: "Greed: The Game Master",
    imageUrl: "https://gg.asuracomic.net/storage/media/258121/conversions/01JF83N4R7XZH8XT6FFHDB4Z1Z-thumb-small.webp",
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "Game"],
    status: "Ongoing",
    rating: 8.9,
    latestChapter: "Capítulo 91",
    url: "#"
  },
  {
    id: 6,
    title: "Physician of Tang Family",
    imageUrl: "https://gg.asuracomic.net/storage/media/350643/conversions/01K4J921B3PYW9VQ7TWCJCEABY-thumb-small.webp",
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "Martial Arts", "Murim"],
    status: "Ongoing",
    rating: 7.5,
    latestChapter: "Capítulo 23",
    url: "#"
  }
];

  // Simular carga de datos
  useEffect(() => {
    const loadComics = async () => {
      try {
        // En el futuro aquí irá tu API
        await new Promise(resolve => setTimeout(resolve, 1000));
        setComics(sampleComics);
      } catch (error) {
        console.error('Error loading comics:', error);
      } finally {
        setLoading(false);
      }
    };

    loadComics();
  }, []);

  if (loading) {
    return (
      <div className="comic-grid-loading">
        <div className="loading-spinner"></div>
        <p>Cargando cómics...</p>
      </div>
    );
  }

  return (
    <section className="comic-grid-section">
      <div className="container">
        <div className="section-header">
          <h2>Cómics Populares</h2>
          <p>Descubre las mejores series de manhwa y manga</p>
        </div>
        
        <div className="comic-grid">
          {comics.map(comic => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
        
        <div className="load-more-container">
          <button className="load-more-btn">
            Cargar Más Cómics
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComicGrid;