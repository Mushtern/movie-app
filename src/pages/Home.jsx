import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to fetch movies...");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
  
      if(!query.trim()) return
      if(loading) return
  
      setLoading(true)
      try{
        const searchResults = await searchMovies(query)
        setMovies(searchResults)
        setError(null)
      } catch(err) {
        console.log("Search failed...", err)
        setError(err)
      } finally {
        setLoading(false)
      }
  
    };
    handleSearch()
  }, [query])

  return (
    <>
      <div className="home">
        <form className="search-form" >
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
