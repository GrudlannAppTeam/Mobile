import axios from 'axios';

export const joinToTastingRoom = async ({ token, code }) => {
    try {
        const config = { headers: { Authorization: `Bearer ${token}` }};
        const response = await axios.post(`https://grudlann-app.herokuapp.com/api/tasting-rooms/join`, { code: code }, config);

        return response.data.id;
    } catch (error) {
        return false;
    }
};

export const getTastingRoomById = async ({ token, id }) => {
    try {
        const config = { headers: { Authorization: `Bearer ${token}` }};

        const response = await axios.get(`https://grudlann-app.herokuapp.com/api/tasting-rooms/${id}`, config);

        return response.data;
    } catch (error) {
        console.log(error);
        return false;
    }
};