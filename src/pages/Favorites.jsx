import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";

const Favorites = () => {
  const { favorites } = useMovieContext();

  useEffect(() => {
    console.log(favorites)
  }, [])

  if (favorites.length > 0) {
    return (
      <div>
        <h2 className="favorites">Your favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorite movies yet...</h2>
      <p>Start adding movies to your favorites and you will see them here!</p>
    </div>
  );
};

export default Favorites;
