import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://api.spoonacular.com/recipes/";
const RecipeDetailsPage = () => {
  const [detail, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instruction");
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `${url}${params.name}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
    );
    const detailsData = await data.json();
    console.log(detailsData);
    setDetails(detailsData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div>
      <p>{detail.title}</p>
      <img src={detail.image} alt={detail.title} />
      <button
        className={activeTab === "Instruction" ? "showDetails" : ""}
        onClick={() => setActiveTab("Instruction")}
      >
        Instruction
      </button>
      <button
        className={activeTab === "Ingredients" ? "showDetails" : ""}
        onClick={() => setActiveTab("Ingredients")}
      >
        Ingredients
      </button>
      {activeTab === "Instruction" && (
        <div>
          <p dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
          <hr />
          <p dangerouslySetInnerHTML={{ __html: detail.instructions }}></p>
        </div>
      )}
      {activeTab === "Ingredients" && (
        <ul>
          {detail.extendedIngredients.map((items) => {
            return <li key={items.id}>{items.original}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
