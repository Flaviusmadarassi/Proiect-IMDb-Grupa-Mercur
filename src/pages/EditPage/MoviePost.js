// import fetch from 'isomorphic-fetch';

// * snip *

export function createMoviePost(data) {
    return fetch('https://movies-app-siit.herokuapp.com/movies', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}