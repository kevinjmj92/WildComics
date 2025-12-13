import { useState, useEffect } from 'react';
import ComicCard from '../ComicCard/ComicCard';
import './ComicGrid.css';

const ComicGrid = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Cambiado de 4 a 6 para mostrar 2x3 en desktop

  // Datos de ejemplo extendidos (24 cómics)
  const sampleComics = [
    {
      id: 1,
      title: "The Divine Demon Jeong Cheon",
      imageUrl: "https://gg.asuracomic.net/storage/media/369068/conversions/01K85Q9ZG4MQQAWQN5PRCE5R2W-optimized.webp",
      chapters: [
        { number: "Capítulo 45", timeAgo: "Hace 2 horas" },
        { number: "Capítulo 44", timeAgo: "Hace 1 día" },
        { number: "Capítulo 43", timeAgo: "Hace 3 días" }
      ],
      url: "#"
    },
    {
      id: 2,
      title: "Iron-Blooded Warrior",
      imageUrl: "https://gg.asuracomic.net/storage/media/298/conversions/01J7TV2G7719CVSTSW9T9M6F31-thumb-small.webp",
      chapters: [
        { number: "Capítulo 32", timeAgo: "Hace 5 horas" },
        { number: "Capítulo 31", timeAgo: "Hace 2 días" },
        { number: "Capítulo 30", timeAgo: "Hace 4 días" }
      ],
      url: "#"
    },
    {
      id: 3,
      title: "Supreme Mage Returns",
      imageUrl: "https://gg.asuracomic.net/storage/media/103/conversions/9ab6b724-thumb-small.webp",
      chapters: [
        { number: "Capítulo 78", timeAgo: "Hace 1 hora" },
        { number: "Capítulo 77", timeAgo: "Hace 1 día" },
        { number: "Capítulo 76", timeAgo: "Hace 2 días" }
      ],
      url: "#"
    },
    {
      id: 4,
      title: "Heavenly Demon",
      imageUrl: "https://gg.asuracomic.net/storage/media/36/conversions/d86aab25-thumb-small.webp",
      chapters: [
        { number: "Capítulo 56", timeAgo: "Hace 8 horas" },
        { number: "Capítulo 55", timeAgo: "Hace 2 días" },
        { number: "Capítulo 54", timeAgo: "Hace 4 días" }
      ],
      url: "#"
    },
    {
      id: 5,
      title: "The Divine Demon's Grand Ascension",
      imageUrl: "https://gg.asuracomic.net/storage/media/365836/conversions/01K6ZFV8K4PJJPY2RGMA9RBXZP-thumb-small.webp",
      chapters: [
        { number: "Capítulo 31", timeAgo: "Hace 5.4 horas" },
        { number: "Capítulo 30", timeAgo: "Hace 6 días" },
        { number: "Capítulo 29", timeAgo: "Hace 14 días" }
      ],
      url: "#"
    },
    {
      id: 6,
      title: "Reincarnator's Stream",
      imageUrl: "https://gg.asuracomic.net/storage/media/389323/conversions/01KC5R154EWDHDVZRD4JHSHED1-thumb-small.webp",
      chapters: [
        { number: "Capítulo 26", timeAgo: "Hace 13 horas" },
        { number: "Capítulo 25", timeAgo: "Hace 14 horas" },
        { number: "Capítulo 24", timeAgo: "Hace 14 horas" }
      ],
      url: "#"
    },
    {
      id: 7,
      title: "The Dark Magician Transmigrates After 66666 Years",
      imageUrl: "https://gg.asuracomic.net/storage/media/21/conversions/d0dc7fd1-thumb-small.webp",
      chapters: [
        { number: "Capítulo 161", timeAgo: "Hace 2.2 horas" },
        { number: "Capítulo 160", timeAgo: "Hace 10 días" },
        { number: "Capítulo 159", timeAgo: "Hace 17 días" }
      ],
      url: "#"
    },
    {
      id: 8,
      title: "Player Who Can't Level Up",
      imageUrl: "https://gg.asuracomic.net/storage/media/263608/conversions/01JH5TBN2T87D48PVY7BD1TTNH-thumb-small.webp",
      chapters: [
        { number: "Capítulo 214", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 213", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 212", timeAgo: "Hace 21 días" }
      ],
      url: "#"
    },
    {
      id: 9,
      title: "The Academy's Sashimi Sword Master",
      imageUrl: "https://gg.asuracomic.net/storage/media/365465/conversions/01K6V41D5Y0XRWZTY72PSA4XRM-thumb-small.webp",
      chapters: [
        { number: "Capítulo 57", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 56", timeAgo: "Hace 8 días" },
        { number: "Capítulo 55", timeAgo: "Hace 15 días" }
      ],
      url: "#"
    },
    {
      id: 10,
      title: "I Obtained a Mythic Item",
      imageUrl: "https://gg.asuracomic.net/storage/media/381642/conversions/01KA4MYN5T5DSTJP8DZAFWWS8C-thumb-small.webp",
      chapters: [
        { number: "Capítulo 158", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 157", timeAgo: "Hace 12 días" },
        { number: "Capítulo 156", timeAgo: "Hace 14 días" }
      ],
      url: "#"
    },
    {
      id: 11,
      title: "Life of a Magic Academy Mage",
      imageUrl: "https://gg.asuracomic.net/storage/media/69/conversions/ff7578df-thumb-small.webp",
      chapters: [
        { number: "Capítulo 133", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 132", timeAgo: "Hace 7 días" },
        { number: "Capítulo 131", timeAgo: "Hace 14 días" }
      ],
      url: "#"
    },
    {
      id: 12,
      title: "Level 999 Goblin",
      imageUrl: "https://gg.asuracomic.net/storage/media/318519/conversions/01JX067TZ58R0DT7VRSWGP03AB-thumb-small.webp",
      chapters: [
        { number: "Capítulo 32", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 31", timeAgo: "Hace 8 días" },
        { number: "Capítulo 30", timeAgo: "Hace 10 días" }
      ],
      url: "#"
    },
    {
      id: 13,
      title: "Regressor Instruction Manual",
      imageUrl: "https://gg.asuracomic.net/storage/media/316680/conversions/01JWCZWMSHZA9GC005W65PMXGY-thumb-small.webp",
      chapters: [
        { number: "Capítulo 166", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 165", timeAgo: "Hace 8 días" },
        { number: "Capítulo 164", timeAgo: "Hace 13 días" }
      ],
      url: "#"
    },
    {
      id: 14,
      title: "Initializing the Sect System",
      imageUrl: "https://gg.asuracomic.net/storage/media/382216/conversions/01KAB1X18K3JZGNG5TA5K6H50K-thumb-small.webp",
      chapters: [
        { number: "Capítulo 18", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 17", timeAgo: "Hace 11 días" },
        { number: "Capítulo 16", timeAgo: "Hace 20 días" }
      ],
      url: "#"
    },
    {
      id: 15,
      title: "Rebirth of the Divine Demon",
      imageUrl: "https://gg.asuracomic.net/storage/media/369068/conversions/01K85Q9ZG4MQQAWQN5PRCE5R2W-thumb-small.webp",
      chapters: [
        { number: "Capítulo 20", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 19", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 18", timeAgo: "Hace 9 días" }
      ],
      url: "#"
    },
    {
      id: 16,
      title: "Reborn on the Demonic Cult Battlefield",
      imageUrl: "https://gg.asuracomic.net/storage/media/363559/conversions/01K65F3W2PEJYBCY3P3A995Y6H-thumb-small.webp",
      chapters: [
        { number: "Capítulo 20", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 19", timeAgo: "Hace 10 días" },
        { number: "Capítulo 18", timeAgo: "Hace 13 días" }
      ],
      url: "#"
    },
    {
      id: 17,
      title: "Heavenly Grand Archive's Young Master",
      imageUrl: "https://gg.asuracomic.net/storage/media/192/conversions/d0cea7ad-thumb-small.webp",
      chapters: [
        { number: "Capítulo 158", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 157", timeAgo: "Hace 11 días" },
        { number: "Capítulo 156", timeAgo: "Hace 16 días" }
      ],
      url: "#"
    },
    {
      id: 18,
      title: "The Return of the Crazy Demon",
      imageUrl: "https://gg.asuracomic.net/storage/media/79/1be5e62f.webp",
      chapters: [
        { number: "Capítulo 181", timeAgo: "Hace 15 horas" },
        { number: "Capítulo 180", timeAgo: "Hace 10 días" },
        { number: "Capítulo 179", timeAgo: "Hace 14 días" }
      ],
      url: "#"
    },
    {
      id: 19,
      title: "Absolute Regression",
      imageUrl: "https://gg.asuracomic.net/storage/media/285/conversions/01J4J7N5E8J6GSEYWGV23ZFHDG-thumb-small.webp",
      chapters: [
        { number: "Capítulo 78", timeAgo: "Hace 16 horas" },
        { number: "Capítulo 77", timeAgo: "Hace 5 días" },
        { number: "Capítulo 76", timeAgo: "Hace 16 días" }
      ],
      url: "#"
    },
    {
      id: 20,
      title: "A Mercenary's Rebirth Among Nobles",
      imageUrl: "https://gg.asuracomic.net/storage/media/387163/conversions/01KBQH21TE8A18RPJN4BEXJY2X-thumb-small.webp",
      chapters: [
        { number: "Capítulo 7", timeAgo: "Hace 2 días" },
        { number: "Capítulo 6", timeAgo: "Hace 2 días" },
        { number: "Capítulo 5", timeAgo: "Hace 16 horas" }
      ],
      url: "#"
    },
    {
      id: 21,
      title: "Raising Villains the Right Way",
      imageUrl: "https://gg.asuracomic.net/storage/media/379292/conversions/01K99EBHMABQEN2E3Q5FZ4D29E-thumb-small.webp",
      chapters: [
        { number: "Capítulo 13", timeAgo: "Hace 19 horas" },
        { number: "Capítulo 12", timeAgo: "Hace 9 días" },
        { number: "Capítulo 11", timeAgo: "Hace 16 días" }
      ],
      url: "#"
    },
    {
      id: 22,
      title: "The Demon King Overrun by Heroes",
      imageUrl: "https://gg.asuracomic.net/storage/media/385089/conversions/01KB2QYRS6KXN3WGKRFF4N03C8-thumb-small.webp",
      chapters: [
        { number: "Capítulo 8", timeAgo: "Hace 20 horas" },
        { number: "Capítulo 7", timeAgo: "Hace 9 días" },
        { number: "Capítulo 6", timeAgo: "Hace 16 días" }
      ],
      url: "#"
    },
    {
      id: 23,
      title: "Starting With 13 Hidden Traits",
      imageUrl: "https://gg.asuracomic.net/storage/media/385998/conversions/01KBB4MA2CBQN17PKXDMK95RD1-thumb-small.webp",
      chapters: [
        { number: "Capítulo 9", timeAgo: "Hace 20 horas" },
        { number: "Capítulo 8", timeAgo: "Hace 8 días" },
        { number: "Capítulo 7", timeAgo: "Hace 14 días" }
      ],
      url: "#"
    },
    {
      id: 24,
      title: "Breakers",
      imageUrl: "https://gg.asuracomic.net/storage/media/352794/conversions/01K5798178KSES815X731EBV2W-thumb-small.webp",
      chapters: [
        { number: "Capítulo 39", timeAgo: "Hace 20 horas" },
        { number: "Capítulo 38", timeAgo: "Hace 20 horas" },
        { number: "Capítulo 37", timeAgo: "Hace 6 días" }
      ],
      url: "#"
    }
  ];

  useEffect(() => {
    const loadComics = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        setComics(sampleComics);
      } catch (error) {
        console.error('Error loading comics:', error);
      } finally {
        setLoading(false);
      }
    };

    loadComics();
  }, []);

  // Lógica de paginación
  const totalPages = Math.ceil(comics.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentComics = comics.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
      {/* CONTENEDOR GRIS QUE AGRUPA TODO (#222222) */}
      <div className="comic-grid-container">
        {/* ENCABEZADO DENTRO DEL GRID */}
        <div className="grid-header">
          <h2>Últimos Actualizados</h2>
          <button className="view-all-btn">Ver Todos</button>
        </div>
        
        {/* GRID DE CARDS */}
        <div className="comic-grid">
          {currentComics.map(comic => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
        
        {/* PAGINACIÓN DENTRO DEL GRID */}
<div className="grid-pagination">
  <button 
    className="pagination-btn" 
    onClick={handlePrevPage}
    disabled={currentPage === 1}
  >
    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="currentColor" strokeWidth="1" />
    </svg>
    <span className="desktop-text">Anterior</span>
    <span className="mobile-text">Atras</span>
  </button>
  
  <span className="page-info">
    <span className="desktop-text">Página {currentPage} de {totalPages}</span>
    <span className="mobile-text">Pág. {currentPage} - {totalPages}</span>
  </span>
  
  <button 
    className="pagination-btn" 
    onClick={handleNextPage}
    disabled={currentPage === totalPages}
  >
    <span className="desktop-text">Siguiente</span>
    <span className="mobile-text">Sig.</span>
    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="currentColor" strokeWidth="1" />
    </svg>
  </button>
</div>
      </div>
    </section>
  );
};

export default ComicGrid;