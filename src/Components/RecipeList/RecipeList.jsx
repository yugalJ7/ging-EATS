import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const url = "https://api.spoonacular.com/recipes/random";

const RecipeList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchRecipeList();
  }, []);

  const fetchRecipeList = async () => {
    const api = await fetch(
      `${url}?apiKey=${process.env.REACT_APP_RECIPE_API_KEY_TWO}&number=30`
    );
    const data = await api.json();
    setList(data.recipes);
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 grid-rows-auto gap-6 md:grid-cols-3 sm:grid-cols-2 w-3/4 ease-out ">
      {list.map((items) => {
        const { image, id, title } = items;
        return (
          <Link to={"/recipe/" + id}>
            <div
              key={id}
              className="shadow-lg h-[17rem] rounded-xl hover:scale-110 hover:bg-[#FFF3E8] flex flex-col "
            >
              <img
                src={image}
                alt="dish"
                className="w-full h-48 rounded-t-xl "
              />
              <p className="px-6 py-4">{title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipeList;
