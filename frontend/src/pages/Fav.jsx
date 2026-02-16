import MoviCard from "../components/MovieCard"
function Fav({movies,toggleFav,Favs}) {
  return (
    <div className="fav">
      <h2>Favorites</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <MoviCard movie={movie} key={movie.id} toggleFav={toggleFav} favs={Favs} />
        ))}
      </div>
    </div>
  )
}
export default Fav