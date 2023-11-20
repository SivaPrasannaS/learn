import axios from "axios";

const api_uri = "http://localhost:3001";

export const getAllUser = () => axios.get(`${api_uri}/users`);


export const getUserById = (id) => axios.get(`${api_uri}/users/${id}`);

export const addNewUser = async (data) => {
    try {
        const { data: existingData } = await axios.get(`${api_uri}/users`);
        const newId = Math.max(...existingData.map(user => user.id)) + 1;
        const newData = {
            ...data,
            id: newId
        };
        await axios.post(`${api_uri}/users`, newData);
    } catch (error) {
        console.error('Error adding new user:', error);
        throw error;
    }
};


export const updateUserData = (id, data) => axios.put(`${api_uri}/users/${id}`, data);

export const deleteExistingUser = async (id) => await axios.delete(`${api_uri}/users/${id}`);