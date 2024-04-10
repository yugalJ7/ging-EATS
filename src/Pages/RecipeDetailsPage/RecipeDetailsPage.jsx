import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://api.spoonacular.com/recipes/";
const RecipeDetailsPage = () => {
  const [detail, setDetails] = useState({});
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `${url}${params.name}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY_TWO}`
    );
    const detailsData = await data.json();
    console.log(detailsData);
    setDetails(detailsData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div className="mt-28 flex flex-col">
      <div>
        <p>{detail.title}</p>
        <div>
          <span>{detail.readyInMinutes}min.</span>
          <span>{detail.servings}person</span>
        </div>
        <img src={detail.image} alt={detail.title} className="h-[17rem] w-96" />
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
      </div>
      <div>
        <div>
          <p>Procedure</p>
          <p dangerouslySetInnerHTML={{ __html: detail.instructions }}></p>
        </div>
        <div>
          <p>Ingredients</p>
          <ul>
            {detail &&
              detail.extendedIngredients &&
              detail.extendedIngredients.map((items) => {
                return <li key={items.id}>{items.original}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
