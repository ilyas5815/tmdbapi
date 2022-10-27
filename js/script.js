const Api_key = "api_key=9c3c7de4a05de371d8d36d8440b4de69";
const Base_url = "https://api.themoviedb.org/3";
const Api_url = Base_url + "/discover/movie?sort_by=popularity.desc&" + Api_key;
const Img_url = "https://image.tmdb.org/t/p/w500";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const searchUrl = Base_url + "/search/movie?" + Api_key;


getMovies(Api_url);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = '';
    data.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `<img src="${Img_url + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="green">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>
                        Overview
                    </h3>
                    ${overview}
                </div>
        `
        main.appendChild(movieEl);
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = inp.value;
    if (searchTerm) {
        getMovies(searchUrl + '&query=' + searchTerm)
    } else {
        getMovies(Api_url);
    }
})

