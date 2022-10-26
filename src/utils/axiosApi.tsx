import axios from "axios";

const REQUEST_TIMEOUT = 10000;

const axiosApi = axios.create({
    baseURL: "http://localhost:3000/v1",
    timeout: REQUEST_TIMEOUT,
});

export default axiosApi