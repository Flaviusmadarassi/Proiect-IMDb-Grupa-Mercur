export function fetchMovies() {
  return fetch(
    "https://movies-api-siit.herokuapp.com/movies"
  ).then((response) => response.json());
}
