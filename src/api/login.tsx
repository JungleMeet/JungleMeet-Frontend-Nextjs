import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/v1',
});

const login = async(email: string, password: string) => {
    const res = await axiosInstance.post('/users/login', {email, password});
    return res;
}

export default login;