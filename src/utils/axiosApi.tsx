import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: "http://localhost:3000/v1",
    timeout: REQUEST_TIMEOUT,
});

export const getNowPlaying = async () => {
    return await axiosApi.get("/movies/list?tag=now_playing");
}

export const getUpcoming = async () => {
    return await axiosApi.get("/movies/list?tag=upcoming");
}

export const getPopular = async () => {
    return await axiosApi.get("/movies/list?tag=popular");

}

export const getTopRated = async () => {
    return await axiosApi.get("/movies/list?tag=top_rated");

}

export const getHeroBannerMovies = async () => {
    return await axiosApi.get("/movies/tops");
}

export const getYoutubeLinkById = async (id:number) => {
    return await axiosApi.get(`/trailers/${id}`);
}

export default axiosApi;
