import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER
        ? process.env.NEXT_PUBLIC_SERVER + "/v1/comments"
        : process.env.NEXT_PUBLIC_SERVER_ADD + "/v1/comments",
    timeout: REQUEST_TIMEOUT,
});

interface createNewComment {
    content:string;
    postId?: string;
    parentCommentId?:string;
    token:string;
}

export const getComments = async (id: string) => {
    return await axiosApi.get(`/?postId=${id}`);
};

export const getCommentById = async (id: string) => {
    return await axiosApi.get(`/${id}`);
};
export const getCommentsByCondition = async ( id: string,sortBy: string,nPerPage: number, pageNumber: number ) => {
    return await axiosApi.get(`/?postId=${id}&sortBy=${sortBy}&nPerPage=${nPerPage}&pageNumber=${pageNumber}`);
}

export const createComment=({content, postId, parentCommentId,token}:createNewComment)=>{
    return axiosApi.post('/',{content, postId, parentCommentId},{headers:{Authorization:`Bearer ${token}`}} )
}