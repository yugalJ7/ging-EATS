import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const url = "https://api.spoonacular.com/recipes/";
const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();
  const getCuisine = async (type) => {
    const data = await fetch(
      `${url}complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY_TWO}&cuisine=${type}`
    );
    const fetchData = await data.json();
    console.log(fetchData.results);
    setCuisine(fetchData.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <div className="mt-28 flex flex-col items-center gap-5">
      <p className="text-3xl font-medium">{params.type}</p>
      <div className="grid grid-cols-1 grid-rows-auto gap-6 md:grid-cols-3 sm:grid-cols-2 w-3/4 ease-out ">
        {cuisine.map((items) => {
          return (
            <Link to={"/recipe/" + items.id}>
              <div
                key={items.id}
                className="shadow-lg h-[17rem] rounded-xl hover:scale-110 hover:bg-[#FFF3E8] flex flex-col "
              >
                <img
                  src={items.image}
                  alt={items.title}
                  className="w-full h-48 rounded-t-xl "
                />
                <p className="px-6 py-4">{items.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cuisine;
