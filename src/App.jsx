import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar} from "./components"
import {Home ,Login , Recipe ,RecipeSearch} from './containers'



function App() {
  return (
    <>
  <Navbar/>
  <div className="container">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/containers/login/Login" element={<Login />} />
      <Route exact path="/containers/recipeSearch/RecipeSearch" element={<RecipeSearch />} />
    </Routes>
  </div>
  </>
  );
}

export default App;
