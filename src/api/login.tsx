import axios from 'axios';

const login = async(email: string, password: string) => {
    const res = await axios.post('/users/login', {email, password});
    return res;
}

export default login;