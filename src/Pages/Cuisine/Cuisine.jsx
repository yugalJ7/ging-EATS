import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://api.spoonacular.com/recipes/";
const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();
  const getCuisine = async (type) => {
    const data = await fetch(
      `${url}complexSearch?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&cuisine=${type}`
    );
    const fetchData = await data.json();
    console.log(fetchData.results);
    setCuisine(fetchData.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <div>
      <p>Cuisin</p>
      {cuisine.map((items) => {
        return (
          <div key={items.id}>
            <img src={items.image} alt={items.title} />
            <p>{items.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cuisine;
