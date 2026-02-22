import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const fetchFoodList = async () => {
    try {
        const response = await axios.get(`${url}/api/foods`);
        return response.data;
    } catch (error) {
        console.log('Error fetching food list:', error);
        throw error;
    }    
}

export const fetchFoodDetails = async (id) => {
    try {
        const response = await axios.get(`${url}/api/foods/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching food details:', error);
        throw error;
    }
    
}