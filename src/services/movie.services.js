import {axiosService} from "./axios.service";
import {urls} from "../configs/Urls/Urls";


const movieService = {
    getAll: (page=1) => axiosService.get(urls.movies, {params:{page}}),
    // getAll: (page=3) => axiosService.get(`${urls.movies}/page=${page}`),
    getAccount: () => axiosService.get(urls.account),
    getConfiguration: () => axiosService.get(urls.configuration),
    getMovie: (name) => axiosService.get(`${urls.search}/movie?query=${name}`),
    getGenres: (name) => axiosService.get(`${urls.movies}?with_genres=${name}`),
}

export {
    movieService
}