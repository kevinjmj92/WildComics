import './Footer.css';
import logo from '../../assets/logo.png'; // Ajusta la ruta según tu estructura

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <button onClick={scrollToTop} className="footer-logo-button">
          <img src={logo} alt="Logo de la página" className="footer-logo" />
        </button>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;