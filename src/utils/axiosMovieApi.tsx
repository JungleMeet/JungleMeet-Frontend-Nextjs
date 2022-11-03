import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_ADD + "/v1/movies",
    timeout: REQUEST_TIMEOUT,
});

export const getNowPlaying = async () => {
    return await axiosApi.get("/list?tag=now_playing");
};

export const getUpcoming = async () => {
    return await axiosApi.get("/list?tag=upcoming");
};

export const getPopular = async () => {
    return await axiosApi.get("/list?tag=popular");
};

export const getTopRated = async () => {
    return await axiosApi.get("/list?tag=top_rated");
};

export const searchMovieName = async (name: string, page = 1) => {
    return await axiosApi.get(`/search?name=${name}&page=${page}`);
};
export default axiosApi;
