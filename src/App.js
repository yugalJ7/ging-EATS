import Home from "./Pages/Home/Home";
import RecipeDetailsPage from "./Pages/RecipeDetailsPage/RecipeDetailsPage";
import Navbar from "./Components/Navbar/Navbar";
import Cuisine from "./Pages/Cuisine/Cuisine";
import Error from "./Pages/Error/Error";
import ShowNavbar from "./Components/ShowNavbar/ShowNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ShowNavbar> */}
        <Navbar />
        {/* </ShowNavbar> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cuisine/:type" element={<Cuisine />} />
          <Route path="/recipe/:name" element={<RecipeDetailsPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
