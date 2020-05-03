function generateUrl() {
    return 'https://movies-app-siit.herokuapp.com/movies'
}
export function fetchMovies(url = generateUrl()) {
    //const url = generateUrl();

    return fetch(url).then(response => response.json());
}

