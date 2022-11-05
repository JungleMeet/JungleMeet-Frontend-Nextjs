import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: "http://localhost:3000/v1/comments",
    timeout: REQUEST_TIMEOUT,
});

export const getComments = async () => {
    return await axiosApi.get("/");
};

export const getCommentById = async (id: string) => {
    return await axiosApi.get(`/${id}`);
};
