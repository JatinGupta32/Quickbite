import React from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category, searchText}) => {

  const {foodList} = useContext(StoreContext);
//   console.log(foodList);
  const filteredFoods = foodList.filter(food => (
        (category === 'All' || food.category === category) &&
        food.name.toLowerCase().includes(searchText.toLowerCase())
    ));

  return (
    <div className="container-fluid p-0 m-0 explore-food-wrapper">
        <div className="row">
            {filteredFoods.length > 0 ? (
                filteredFoods.map((food, index) => (
                    <FoodItem key={index} 
                        name={food.name} 
                        description={food.description}
                        id={food.id}
                        imageUrl={food.imageUrl}
                        price={food.price} />
                ))
            ) : (
                <div className="text-center mt-4">
                    <h4>No food found.</h4>
                </div>
            )}
        </div>
    </div>
  )
}

export default FoodDisplay