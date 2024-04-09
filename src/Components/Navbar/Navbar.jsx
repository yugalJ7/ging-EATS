import { NavLink, Link } from "react-router-dom";
import Category from "../Category/Category";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between">
      <div className="navbarLeft flex">
        <Link to={"/"}>
          <span>Home</span>
        </Link>
        <Category />
      </div>
      <div className="navbarSearchbar">
        <input placeholder="Search your favorite recipes" />
      </div>
    </div>
  );
};

export default Navbar;
