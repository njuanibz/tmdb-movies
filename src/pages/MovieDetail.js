import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "f72287188c807f788d865f21d3335f79";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`)
      .then((response) => {
        setMovie(response.data);
      });
  }, [id]);

  if (!movie) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    </div>
  );
}

export default MovieDetail;
