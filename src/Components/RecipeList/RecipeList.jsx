import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const url = "https://api.spoonacular.com/recipes/random";

const RecipeList = () => {
  const [list, setList] = useState([]);

  const fetchRecipeList = async () => {
    const api = await fetch(
      `${url}?apiKey=f1dc4edfb1084f1f8f60009775e1cbaa&number=30`
    );
    const data = await api.json();
    setList(data.recipes);
    console.log(data);
  };

  useEffect(() => {
    fetchRecipeList();
  }, []);

  return (
    <div className="grid grid-cols-1 grid-rows-auto gap-6 md:grid-cols-3 sm:grid-cols-2 w-3/4 ease-out ">
      {list &&
        list.map((items) => {
          const { image, id, title } = items;
          return (
            <Link key={id} to={"/recipe/" + id}>
              <div className="shadow-lg h-[17rem] rounded-xl hover:scale-110 hover:bg-[#FFF3E8] flex flex-col ">
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
