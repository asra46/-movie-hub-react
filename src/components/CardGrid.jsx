import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const CardGrid = ({ category, rating, sortBy }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [category]);

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`
    );
    const data = await res.json();
    setMovies(data.results);
  };

  let filtered = movies;

  if (rating) {
    filtered = filtered.filter((m) => m.vote_average >= rating);
  }

  if (sortBy === "rating") {
    filtered = [...filtered].sort((a, b) => b.vote_average - a.vote_average);
  }

  if (sortBy === "date") {
    filtered = [...filtered].sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );
  }

  return (
    <div className="card-grid textColor">
      {filtered.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default CardGrid;
