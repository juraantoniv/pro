import axios from "axios";
import {baseURL} from "../configs/Urls/Urls";
import {myAccessToken} from "../configs";



const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config)=>{
    const access = myAccessToken

    if (access){
        config.headers.Authorization = ` Bearer ${access}`
    }
    return config
})

axiosService.interceptors.response.use((config) => {
    return config
})

export {
    axiosService
}