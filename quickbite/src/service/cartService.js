import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const addToCart = async (foodId, token) => {
    try {
        await axios.post(
            `${url}/api/cart`,
            { foodId },
            { headers: { Authorization: `Bearer ${token}` } }
          );
    } catch (error) {
        console.error('Error while adding the cart data', error);
    }
}

export const removeQtyFromCart = async (foodId, token) => {
    try {
        await axios.post(
            `${url}/api/cart/remove`,
            { foodId },
            { headers: { Authorization: `Bearer ${token}` } }
          );
    } catch (error) {
        console.error('Error while removing qty from cart', error);
    }
}

export const getCartData = async (token) => {
    try {
        const response = await axios.get(`${url}/api/cart`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          return response.data.items;
    } catch (error) {
        console.error('Error while fetching the cart data', error);
    }
}

export const clearCartItems = async (token, setQuantities) => {
    try {
        await axios.delete(`${url}/api/cart`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setQuantities({});
    } catch (error) {
        console.error('Error while clearing the cart', error);
        throw error;
    }
}

