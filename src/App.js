import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Solo Home
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import About from "./pages/About";  // Importa About

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
    	<Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
