import MoviCard from "../components/MovieCard"
import { useState } from "react"
function Home(){
    const [search,setSearch]=useState('')
    const handleSearch=(e)=>{
        e.preventDefault()
        alert(search)
        setSearch('')
    }
    const movies=[{id:1,title:'nama',release_date:'2020'},
        {id:2,title:'max',release_date:'2021'},{id:3,title:'jhon week',release_date:'2022'}]
        return(
            <div className="home">
                <form onSubmit={handleSearch} className="search-movie">
                    <input type="text" className="search-input"  placeholder="Search ..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <button type="submit" className="search-btn">Search</button>
                </form>
                <div className="movie-grid">
                    {movies.map(movie=> (
                   movie.title.toLowerCase().startsWith(search)&& 
                    <MoviCard movie={movie} key={movie.id} />))}
                </div>
            </div>
        )

}

export default Home