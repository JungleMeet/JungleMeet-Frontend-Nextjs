import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: "http://localhost:3000/v1/notifications",
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
    return await axiosApi.get(`/?pageNumber=${pageNumber}?limit=${limit}`, config);
};