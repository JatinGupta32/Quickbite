import React, { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import "./ExploreFood.css";

const ExploreFood = () => {
  const [category, setCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  return (
    <section className="explore-page">
    <div className="explore-container">
      <div className="search-box">
        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Biryani">Biryani</option>
          <option value="Burger">Burger</option>
          <option value="Cake">Cakes</option>
          <option value="Ice Cream">Ice Creams</option>
          <option value="Pizza">Pizza</option>
          <option value="Rolls">Rolls</option>
          <option value="Salad">Salad</option>
          <option value="Main Meals">Main Meals</option>
        </select>

        <input
          type="text"
          className="search-input"
          placeholder="Search your favorite dish..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button className="search-btn">🔍</button>
      </div>
    </div>

    <FoodDisplay category={category} searchText={searchText} />
  </section>
  );
};

export default ExploreFood;