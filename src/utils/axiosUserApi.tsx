import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_SERVER_ADD+ "/v1/users",
    baseURL: process.env.NEXT_PUBLIC_SERVER ? process.env.NEXT_PUBLIC_SERVER + "/v1/users" : process.env.NEXT_PUBLIC_SERVER_ADD + "/v1/users",
    timeout: REQUEST_TIMEOUT,
});

export const login = async (email: string, password: string) => {
    const loginBody = {
        email,
        password,
    };
    return await axiosApi.post("/login", loginBody);
};

export const getUserById = async (id: string) => {
    return await axiosApi.get(`/${id}`);
};

export const verifyToken = async (token: string | null) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return await axiosApi.get('/verify', config);
}

export const emailResetPwd = async (code:string, email:string, newPwd:string) => {
    const reqBody = {
        email, 
        newPwd, 
    }
    return await axiosApi.patch(`/email?code=${code}`, reqBody)
}