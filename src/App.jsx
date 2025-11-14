import Navbar from './components/Navbar/Navbar';
import ComicCarousel from './components/Carousel/Carousel';
import ComicGrid from './components/ComicGrid/ComicGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ComicCarousel />
      <ComicGrid />
    </div>
  );
}

export default App;