import {axiosService} from "./axios.service";
import {urls} from "../configs/Urls/Urls";


const movieService = {
    getAll: (page=1) => axiosService.get(urls.movies, {params:{page}}),
    getAccount: () => axiosService.get(urls.account),
    getConfiguration: () => axiosService.get(urls.configuration),
    getMovie: (name) => axiosService.get(`${urls.search}/movie?query=${name}`),
}

export {
    movieService
}