import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: "http://localhost:3000/v1/posts",
    timeout: REQUEST_TIMEOUT,
});

export const getPosts = async () => {
    return await axiosApi.get("/");
};

export const getPostById = async (id: string) => {
    return await axiosApi.get(`/${id}`);
};
