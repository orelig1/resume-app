import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';
import html2pdf from 'html2pdf.js';

function App() {
  const exportToPDF = () => {
    const element = document.getElementById('pdf-container'); 
    html2pdf().from(element).save();
  };

  return (
    <Router>
      <div>
        <Header />
      </div>
      <div className="container" id="pdf-container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <br/>
      <button onClick={exportToPDF}>Export to PDF</button>
    </Router>
  );
}

export default App;
