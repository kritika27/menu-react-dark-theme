import React from "react";
import "../index.css";

export default function Menu({ menu, isDarkMode }) {
  return (
    <div className="section-center">
      {menu.map((item) => {
        const { title, img, desc, price, id } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4 className="food-item">{title}</h4>

                <h4 className="price">${price}</h4>
              </header>
              <p
                className={
                  isDarkMode ? "item-text item-dark" : "item-text light"
                }
              >
                {desc}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
