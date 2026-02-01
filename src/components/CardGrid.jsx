import { useEffect, useState, useCallback } from "react";
import MovieCard from "./MovieCard";

const API_KEY = "fd41bcbe59fed8424c78243dbda2596e";

const CardGrid = ({ category, rating, sortBy }) => {
  const [movies, setMovies] = useState([]);

  // Wrap fetchMovies in useCallback so it stays stable
  const fetchMovies = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`
      );
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  }, [category]); // category is a dependency

  // Now it's safe to include fetchMovies in the dependency array
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

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
