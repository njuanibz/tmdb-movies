import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "f72287188c807f788d865f21d3335f79";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`)
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === "") return;

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=es-ES`
    );

    setMovies(response.data.results);
  };

  return (
    <div>
      <h1>Películas Populares</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar película..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

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
