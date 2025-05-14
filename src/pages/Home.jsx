import MovieCard from "../components/movieCard";
import { useState,useEffect } from "react";
import "../css/Home.css";
import {getPopularMovies, searchMovies} from "../services/api";
function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const loadPopularMovies = async ()=>{
            try{
                const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
            }
            catch(err){
                console.log(err);
                setError("failed to load movies");
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    },[])
    const handerSearch = (e) => { 
        e.preventDefault()
        alert("Search functionality is not implemented yet.")
        setSearchQuery("")
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
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