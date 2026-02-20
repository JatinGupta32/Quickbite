// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <div className="p-5 mb-4 bg-light rounded-3 mt-1 header">
//       <div className="container-fluid py-5">
//         <h1 className="display-5 fw-bold">Order your favorite food here</h1>
//         <p className="col-md-8 fs-4">
//           Discover the best food and drinks in Bengaluru
//         </p>
//         <Link to="/explore" className="btn btn-primary">
//           Explore
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  return (
    <div className="hero-section">
  <div className="hero-overlay">
    <div className="hero-content text-center">
      <h1 className="hero-title">
        Order Your Favorite Food 🍕
      </h1>
      <p className="hero-subtitle">
        Discover the best food & drinks in Bengaluru
      </p>
      <Link to="/explore" className="hero-btn">
        Explore Now
      </Link>
    </div>
  </div>
</div>
  );
};

export default Header;