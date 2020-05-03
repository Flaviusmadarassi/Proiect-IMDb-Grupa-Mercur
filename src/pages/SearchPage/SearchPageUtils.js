// export function dictToURL(dict) {
//     let str = [];
//     for (let p in dict) {
//         if (dict[p] !== '') { // If value of a key is not empty, push the key and the value to the string
//             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
//         }
//     }
//     let url = 'https://movies-api-siit.herokuapp.com/movies?';
//     let final_url = url + str.join("&");
//     return final_url
// }

export function generateUrl(filters) {
    let url = 'https://movies-app-siit.herokuapp.com/movies';

    const searchQuery = Object.keys(filters).reduce((acc, key) => {
        const filterValue = filters[key];
        if (filterValue) {
            acc.push(`${key}=${filterValue}`);

        }
        return acc;
    }, []).join('&');
    if (searchQuery) {
        url = url + '?' + searchQuery;
    }
    console.log(url);
    return url;

}

