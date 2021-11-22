const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "26b18d77835c17f05ad3da3c8f7d9f7f";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

//fetchWithErrorHandling это обертка вместо axios
async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchMoviesTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  ).then((response) => response.results);
}

export function fetchMoviesFullImfo(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieActors(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.cast);
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.results);
}

export function fetchMovieOfName(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
  ).then((response) => response.results);
}
