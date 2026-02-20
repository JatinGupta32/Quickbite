import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../service/foodService";
import {
  addToCart,
  getCartData,
  removeQtyFromCart,
} from "../service/cartService";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {

    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [token, setToken] = useState("");

    const increaseQty = async (foodId) => {
        setQuantities((prev) => ({ ...prev, [foodId]: (prev[foodId] || 0) + 1 }));
        await addToCart(foodId, token);
    };
    
    const decreaseQty = async (foodId) => {
        setQuantities((prev) => ({
            ...prev,
            [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0,
        }));
        await removeQtyFromCart(foodId, token);
    };

    const removeFromCart = (foodId) => {
        setQuantities((prevQuantities) => {
        const updatedQuantitites = { ...prevQuantities };
        delete updatedQuantitites[foodId];
        return updatedQuantitites;
        });
    };

    const loadCartData = async (token) => {
        const items = await getCartData(token);
        setQuantities(items);
    };
    
    const contextValue = {
        foodList,
        quantities,
        increaseQty,
        decreaseQty,
        removeFromCart,
        token,
        setToken,
        loadCartData,
        setQuantities
    }

    useEffect(() => {
        async function loadData(){
            const data = await fetchFoodList();
            console.log("fetchFoodList:", data);
            setFoodList(data);
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}