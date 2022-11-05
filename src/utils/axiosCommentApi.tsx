import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: "http://localhost:3000/v1/comments",
    timeout: REQUEST_TIMEOUT,
});

export const getComments = async (id: string) => {
    return await axiosApi.get(`/?postId=${id}`);
};

export const getCommentById = async (id: string) => {
    return await axiosApi.get(`/${id}`);
};
