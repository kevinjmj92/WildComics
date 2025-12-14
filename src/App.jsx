// App.jsx - CORREGIDO
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel'; // Cambiado de ComicCarousel a Carousel
import ComicGrid from './components/ComicGrid/ComicGrid';
import Footer from './components/Footer/Footer';
import PopularSection from './components/PopularSection/PopularSection';
import FooterNavbar from './components/FooterNavbar/FooterNavbar'; // Nuevo componente
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="main-container">
          <div className="content-left">
            <Carousel /> {/* Cambiado de ComicCarousel a Carousel */}
            <ComicGrid />
          </div>
          <div className="content-right">
            <PopularSection />
          </div>
        </div>
      </main>
      {/* Nuevo FooterNavbar agregado aquí */}
      <FooterNavbar />
      <Footer />
    </div>
  );
}

export default App;