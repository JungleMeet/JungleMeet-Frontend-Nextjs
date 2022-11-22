import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER
        ? process.env.NEXT_PUBLIC_SERVER + "/v1/emails"
        : process.env.NEXT_PUBLIC_SERVER_ADD + "/v1/emails",
    timeout: REQUEST_TIMEOUT,
});

export const sendResetPwdEmail = async (data: string) => {
    const reqBody = {
        to: data
    }
    return await axiosApi.post(`/sendEmail`, reqBody);
};
