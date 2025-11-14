import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efecto para prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Cerrar menú al hacer clic en un link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const categories = ['Trending', 'Biblioteca'];

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo como enlace a inicio */}
        <div className="nav-logo">
          <a href="/" onClick={closeMenu}>
            <img src={logo} alt="WildComics Logo" />
          </a>
        </div>

        {/* Menú de categorías - solo se ve en desktop */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {categories.map((category, index) => (
              <li key={index} className="nav-item">
                <a 
                  href={`#${category.toLowerCase()}`} 
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {category}
                </a>
              </li>
            ))}
            
            {/* Búsqueda en móvil */}
            <div className="mobile-search">
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Buscar comics..." 
                  className="search-input"
                />
                <button className="search-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Logo en móvil al final del menú */}
            <div className="mobile-logo">
              <a href="/" onClick={closeMenu}>
                <img src={logo} alt="WildComics Logo" />
              </a>
            </div>
          </ul>
        </div>

        {/* Búsqueda en desktop */}
        <div className="nav-controls">
          <div className="search-container desktop-search">
            <input 
              type="text" 
              placeholder="Buscar comics..." 
              className="search-input"
            />
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Botón menú hamburguesa */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;