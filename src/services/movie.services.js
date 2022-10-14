

import {axiosService} from "./Axios.service";
import {urls} from "../configs/Urls/Urls";

const movieService = {
    getAll: (page=1) => axiosService.get(urls.movies, {params:{page}}),

}

export {
    movieService
}