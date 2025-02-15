import './css/App.css'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { MovieContextProvider} from './contexts/MovieContext'

function App() {

  return (
    <MovieContextProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </MovieContextProvider>
  )
}

export default App
