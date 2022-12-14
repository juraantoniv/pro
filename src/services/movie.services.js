import {axiosService} from "./axios.service";
import {urls} from "../configs/Urls/Urls";


const movieService = {
    getAll: (page=1) => axiosService.get(urls.movies, {params:{page}}),
    getAccount: () => axiosService.get(urls.account),
    getConfiguration: () => axiosService.get(urls.configuration),
    getMovie: (id,page =1) => axiosService.get(`${urls.search}/movie?query=${id}`,{params:{page}}),
    getGenres: (name,page =1) => axiosService.get(`${urls.movies}?with_genres=${name}`,{params:{page}}),
    getTopRated:() => axiosService.get(urls.top_rated),
    getDetails:(id) => axiosService.get(`${urls.get_details}/${id}`),
    getReviews:(id)=>axiosService.get(`${urls.get_reviews}/${id}/reviews`)
}

export {
    movieService
}