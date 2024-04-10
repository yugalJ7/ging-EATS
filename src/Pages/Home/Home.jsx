import RecipeList from "../../Components/RecipeList/RecipeList";

const Home = () => {
  return (
    <div className="mt-28 flex flex-col items-center gap-5">
      <div className="flex justify-start w-4/5">
        <p className="text-3xl font-medium">Trending Recipes</p>
      </div>
      <RecipeList />
    </div>
  );
};

export default Home;
