import axios from "axios";
import { toast } from "react-toastify";

const API_URL = 'http://localhost:8080/api/foods';


export const addFood = async (foodData, image) => {
    const formdata = new FormData();
    formdata.append('food', JSON.stringify(foodData));
    formdata.append('file', image);

    try{
        const response = await axios.post(API_URL, formdata, {headers: {"Content-Type": "multipart/form-data"}});
        if(response.status === 200){
            console.log("Food added successfully");
            toast.success("Food added successfully");
        }
    } catch (error) {
        console.error("Error while adding food", error);
        throw error;
    }
}

export const getFoodList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error fetching food list', error);
        throw error;
    }
}

export const deleteFood = async (foodId) => {
    try {
        const response = await axios.delete(API_URL+"/"+foodId);
        return response.status === 204;
    } catch (error) {
        console.log('Error while deleting the food.', error);
        throw error;
    }
}