let movies = [];
const API_KEY = '52b4a588b74613a90d56523f2f58b314';
const TMDB_API_URL = 'https://api.themoviedb.org/3';

// Fetch YouTube trailer ID for a movie
async function getYouTubeTrailerId(movieId) {
  try {
    const response = await fetch(`${TMDB_API_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
    const data = await response.json();
    const trailer = data.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    return trailer ? trailer.key : '';
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return '';
  }
}

// Fetch movies from TMDB API
async function fetchMovies() {
  try {
    const response = await fetch(`${TMDB_API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    
    // Get trailers for each movie
    const moviesWithTrailers = await Promise.all(
      data.results.slice(0, 50).map(async (movie) => {
        const trailerId = await getYouTubeTrailerId(movie.id);
        return {
          title: movie.title,
          img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
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

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
    <img src="${movie.img}" alt="${movie.title} poster" class="movie-poster">
    <div class="movie-info">
      <h3 class="movie-title">${movie.title}</h3>
      <button class="play-btn" data-trailer="${movie.trailer}">PLAY</button>
    </div>
  `;
  return card;
}

function displayMovies(movieList) {
  moviesGrid.innerHTML = '';
  movieList.forEach(movie => {
    if (movie.img && movie.trailer) {
      const card = createMovieCard(movie);
      moviesGrid.appendChild(card);
    }
  });
}

function playTrailer(trailerId) {
  trailerIframe.src = `https://www.youtube.com/embed/${trailerId}?autoplay=1&rel=0`;
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  trailerIframe.src = '';
}

function toggleMenu() {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

function searchMovies(query) {
  if (!query.trim()) {
    displayMovies(movies);
    navigateTo('movies');
    return;
  }

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()) ||
    movie.desc.toLowerCase().includes(query.toLowerCase())
  );

  displayMovies(filtered);
  navigateTo('movies');

  if (filtered.length === 0) {
    const moviesGrid = document.getElementById('movies-grid');
    moviesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">No movies found. Try another search.</p>';
  }
}

function displayAbout() {
  const aboutContainer = document.getElementById('about-container');
  aboutContainer.innerHTML = '';
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'about-card';
    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}" class="about-img">
      <div class="about-content">
        <h3>${movie.title}</h3>
        <p>${movie.desc}</p>
        <button class="play-btn" data-trailer="${movie.trailer}">WATCH TRAILER</button>
      </div>
    `;
    aboutContainer.appendChild(card);
  });
}

function navigateTo(page) {
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(page).classList.add('active');
  
  if (page === 'home') {
    const homeGrid = document.getElementById('home-grid');
    homeGrid.innerHTML = '';
    movies.slice(0, 3).forEach(movie => {
      const card = createMovieCard(movie);
      homeGrid.appendChild(card);
    });
    homeGrid.addEventListener('click', (e) => {
      if (e.target.classList.contains('play-btn')) {
        const trailerId = e.target.getAttribute('data-trailer');
        playTrailer(trailerId);
      }
    });
  } else if (page === 'movies') {
    displayMovies(movies);
  } else if (page === 'about') {
    displayAbout();
  }
}

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = e.target.getAttribute('href').substring(1);
    navigateTo(page);
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('play-btn')) {
    const trailerId = e.target.getAttribute('data-trailer');
    playTrailer(trailerId);
  }
});

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

hamburger.addEventListener('click', toggleMenu);

// Search functionality
searchBtn.addEventListener('click', () => {
  const query = searchInput.value;
  searchMovies(query);
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = searchInput.value;
    searchMovies(query);
  }
});

searchInput.addEventListener('input', (e) => {
  if (e.target.value.length === 0) {
    displayMovies(movies);
  }
});

// Initialize with API data
fetchMovies();
