import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import RecipeDetailsPage from "./Pages/RecipeDetailsPage/RecipeDetailsPage";
import Cuisine from "./Pages/Cuisine/Cuisine";
import Error from "./Pages/Error/Error";
import SearchedRecipe from "./Pages/SearchedRecipe/SearchedRecipe";
import RouterOutlet from "./Components/RouterOutlet/RouterOutlet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RouterOutlet />}>
        <Route path="/" element={<Home />} />
        <Route path="cuisine/:type" element={<Cuisine />} />
        <Route path="recipe/:name" element={<RecipeDetailsPage />} />
        <Route path="searched/:search" element={<SearchedRecipe />} />
      </Route>
      <Route path="*" element={<Error />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
