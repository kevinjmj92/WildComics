import './FooterNavbar.css';

const FooterNavbar = () => {
  return (
    <div className="footer-navbar-container">
      <nav className="footer-navbar">
        <div className="footer-navbar-content">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a href="/" className="footer-nav-link">Inicio</a>
            </li>
            <li className="footer-nav-item">
              <a href="/about" className="footer-nav-link">Nosotros</a>
            </li>
            <li className="footer-nav-item">
              <a href="/contact" className="footer-nav-link">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FooterNavbar;