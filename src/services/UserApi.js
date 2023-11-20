import axios from "axios";

const api_uri = "http://localhost:3001";

export const getAllUser = () => axios.get(`${api_uri}/users`);

export const addNewUser = async (data) => {
    const { data: existingData } = await axios.get(`${api_uri}/users`);
    const newId = Math.max(...existingData.map(user => user.id, 0) + 1);
    const newData = {
        ...data,
        id: newId
    }
    axios.post(`${api_uri}/users`, newData);
};