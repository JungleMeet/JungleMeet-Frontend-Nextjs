import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: "http://localhost:3000/v1/emails",
    timeout: REQUEST_TIMEOUT,
});

export const sendResetPwdEmail = async (data: string) => {
    const reqBody = {
        to: data
    }
    return await axiosApi.post(`/sendEmail`, reqBody);
};
