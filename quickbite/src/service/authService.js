import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const registerUser = async (data) => {
    try {
        const response = await axios.post(
            `${url}/api/register`,
            data
          );
        return response
    } catch (error) {
        throw error;
    }
}

export const login = async (data) => {
    try {
        const response = await axios.post(`${url}/api/login`, data);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
}