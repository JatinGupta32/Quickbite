import React, { useRef } from "react";
import { categories } from "../../assets/assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  const menuRef = useRef(null);

  const scrollLeft = () => {
    menuRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    menuRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="explore-section">
      <div className="explore-header">
        <div>
          <h2>Explore Our Menu</h2>
          <p>Discover delicious dishes from curated categories</p>
        </div>

        <div className="scroll-buttons">
          <FaChevronLeft onClick={scrollLeft} />
          <FaChevronRight onClick={scrollRight} />
        </div>
      </div>

      <div className="category-slider" ref={menuRef}>
        {categories.map((item, index) => (
          <div
            key={index}
            className={`category-card ${
              item.category === category ? "active" : ""
            }`}
            onClick={() =>
              setCategory((prev) =>
                prev === item.category ? "All" : item.category
              )
            }
          >
            <div className="image-wrapper">
              <img src={item.icon} alt={item.category} />
            </div>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;