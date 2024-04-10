import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const url = "https://api.spoonacular.com/recipes/";
const RecipeDetailsPage = () => {
  const [detail, setDetails] = useState({});
  const params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `${url}${params.name}/information?apiKey=f1dc4edfb1084f1f8f60009775e1cbaa`
    );
    const detailsData = await data.json();
    console.log(detailsData);
    setDetails(detailsData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div className="recipeDetails py-28 px-10 flex flex-col  items-center bg-[#FFF4E8] gap-8">
      <div className="recipeHeader items-center flex flex-col gap-5">
        <p className="text-xl font-medium">{detail.title}</p>
        <div className="flex w-full justify-around">
          <div className="recipeCookTime flex gap-1">
            <AccessTimeIcon />
            <span>{detail.readyInMinutes}</span>
            <span>min.</span>
          </div>
          <div className="recipeServing flex gap-1">
            <SentimentSatisfiedAltIcon />
            <span>{detail.servings}</span>
            <span>person</span>
          </div>
        </div>
        <img
          src={detail.image}
          alt={detail.title}
          className="h-[17rem] w-96 rounded-lg shadow-md"
        />
      </div>
      <div className="recipeDetails">
        <p
          className="text-base leading-8"
          dangerouslySetInnerHTML={{ __html: detail.summary }}
        ></p>
      </div>
      <div className="recipeProcIng w-full flex-col sm:flex-row flex gap-6">
        <div className="recipeProcedure w-full sm:w-1/2">
          <p className="text-2xl my-2 font-medium">Procedure</p>
          <p
            className="text-sm leading-7"
            dangerouslySetInnerHTML={{ __html: detail.instructions }}
          ></p>
        </div>
        <div className="recipeIngredients w-1/2">
          <p className="text-2xl my-2 font-medium">Ingredients</p>
          <ul className="list-disc ml-5 text-sm">
            {detail &&
              detail.extendedIngredients &&
              detail.extendedIngredients.map((items) => {
                return (
                  <li className="my-4" key={items.id}>
                    {items.original}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
