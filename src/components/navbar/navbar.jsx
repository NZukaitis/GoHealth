import './navbar.css';
import React from "react";
import Home from "./containers/home/Home";
import login from "./containers/login/Login";
import RecipeSearch from "./containers/recipeSearch/RecipeSearch";
import {Route, Link} from "react-router-dom";


function Navbar() {
    return (
    <header className="navbar">
        <Route exact path="/" component={Home} />
        <Route exact path="/containers/login/Login" component={Login} />
        <Route exact path="/containers/recipeSearch/RecipeSearch" component={RecipeSearch} />

        {/* <a href="home.html" title="Home"> Home </a>
            <a href="recipeSearch.html" title="Recipe Search Page"> Recipe Search </a>
            <a href="fitness.html" title="Fitness Page"> Fitness </a>
            <a href="patient_notes.html" title="Patient Notes"> Patient Notes </a>
            <a href="schedule.html" title="Schedule"> Schedule </a> */}
    </header>
    );
  }

export default Navbar