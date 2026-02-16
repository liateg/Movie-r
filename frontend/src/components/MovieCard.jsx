import {useState,useEffect} from "react"
function MovieCrad({movie,toggleFav,favs}){
    const isFav=favs.includes(movie.id)
const [Favs,setFavs]=useState([])

//     function onFav(e){
//         e.preventDefault()
//         const targetParent=e.target.closest('.movie-card')
//         targetParent.classList.toggle('fav')
//         const favBtn=targetParent.querySelector('.fav-btn')
//         if (targetParent.classList.contains('fav')) {
//             favBtn.textContent='❤️'
//         }else{
//             favBtn.textContent='🤍' }

//    setFavs(prev =>
//   prev.includes(targetParent.id)
//     ? prev.filter(id => id != targetParent.id) // Remove the movie ID if it's already in the favorites
//     : [...prev, targetParent.id] // Add the movie ID to the favorites if it's not already there
// )
       
// console.log(Favs)
// console.log(targetParent.id)
//         alert(`${movie.title} added to fav ${targetParent.classList.contains('fav')?'❤️':'🤍'} ${targetParent.classList} the current faves ${Favs}`)
//     }
 
    return(
<div className="movie-card" id={movie.id}>
<div className="movie-poster">
    <img src={movie.url} alt={movie.title} />
    <div className="movie-overly">
        <button className="fav-btn " onClick={()=>toggleFav(movie.id)}>
            {isFav ? '❤️' : '🤍'}
        </button>
    </div>
</div>
<div className="movie-info">
    <h3>{movie.title}</h3>
    <p>{movie.release_date}</p>
</div>
</div>
    )
}

export default MovieCrad