import React from "react";
import "../index.css";

export default function Categories({ category, filterMenu }) {
  return (
    <div className="btn-container">
      {category.map((item, index) => {
        return (
          <div key={index}>
            <button
              type="button"
              className="filter-btn"
              onClick={() => filterMenu(item)}
            >
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
}
