import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../service/foodService";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {

    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] = useState({});
    
    const increaseQty = async (foodId) => {
        setQuantities((prev) => ({ ...prev, [foodId]: (prev[foodId] || 0) + 1 }));
        // await addToCart(foodId, token);
    };
    
    const decreaseQty = async (foodId) => {
        setQuantities((prev) => ({
            ...prev,
            [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0,
        }));
        // await removeQtyFromCart(foodId, token);
    };

    const removeFromCart = (foodId) => {
        setQuantities((prevQuantities) => {
        const updatedQuantitites = { ...prevQuantities };
        delete updatedQuantitites[foodId];
        return updatedQuantitites;
        });
    };
    
    const contextValue = {
        foodList,
        quantities,
        increaseQty,
        decreaseQty,
        removeFromCart
    }

    useEffect(() => {
        async function loadData(){
            const data = await fetchFoodList();
            // console.log(data);
            setFoodList(data);
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}