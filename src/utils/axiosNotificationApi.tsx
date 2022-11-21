import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER
        ? process.env.NEXT_PUBLIC_SERVER + "/v1/notifications"
        : process.env.NEXT_PUBLIC_SERVER_ADD + "/v1/notifications",
    timeout: REQUEST_TIMEOUT,
});

interface IgetNotifications{
    pageNumber: number;
    limit: number;
    token: string | null;
}

export const getNotifications = async ({pageNumber, limit, token}:IgetNotifications) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axiosApi.get(`?pageNumber=${pageNumber}&limit=${limit}`, config);
};

export const readSingleNotifications = async (notificationId:string|null, token:string|null) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const reqBody = {
        notificationId: notificationId
    }
    return await axiosApi.patch(`/`, reqBody, config );
};