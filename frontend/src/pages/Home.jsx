import MoviCard from "../components/MovieCard"
import { useState,useEffect } from "react"
function Home({movies,toggleFav,Favs}) {
    const [search,setSearch]=useState('')

        
    useEffect(() => {
  console.log("Favs updated:", Favs);
  const saveFavs=localStorage.setItem('favs',JSON.stringify(Favs))
}, [Favs]);


    

    const handleSearch=(e)=>{
        e.preventDefault()
        alert(search)
        setSearch('')
    }
    
    
        return(
            <div className="home">
                <form onSubmit={handleSearch} className="search-movie">
                    <input type="text" className="search-input"  placeholder="Search ..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <button type="submit" className="search-btn">Search</button>
                </form>
                <div className="movie-grid">
                    {movies.map(movie=> (
                   movie.title.toLowerCase().startsWith(search)&& 
                    <MoviCard movie={movie} key={movie.id} toggleFav={toggleFav} favs={Favs} />))}
                </div>
            </div>
        )

}

export default Home