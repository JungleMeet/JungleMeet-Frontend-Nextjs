import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER
        ? process.env.NEXT_PUBLIC_SERVER + "/v1/hashtags"
        : process.env.NEXT_PUBLIC_SERVER_ADD + "/v1/hashtags",
    timeout: REQUEST_TIMEOUT,
});

export const addNewHashtag = async ( category: string) => {
    const reqBody = { category };
    return await axiosApi.post("/", reqBody);
};

export const searchHashtag = (category: string) => {
    return axiosApi.get(`/search?category=${category}`)
}

