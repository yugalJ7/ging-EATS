import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const fetchUserInput = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };
  return (
    <form
      onSubmit={fetchUserInput}
      className="flex bg-[#FFAF60] items-center justify-center rounded-full w-5/6 h-full"
    >
      <input
        placeholder="Search your favorite recipes"
        className="w-3/5 focus:outline-none text-sm bg-[#FFAF60] text-white placeholder:text-white"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <SearchIcon htmlColor="white" />
    </form>
  );
};

export default Search;
