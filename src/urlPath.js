export const BASE_URL = "https://api.themoviedb.org/3";
export const POPULAR_FILMS = `${BASE_URL}/movie/popular?api_key=`;
export const COMING_FILMS = `${BASE_URL}/movie/upcoming?api_key=`;
export const NOW_PLAYING_FILMS = `${BASE_URL}/movie/now_playing?api_key=`;
export const TOP_RATED_FILMS = `${BASE_URL}/movie/top_rated?api_key=`;
export const PERSONAL_INFO = `${BASE_URL}/person/person?api_key=`;
export const POSTER_URL = "http://image.tmdb.org/t/p/w185";
export const NEWS_URL = "https://newsapi.org/v2/everything?q=movies&apiKey=528fb017ce0c4f3c96e06bfda7644490";

/*
https://api.themoviedb.org/3/person/1353827?api_key=113d04e11b8b3f9f579000f0d91c2bcb&language=en-US
const SIMILAR_MOVIE = `${BASE_URL}/movie/297802/${value}?api_key=${process.env.REACT_APP_SECRET_CODE}&language=en-US&page=1`;

*/
