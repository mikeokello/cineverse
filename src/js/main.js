let movies = [];
let genresMap = {};
let currentPage = 1;
let loading = false;

const API_KEY = '52b4a588b74613a90d56523f2f58b314';
const TMDB_API_URL = 'https://api.themoviedb.org/3';

// ---------------- LOCAL STORAGE SYSTEMS ----------------
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

// ---------------- TOAST ----------------
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// ---------------- SKELETON LOADER ----------------
function showSkeletons(container) {
  container.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const sk = document.createElement("div");
    sk.className = "skeleton-card";
    sk.innerHTML = `<div class="skeleton-img"></div><div class="skeleton-text"></div>`;
    container.appendChild(sk);
  }
}

// ---------------- GENRES ----------------
async function fetchGenres() {
  const res = await fetch(`${TMDB_API_URL}/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();
  data.genres.forEach(g => genresMap[g.id] = g.name);

  createGenreFilter(data.genres);
}

function createGenreFilter(genres) {
  const select = document.createElement("select");
  select.id = "genre-filter";
  select.innerHTML = `<option value="all">All Genres</option>`;
  genres.forEach(g => {
    select.innerHTML += `<option value="${g.id}">${g.name}</option>`;
  });

  select.addEventListener("change", () => {
    filterByGenre(select.value);
  });

  document.querySelector(".header-content").appendChild(select);
}

function filterByGenre(id) {
  const filtered = id === "all"
    ? movies
    : movies.filter(m => m.genre_ids?.includes(parseInt(id)));

  displayMovies(filtered);
}

// ---------------- TRAILER ----------------
async function getYouTubeTrailerId(movieId) {
  try {
    const response = await fetch(`${TMDB_API_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
    const data = await response.json();
    const trailer = data.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');
    return trailer ? trailer.key : '';
  } catch {
    return '';
  }
}

// ---------------- MOVIES FETCH (PAGINATION) ----------------
async function fetchMovies(page = 1) {
  if (loading) return;
  loading = true;

  const grid = document.getElementById("movies-grid");
  if (page === 1) showSkeletons(grid);

  try {
    const response = await fetch(`${TMDB_API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    const data = await response.json();

    const moviesWithTrailers = await Promise.all(
      data.results.map(async (movie) => {
        const trailerId = await getYouTubeTrailerId(movie.id);
        return {
          ...movie,
          title: movie.title,
          img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          trailer: trailerId,
          desc: movie.overview || "No description",
        };
      })
    );

    movies = [...movies, ...moviesWithTrailers];
    displayMovies(movies);

  } catch (err) {
    console.error(err);
  }

  loading = false;
}

// ---------------- CARD ----------------
function createMovieCard(movie) {
  const isFav = favorites.includes(movie.id);
  const isWatch = watchlist.includes(movie.id);

  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
    <img src="${movie.img}" class="movie-poster">
    <div class="movie-info">
      <h3 class="movie-title">${movie.title}</h3>

      <div class="rating">⭐ ${movie.vote_average?.toFixed(1) || "N/A"}</div>

      <button class="play-btn" data-trailer="${movie.trailer}">PLAY</button>

      <div class="actions">
        <button class="fav-btn">${isFav ? "❤️" : "🤍"}</button>
        <button class="watch-btn">${isWatch ? "✔ Watchlist" : "+ Watchlist"}</button>
      </div>
    </div>
  `;

  // favorites
  card.querySelector(".fav-btn").onclick = () => {
    toggleFavorite(movie.id);
    showToast("Favorites updated ❤️");
  };

  // watchlist
  card.querySelector(".watch-btn").onclick = () => {
    toggleWatch(movie.id);
    showToast("Watchlist updated ✔");
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

// ---------------- WATCHLIST ----------------
function toggleWatch(id) {
  watchlist = watchlist.includes(id)
    ? watchlist.filter(i => i !== id)
    : [...watchlist, id];

  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

// ---------------- DISPLAY ----------------
function displayMovies(list) {
  const grid = document.getElementById("movies-grid");
  grid.innerHTML = "";

  list.forEach(movie => {
    if (movie.img && movie.trailer) {
      grid.appendChild(createMovieCard(movie));
    }
  });
}

// ---------------- INFINITE SCROLL ----------------
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    currentPage++;
    fetchMovies(currentPage);
  }
});

// ---------------- INIT ----------------
fetchGenres();
fetchMovies();