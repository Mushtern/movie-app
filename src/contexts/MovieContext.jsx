import { createContext, useContext, useState, useEffect } from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieContextProvider = ({children}) => {
  
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites")

    //LocalStorage can only store strigns so we convert it to JSON
    if(storedFavs) setFavorites(JSON.parse(storedFavs))
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const addToFavs = (movie) => {
    setFavorites(prev => [...prev, movie])
  }

  const removeFromFavs = (movieId) => {
    //Returns a new array of movies that don't have the provided movieId
    setFavorites(prev => prev.filter(movie => movie.id !== movieId))
  }

  const isFavorite = (movieId) => {
    //Checks if at least one element from the array meets the specified condition
    return favorites.some(movie => movie.id === movieId)
  }

  const value = {
    favorites,
    addToFavs,
    removeFromFavs,
    isFavorite
  }

  return(
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}