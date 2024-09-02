import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Events from './pages/Events';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import UnderConstructionPage from './pages/UnderConstructionPage';
import './style.css';  // Import the combined styles here

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();

  // Check if the current route is the under construction page
  const isUnderConstruction = location.pathname === '/';

  return (
    <div className="app">
      {!isUnderConstruction && <Header />}
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/events" element={<Events />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/" element={<UnderConstructionPage />} />
        </Routes>
      </main>
      {!isUnderConstruction && <Footer />}
    </div>
  );
}

export default App;