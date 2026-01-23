
import React from 'react'
import "./component.css"

const Categories = ({ category, rating, setRating, sortBy, setSortBy }) => {
  const categoryTitle = {
    popular: "Popular 🔥",
    top_rated: "Top Rated ⭐",
    upcoming: "Upcoming 🎬",
  };

  return (
    <div className="category-container textColor">
      <div className="category">
        <h1 className='category-heading'>{categoryTitle[category]}</h1>

        <div className="rating">
          <p onClick={() => setRating(8)}>8+ Star</p>
          <p onClick={() => setRating(7)}>7+ Star</p>
          <p onClick={() => setRating(6)}>6+ Star</p>
          <p onClick={() => setRating(null)}>All</p>

          <div className="sort">
            <label>Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Date</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

