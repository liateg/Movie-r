import Moviecard from "./components/MovieCard"
import {  Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import Fav from "./pages/Fav"
import './App.css'

function App() {
      const [Favs, setFavs] = useState(() => {
    const saved = localStorage.getItem('favs');
    return saved ? JSON.parse(saved) : [];
  });
      const toggleFav=(id)=>{
        setFavs(prev =>
  prev.includes(id)
    ? prev.filter(favId => favId !== id) // Remove the movie ID if it's already in the favorites
    : [...prev, id] // Add the movie ID to the favorites if it's not already there
)

    }

  const movies=[{id:1,title:'nama',release_date:'2020'},
        {id:2,title:'max',release_date:'2021'},{id:3,title:'jhon week',release_date:'2022'}]
        const favMovies=movies.filter(movie=>Favs.includes(movie.id))
        console.log("Favs in App:", favMovies);
  return(
    <>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home movies={movies} toggleFav={toggleFav} Favs={Favs} />} />
        <Route path="/fav" element={<Fav movies={favMovies}  toggleFav={toggleFav} Favs={Favs}/>} />
      </Routes>
    </main>
    {/* {m===1&& (<Moviecard movie={{title:'mama',release_date:'2020'}} />)} */}
    {/* <Home />*/}</> 
   )
}

export default App
