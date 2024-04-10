import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
    <div
      onClick={() => setDropMenu(!dropMenu)}
      className="cursor-pointer relative "
    >
      <span>Category</span>
      <ArrowDropDownIcon />
      {dropMenu ? (
        <div className="flex flex-col absolute w-40 mt-1 bg-[#FFAF60] p-2 rounded">
          {categoryData.map((item) => {
            return (
              <NavLink key={item.id} to={item.url} className="my-2">
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
