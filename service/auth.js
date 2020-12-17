import axios from 'axios';

export const login = async ({ email, password }) => {
    try {
        const res = await axios.post('https://grudlann-app.herokuapp.com/api/users/login', {
            email: email,
            password: password
        });

        return JSON.stringify(res.data.nick);
    } catch (err) {
        alert('Niepoprawne dane   ');
    }

};