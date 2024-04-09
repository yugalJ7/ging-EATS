import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const categoryData = [
  {
    id: 1,
    name: "Indian",
    url: "/cuisine/Indian",
  },
  {
    id: 2,
    name: "Italian",
    url: "/cuisine/Italian",
  },
  {
    id: 3,
    name: "Chinese",
    url: "/cuisine/Chinese",
  },
];

const Category = () => {
  const [dropMenu, setDropMenu] = useState(false);
  return (
    <div>
      <span onClick={() => setDropMenu(!dropMenu)}>Category</span>
      {/* icon */}
      {dropMenu ? (
        <div>
          {categoryData.map((item) => {
            return (
              <NavLink key={item.id} to={item.url}>
                {item.name}
              </NavLink>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Category;
