import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "f72287188c807f788d865f21d3335f79";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div>
      <h1>Películas Populares</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
