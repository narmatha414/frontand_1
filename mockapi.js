const mockApi = {
    getMovies: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: 'Inception', image: 'https://via.placeholder.com/200' },
                    { id: 2, title: 'Interstellar', image: 'https://via.placeholder.com/200' },
                    { id: 3, title: 'The Dark Knight', image: 'https://via.placeholder.com/200' }
                ]);
            }, 1000);
        });
    },

    updateWatchlist: (movieId, isAdded) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Movie ${movieId} ${isAdded ? 'added to' : 'removed from'} watchlist`);
                resolve({ success: true });
            }, 500);
        });
    }
};