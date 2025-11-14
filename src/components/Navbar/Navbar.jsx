import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body class para el overlay
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo principal - siempre visible */}
        <div className="nav-logo">
          <a href="/">
            <img src={logo} alt="WildComics Logo" />
          </a>
        </div>

        {/* Menú desktop */}
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/trending" className="nav-link">Trending</a>
            </li>
            <li className="nav-item">
              <a href="/library" className="nav-link">Biblioteca</a>
            </li>
          </ul>

          {/* Buscador desktop */}
          <div className="nav-controls">
            <div className="search-container desktop-search">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Buscar comics..." 
              />
              <button className="search-btn">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Botón hamburguesa */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú móvil */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Logo en la parte superior - PRIMERA POSICIÓN */}
          <div className="mobile-logo">
            <img src={logo} alt="WildComics Logo" />
          </div>

          {/* Lista de navegación - SEGUNDA POSICIÓN */}
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/trending" className="nav-link" onClick={closeMenu}>Trending</a>
            </li>
            <li className="nav-item">
              <a href="/library" className="nav-link" onClick={closeMenu}>Biblioteca</a>
            </li>
          </ul>

          {/* Buscador móvil - TERCERA POSICIÓN */}
          <div className="mobile-search">
            <div className="search-container">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Buscar comics..." 
              />
              <button className="search-btn">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Botón Iniciar Sesión lo agregaremos en el siguiente paso */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;