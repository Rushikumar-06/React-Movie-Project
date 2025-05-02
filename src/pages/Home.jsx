import MovieCard from "../components/movieCard";
import { useState } from "react";
import "../css/Home.css";
function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id:1, title:"Movie 1", release_date:"2023", src:"https://via.placeholder.com/150"},
        {id:2, title:"Movie 2", release_date:"2023", src:"https://via.placeholder.com/150"},
        {id:3, title:"Movie 3", release_date:"2023", src:"https://via.placeholder.com/150"},
        {id:4, title:"Movie 4", release_date:"2023", src:"https://via.placeholder.com/150"}, 
    ]
    const handerSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }
    return(
    <div className="home">
        <form className="search-form" onSubmit={handerSearch}>
            <input type="text" placeholder="Search for a movie..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button> 
        </form>
        <div className="movies-grid">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    </div>
    )
}
export default Home;