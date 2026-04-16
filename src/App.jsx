import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-logo">Colin Phung</Link>
        <div className="nav-links">
          {/* Use anchor links for sections in Home, Link for separate pages */}
          <Link to="/" className="nav-link">Home</Link>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <Link to="/blog" className="nav-link">Blog</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* Only keep routes for actual separate pages */}
      </Routes>
    </div>
  );
}

export default App;
