import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const url = "https://api.spoonacular.com/recipes/random";

const RecipeList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // fetchRecipeList();
  }, []);

  const fetchRecipeList = async () => {
    const api = await fetch(
      `${url}?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=30`
    );
    const data = await api.json();
    setList(data.recipes);
    console.log(data);
  };

  return (
    <div className="">
      {list.map((items) => {
        const { image, id, title } = items;
        return (
          <Link to={"/recipe/" + id}>
            <div key={id} className="shadow-lg">
              <img src={image} alt="" className="w-16 h-16" />
              <p>{title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipeList;
