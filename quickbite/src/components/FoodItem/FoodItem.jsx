// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { StoreContext } from "../../context/StoreContext";

// const FoodItem = ({ name, description, id, imageUrl, price }) => {
  
//   const {quantities, increaseQty, decreaseQty} = useContext(StoreContext);  

//   return (
//     <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
//       <div className="card" style={{ maxWidth: "320px" }}>
//         <Link to={`/food/${id}`}>
//           <img
//             src={imageUrl}
//             className="card-img-top"
//             alt="Product Image"
//             height={300}
//             width={60}
//           />
//         </Link>
//         <div className="card-body">
//           <h5 className="card-title">{name}</h5>
//           <p className="card-text">{description}</p>
//           <div className="d-flex justify-content-between align-items-center">
//             <span className="h5 mb-0">&#8377;{price}</span>
//             <div>
//               <i className="bi bi-star-fill text-warning"></i>
//               <i className="bi bi-star-fill text-warning"></i>
//               <i className="bi bi-star-fill text-warning"></i>
//               <i className="bi bi-star-fill text-warning"></i>
//               <i className="bi bi-star-half text-warning"></i>
//               <small className="text-muted">(4.5)</small>
//             </div>
//           </div>
//         </div>
//         <div className="card-footer d-flex justify-content-between bg-light">
//           <Link className="btn btn-success btn-sm" to={`/food/${id}`}>
//             View Food
//           </Link>
//             {quantities[id] > 0 ? (
//             <div className="d-flex align-items-center gap-2">
//               <button
//                 className="btn btn-danger btn-sm"
//                 onClick={() => decreaseQty(id)}
//               >
//                 <i className="bi bi-dash-circle"></i>
//               </button>
//               <span className="fw-bold">{quantities[id]}</span>
//               <button
//                 className="btn btn-success btn-sm"
//                 onClick={() => increaseQty(id)}
//               >
//                 <i className="bi bi-plus-circle"></i>
//               </button>
//             </div>
//           ) : (
//             <button
//               className="btn btn-primary btn-sm"
//               onClick={() => increaseQty(id)}
//             >
//               <i className="bi bi-plus-circle"></i>
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FoodItem

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