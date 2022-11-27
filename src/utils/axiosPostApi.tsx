import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER
        ? process.env.NEXT_PUBLIC_SERVER + "/v1/posts"
        : process.env.NEXT_PUBLIC_SERVER_ADD + "/v1/posts",
    // baseURL: "http://localhost:3000/v1/posts",
    timeout: REQUEST_TIMEOUT,
});

export const getPosts = async () => {
    return await axiosApi.get("/");
};

export const getPostById = async (id: string) => {
    return await axiosApi.get(`/${id}`);
};

export const getPostsByCondition = async (nPerPage: number, pageNumber: number, sortBy: string) => {
    return await axiosApi.get(`/?nPerPage=${nPerPage}&pageNumber=${pageNumber}&sortBy=${sortBy}`);
};

export const getPostsByUserId = async (
    nPerPage: number,
    pageNumber: number,
    sortBy: string,
    userId: string
) => {
    return await axiosApi.get(
        `/?nPerPage=${nPerPage}&pageNumber=${pageNumber}&sortBy=${sortBy}&userId=${userId}`
    );
};

export const getPostsByView = async (sortBy: string) => {
    return await axiosApi.get(`/?sortBy=${sortBy}`);
};

export const toggleLikeButton = async (postId: string, userId: string, token: string | null) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    return await axiosApi.patch(`/like/${postId}`, userId, config);
};

export const toggleFollowButton = async (postId: string, userId: string, token: string | null) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axiosApi.patch(`/follow/${postId}`, userId, config);
};

export const addNewPost = async (
    title: string,
    content: string,
    hashtag: string,
    token: string | null,
    bgImg: string | undefined
) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const reqBody = {
        title,
        content,
        hashtag,
        bgImg,
    };

    return await axiosApi.post("/post/", reqBody, config);
};

export const createMoviePost = async (resourceId: number) => {
    const reqBody = {
        resourceId,
    };
    return await axiosApi.post("/movie", reqBody);
};

export const searchPost = ({
    keyword,
    page,
    limit,
}: {
    keyword: string;
    page: number;
    limit: number;
}) =>axiosApi.get(`/search/all?keyword=${keyword}&page=${page}&limit=${limit}`);

interface IUpdatePostParams{
    postId:string,
    postTitle:string,
    content:string,
    hashtag?:string,
    hashtags?:Array<string>,
    bgImg?:string,
    token:string,
}

export const updatePost=({postId,postTitle,content,hashtag,hashtags,bgImg, token}:IUpdatePostParams)=>{
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const reqBody = {
        title:postTitle,
        content,
        hashtag,
        hashtags,
        bgImg,
    };
    return axiosApi.put(`/${postId}`,reqBody, config)
}