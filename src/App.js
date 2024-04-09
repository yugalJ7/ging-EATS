import Home from "./Pages/Home/Home";
import RecipeDetailsPage from "./Pages/RecipeDetailsPage/RecipeDetailsPage";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Category/Category";
import Cuisine from "./Pages/Cuisine/Cuisine";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cuisine/:type" element={<Cuisine />} />
          <Route path="/recipe/:name" element={<RecipeDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
