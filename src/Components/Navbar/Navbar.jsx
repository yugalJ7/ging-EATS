import { Link } from "react-router-dom";
import Category from "../Category/Category";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <div className="navbar flex justify-around p-2 fixed top-1 w-full bg-[#FFDDBB] rounded-full z-30">
      <div className="navbarLeft flex  items-center w-1/6 justify-center">
        <Link to={"/"}>
          <img
            src="/assets/website-logo.png"
            alt="recipe-icon"
            className="w-12 h-12 ml-9"
          />
        </Link>
      </div>
      <div className="flex w-3/5 items-center  gap-8 justify-center">
        <Link to={"/"}>
          <span className=" hidden md:flex">Home</span>
        </Link>
        <Category />
      </div>
      <div className="navbarSearchbar flex  items-center justify-center w-1/3">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
