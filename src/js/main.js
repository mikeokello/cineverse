let movies = [];

const API_KEY = '52b4a588b74613a90d56523f2f58b314';
const TMDB_API_URL = 'https://api.themoviedb.org/3';

// Fetch YouTube trailer ID for a movie
async function getYouTubeTrailerId(movieId) {
try {
const response = await fetch(${TMDB_API_URL}/movie/${movieId}/videos?api_key=${API_KEY});
const data = await response.json();

const trailer = data.results?.find(video =>
video.type === 'Trailer' && video.site === 'YouTube'
);

return trailer ? trailer.key : '';

} catch (error) {
console.error('Error fetching trailer:', error);
return '';
}
}

// Fetch movies from TMDB API
async function fetchMovies() {
try {
const response = await fetch(${TMDB_API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1);
const data = await response.json();

const moviesWithTrailers = await Promise.all(
data.results.slice(0, 50).map(async (movie) => {
const trailerId = await getYouTubeTrailerId(movie.id);

return {
title: movie.title,
img: https://image.tmdb.org/t/p/w500${movie.poster_path},
trailer: trailerId,
desc: movie.overview || 'No description available',
id: movie.id
};
})
);

movies = moviesWithTrailers.filter(m => m.img && m.trailer);

displayMovies(movies.slice(0, 20));
navigateTo('home');

} catch (error) {
console.error('Error fetching movies:', error);
}
}

const moviesGrid = document.getElementById('movies-grid');
const modal = document.getElementById('modal');
const trailerIframe = document.getElementById('trailer-iframe');
const closeModalBtn = document.getElementById('close-modal');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

/* keep the rest EXACTLY as you had it */

fetchMovies();