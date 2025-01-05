export default async function getMovies(url){

    let movies = {};

    await fetch(url).then(response => response.json()).then(data => movies = data);

    return movies;
}