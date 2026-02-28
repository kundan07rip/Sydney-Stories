import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/layout/SmoothScroll';
import Cursor from './components/ui/Cursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import MenuPage from './pages/Menu';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Cursor />
        <div className="noise-overlay" />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </main>
        <Footer />
      </SmoothScroll>
    </Router>
  );
}

export default App;
