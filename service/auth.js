import axios from 'axios';

export const login = async ({ email, password }) => {
    try {
        const res = await axios.post('https://grudlann-app.herokuapp.com/api/users/login', {
            email: email,
            password: password
        });

        return res.data;
    } catch (err) {
        return false;
    }

};