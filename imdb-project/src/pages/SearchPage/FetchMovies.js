function generateUrl() {
    return 'https://movies-api-siit.herokuapp.com/movies'
}
export function fetchMovie() {
    const url = generateUrl();
  
    return fetch(url).then(response => response.json());
}

