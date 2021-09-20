const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'TopRated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_ganres=28`,
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_ganres=35`,
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_ganres=27`,
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_ganres=10749`,
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_ganres=9648`,
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_ganres=878`,
    },
    fetchWestern: {
        title: 'Western-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_ganres=37`,
    },
    fetchAnimation: {
        title: 'Animation-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_ganres=16`,
    },
    fetchTv: {
        title: 'Tv',
        url: `/discover/movie?api_key=${API_KEY}&with_ganres=10770`,
    },
}
