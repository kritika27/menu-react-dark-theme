import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import Categories from "./components/Categories";
import data from "./data";
import Menu from "./components/Menu";
import "./index.css";

export default function App() {
  const [menu, setMenu] = useState(data);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const categories = ["all", ...new Set(data.map((item) => item.category))];

  
  const filterMenu = (category) => {
    if (category === "all") {
      setMenu(data);
    } else {
      const newItems = data.filter((item) => item.category === category);
      setMenu(newItems);
    }
  };
  return (
    <div
      className={isDarkMode ? "menu section dark" : "menu section light"}
    >
      <div className={isDarkMode ? "title dark" : "title light"}>
        <h2>Menu Card</h2>

        <DarkModeToggle
          className="btn"
          onChange={() => setIsDarkMode(!isDarkMode)}
          checked={isDarkMode}
          size={75}
        />
      </div>
      <Categories category={categories} filterMenu={filterMenu} />
      <Menu menu={menu} isDarkMode={isDarkMode} />
    </div>
  );
}
