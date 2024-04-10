import { NavLink, Link, BrowserRouter } from "react-router-dom";
import Category from "../Category/Category";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="navbar flex justify-around p-2 fixed top-1 w-full bg-[#FFDDBB] rounded-full z-30">
      <div className="navbarLeft flex  items-center w-1/6 justify-center">
        <img
          src="/assets/website-logo.png"
          alt="recipe-icon"
          className="w-12 h-12 ml-9"
        />
      </div>
      <div className="flex w-3/5 items-center  gap-8 justify-center">
        <Link to={"/"}>
          <span>Home</span>
        </Link>
        <Category />
      </div>
      <div className="navbarSearchbar flex  items-center justify-center w-1/3">
        <div className="flex bg-[#FFAF60] items-center justify-center rounded-full w-5/6 h-full">
          <input
            placeholder="Search your favorite recipes"
            className="w-3/5 focus:outline-none text-sm bg-[#FFAF60] text-white placeholder:text-white"
          />
          <SearchIcon htmlColor="white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
