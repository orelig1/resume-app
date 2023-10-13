import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/experience">Experiences</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/about" element={<About/>}>
          <About />
        </Route>
        <Route path="/" element={<Home/>}>
          <Home />
        </Route>
        <Route path="/experience" element={<Experience/>}>
          <Experience />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
