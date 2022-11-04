import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: "http://localhost:3000/v1/posts",
    timeout: REQUEST_TIMEOUT,    
});

export const getPostsByCondition = async ( nPerPage: number, pageNumber: number, sortBy: string) => {
    return await axiosApi.get(`/?nPerPage=${nPerPage}&pageNumber=${pageNumber}&sortBy=${sortBy}`);
}

export const addNewPost = async (title: string, content: string, token: string| null) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const reqBody = {
        title,
        content,
    };
    
    return await axiosApi.post("/post/", reqBody, config)
}
