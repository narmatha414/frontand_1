document.addEventListener('DOMContentLoaded', () => {
    const movieContainer = document.querySelector('.movie-container');

    // Fetch movies from the mock API
    fetchMovies().then(movies => {
        movies.forEach(movie => {
            const movieCard = createMovieCard(movie);
            movieContainer.appendChild(movieCard);
        });
    });

    // Load watchlist from local storage
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const img = document.createElement('img');
        img.src = movie.image;
        img.alt = movie.title;

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const addButton = document.createElement('button');
        addButton.classList.add('add-to-watchlist');
        addButton.textContent = watchlist.includes(movie.id) ? 'Remove from Watchlist' : 'Add to Watchlist';
        if (watchlist.includes(movie.id)) {
            addButton.classList.add('added');
        }

        addButton.addEventListener('click', () => {
            if (watchlist.includes(movie.id)) {
                watchlist = watchlist.filter(id => id !== movie.id);
                addButton.textContent = 'Add to Watchlist';
                addButton.classList.remove('added');
                addButton.classList.add('removed');
            } else {
                watchlist.push(movie.id);
                addButton.textContent = 'Remove from Watchlist';
                addButton.classList.remove('removed');
                addButton.classList.add('added');
            }
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            updateWatchlistOnServer(movie.id, watchlist.includes(movie.id));
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(addButton);

        return card;
    }

    function updateWatchlistOnServer(movieId, isAdded) {
        // Simulate API call to update watchlist on the server
        mockApi.updateWatchlist(movieId, isAdded).then(response => {
            console.log('Watchlist updated on server:', response);
        });
    }
});

async function fetchMovies() {
    // Simulate fetching movies from a server
    const movies = await mockApi.getMovies();
    return movies;
}