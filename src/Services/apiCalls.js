import axios from "axios";

const root = "http://localhost:4000/"

export const logMe = async (body) => {

    return await axios.post(`${root}login`, body);
} 