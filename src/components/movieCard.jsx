import "../css/movieCard.css";

function MovieCard({movie}){
    const onFavoriteClick = () => {
        console.log("Favorite clicked for movie:", movie.title);
    };
return <div className="movie-card">
    <div className="movie-poster">
        <img src={movie.src} alt={movie.title} />
        <div className="movie-overlay">
            <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>

</div>
}
export default MovieCard;