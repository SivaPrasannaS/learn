import axios from "axios";

const api_uri = "http://localhost:3001";


export const getAllUser = () => axios.get(`${api_uri}/users`);