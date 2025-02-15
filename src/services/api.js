//Good practice to keep API calls in a separate file

const API_URL = import.meta.env.VITE_API_URL

export const getPopularMovies = async () => {
  const response = await fetch(`${API_URL}/movies/popular`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${API_URL}/search/movies?query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
