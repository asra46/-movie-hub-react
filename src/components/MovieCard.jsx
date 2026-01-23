import React from 'react'
import "./component.css"
import { FaStar } from "react-icons/fa"

const MovieCard = ({ movie }) => {

  if (!movie) return null; // safety guard

  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="card">

        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.title}
        />

        <div className="card-body">
          <h3>{movie.title}</h3>

          <div className="card-date-rate">
            <p>{movie.release_date}</p>
            <p className="rating-star">
              <FaStar /> {movie.vote_average}
            </p>
          </div>

          <div className="description">
            <p>
              {movie.overview
                ? movie.overview.slice(0, 90) + "..."
                : "No description available"}
            </p>
          </div>
        </div>

      </div>
    </a>
  )
}

export default MovieCard
