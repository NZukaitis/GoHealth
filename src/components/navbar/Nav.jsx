import './navbar.css';
import React from "react";
import Home from "./containers/home/Home";
import Login from "./containers/login/Login";
import RecipeSearch from "./containers/recipeSearch/RecipeSearch";
import {Route, Link} from "react-router-dom";


function Nav() {
    return (
    <header className="navbar">
        <Route exact path="/" component={Home} />
        <Route exact path="/containers/login/Login" component={Login} />
        <Route exact path="/containers/recipeSearch/RecipeSearch" component={RecipeSearch} />
        

    </header>
    );
  }

export default Nav