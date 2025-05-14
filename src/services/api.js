const API_KEY = "c20d050632b7e83962f74e75a8f8f283";
const API_URL = "HTTPS://api.themoviedb.org/3";

export const getPopularMovies = async() =>{
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const searchMovies = async(query) =>{
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
}