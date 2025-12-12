import Navbar from './components/Navbar/Navbar';
import ComicCarousel from './components/Carousel/Carousel'; // Asegúrate de que la ruta es correcta
import ComicGrid from './components/ComicGrid/ComicGrid';
import Footer from './components/Footer/Footer'; // Nueva importación
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <ComicCarousel />
        <ComicGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;