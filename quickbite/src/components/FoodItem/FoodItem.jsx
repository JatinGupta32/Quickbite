import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";

const FoodItem = ({ name, description, id, imageUrl, price }) => {
  const { quantities, increaseQty, decreaseQty } =
    useContext(StoreContext);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="food-card">

        {/* Image Section */}
        <div className="food-image-wrapper">
          <Link to={`/food/${id}`}>
            <img src={imageUrl} alt={name} />
          </Link>

          <div className="price-badge">₹{price}</div>
        </div>

        {/* Content */}
        <div className="food-content">
          <h5>{name}</h5>
          <p>{description}</p>

          {/* Rating */}
          <div className="food-rating">
            ⭐⭐⭐⭐☆
            <span>(4.5)</span>
          </div>
        </div>

        {/* Footer */}
        <div className="food-footer">
          <Link to={`/food/${id}`} className="view-btn">
            View
          </Link>

          {quantities[id] > 0 ? (
            <div className="qty-control">
              <button onClick={() => decreaseQty(id)}>-</button>
              <span>{quantities[id]}</span>
              <button onClick={() => increaseQty(id)}>+</button>
            </div>
          ) : (
            <button
              className="add-btn"
              onClick={() => increaseQty(id)}
            >
              + Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;