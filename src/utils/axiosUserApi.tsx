import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_SERVER_ADD+ "/v1/users",
    baseURL: process.env.NEXT_PUBLIC_SERVER
        ? process.env.NEXT_PUBLIC_SERVER + "/v1/users"
        : process.env.NEXT_PUBLIC_SERVER_ADD + "/v1/users",
    timeout: REQUEST_TIMEOUT,
});

export const login = async ( email: string, password: string) => {
    const loginBody = {
        email,
        password
    }
    return await axiosApi.post("/login",loginBody);
}

export const signup = async (email: string, name: string, password: string) => {
    const signupBody = {
        email,
        name,
        password,
    };
    return await axiosApi.post("/", signupBody);
};

export const getUserById = async (id: string) => {
    return await axiosApi.get(`/${id}`);
};

export const getUserProfile = async (userId: string) =>{
    return await axiosApi.get(`/${userId}/profile`);
};

export const verifyToken = async (token: string | null) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axiosApi.get("/verify", config);
};

export const emailResetPwd = async (code: string, email: string, newPwd: string) => {
    const reqBody = {
        email,
        newPwd,
    };
    return await axiosApi.patch(`/email?code=${code}`, reqBody);
};

export const toggleFollowing = async (token: string | null, following: string) => {

    return await axiosApi.put('/following/', {following}, {headers: { Authorization: `Bearer ${token}` }});
}

export const changePwd = async(token: string | null, previousPwd:string, newPwd: string) => {
    const reqBody = {
        oldPassword: previousPwd,
        newPassword: newPwd
    }
    return await axiosApi.post('/reset', reqBody, {headers: { Authorization: `Bearer ${token}` }});

}
export const changeAvatar = async(token: string | null, avatar: string) => {
    const reqBody = {
        avatar: avatar,
    }
    return await axiosApi.put('/', reqBody, {headers: { Authorization: `Bearer ${token}` }});
}
export const changeBgImg = async(token: string | null, bgImg: string) => {
    const reqBody = {
        bgImg: bgImg,
    }
    return await axiosApi.put('/', reqBody, {headers: { Authorization: `Bearer ${token}` }});
}
