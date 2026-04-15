let movies = [];
let currentPage = 1;
let loading = false;

const API_KEY = '52b4a588b74613a90d56523f2f58b314';
const TMDB_API_URL = 'https://api.themoviedb.org/3';

// ---------------- LOCAL STORAGE ----------------
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// ---------------- SKELETON LOADER ----------------
function showSkeletons(container) {
  container.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const sk = document.createElement("div");
    sk.className = "skeleton-card";
    sk.innerHTML = `
      <div class="skeleton-img"></div>
      <div class="skeleton-text"></div>
    `;
    container.appendChild(sk);
  }
}

// ---------------- TRAILER ----------------
async function getYouTubeTrailerId(movieId) {
  try {
    const res = await fetch(`${TMDB_API_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
    const data = await res.json();
    const trailer = data.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');
    return trailer ? trailer.key : null;
  } catch {
    return null;
  }
}

// ---------------- FETCH MOVIES ----------------
async function fetchMovies(page = 1) {
  if (loading) return;
  loading = true;

  const grid = document.getElementById("movies-grid");
  if (page === 1) showSkeletons(grid);

  try {
    const res = await fetch(`${TMDB_API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    const data = await res.json();

    const results = await Promise.all(
      data.results.map(async (movie) => ({
        id: movie.id,
        title: movie.title,
        img: movie.poster_path 
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
          : '',
        rating: movie.vote_average,
        trailer: await getYouTubeTrailerId(movie.id)
      }))
    );

    movies = [...movies, ...results];
    displayMovies(movies);

  } catch (err) {
    console.error(err);
  }

  loading = false;
}

// ---------------- CREATE CARD ----------------
function createMovieCard(movie) {
  const isFav = favorites.includes(movie.id);

  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
    <img src="${movie.img}" class="movie-poster">

    <div class="movie-info">
      <h3 class="movie-title">${movie.title}</h3>

      <div class="rating">⭐ ${movie.rating ? movie.rating.toFixed(1) : "N/A"}</div>

      <button class="play-btn" ${!movie.trailer ? "disabled" : ""}>
        ${movie.trailer ? "PLAY" : "NO TRAILER"}
      </button>

      <button class="fav-btn">${isFav ? "❤️" : "🤍"}</button>
    </div>
  `;

  // PLAY
  card.querySelector(".play-btn").onclick = () => {
    if (!movie.trailer) return;
    window.open(`https://www.youtube.com/watch?v=${movie.trailer}`, "_blank");
  };

  // FAVORITE
  card.querySelector(".fav-btn").onclick = () => {
    toggleFavorite(movie.id);
    displayMovies(movies);
  };

  return card;
}

// ---------------- FAVORITES ----------------
function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter(i => i !== id)
    : [...favorites, id];

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// ---------------- DISPLAY ----------------
function displayMovies(list) {
  const grid = document.getElementById("movies-grid");
  grid.innerHTML = "";

  list.forEach(movie => {
    if (movie.img) {
      grid.appendChild(createMovieCard(movie));
    }
  });
}

// ---------------- INFINITE SCROLL ----------------
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
    currentPage++;
    fetchMovies(currentPage);
  }
});

// ---------------- INIT ----------------
fetchMovies();