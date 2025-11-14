import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaSearch, FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

        {/* Menú desktop - SOLO se muestra en desktop */}
        <div className="nav-menu desktop-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/trending" className="nav-link">Trending</a>
            </li>
            <li className="nav-item">
              <a href="/library" className="nav-link">Biblioteca</a>
            </li>
          </ul>

          {/* Buscador desktop y controles */}
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
            {/* Botón de usuario en desktop - solo icono */}
            <button className="user-icon-desktop" aria-label="Iniciar Sesión">
              <FaUser />
            </button>
          </div>
        </div>

        {/* Botón hamburguesa - SOLO se muestra en móvil */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú móvil - SOLO se muestra en móvil */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Logo en la parte superior - PRIMERA POSICIÓN - AHORA ES LINK */}
          <div className="mobile-logo">
            <a href="/" onClick={closeMenu}>
              <img src={logo} alt="WildComics Logo" />
            </a>
          </div>

          {/* Lista de navegación - SEGUNDA POSICIÓN */}
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <a href="/trending" className="mobile-nav-link" onClick={closeMenu}>Trending</a>
            </li>
            <li className="mobile-nav-item">
              <a href="/library" className="mobile-nav-link" onClick={closeMenu}>Biblioteca</a>
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

          {/* Botón Iniciar Sesión - CUARTA POSICIÓN (al final) */}
          <div className="mobile-auth">
            <button className="auth-button-mobile" onClick={closeMenu}>
              <FaUser className="auth-icon" />
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;