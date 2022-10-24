import './navbar.css';
//import React from "react";
///import Home from "./containers/home/Home";
//import login from "./containers/login/Login"

import {Home ,Login , Recipe ,RecipeSearch} from '../../containers'
//import RecipeSearch from "./containers/recipeSearch/RecipeSearch";
import {Route, Link} from "react-router-dom";


function Navbar() {
    return (
     
    <nav className="navbar">
      
        <Link to = "/" className='home'>Home</Link>
        <Link to="/containers/login/Login" className='login'>Login</Link>
        <Link to="/containers/recipeSearch/RecipeSearch"className='recipeSearch'>RecipeSearch </Link>

        {/* <a href="home.html" title="Home"> Home </a>
            <a href="recipeSearch.html" title="Recipe Search Page"> Recipe Search </a>
            <a href="fitness.html" title="Fitness Page"> Fitness </a>
            <a href="patient_notes.html" title="Patient Notes"> Patient Notes </a>
            <a href="schedule.html" title="Schedule"> Schedule </a> */}
    </nav>
    );
  }

export default Navbar