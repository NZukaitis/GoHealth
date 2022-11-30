import './recipe.css';

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";


import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";



import './recipeSearch.css';

function RecipeSearch() {
    return (
        <div>
        <h1 class="title">
            SalusWell
        </h1>

        <main>

            <div class="grid">
            <div class="recipe">
                    {/* <!-- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thestreet.com%2Finvesting%2Fstocks%2F10-best-exercise-machines-for-the-new-year-13408716&psig=AOvVaw2kHp_4CDCMwYiAZgP9to2z&ust=1664848976552000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNiwn_H7wvoCFQAAAAAdAAAAABAM --> */}
                    <img src="images/eliptical.jpg" alt="eliptical"></img>
                </div>
                <div class="recipe">
                    {/* <!-- https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/back-exercise-machine-1646399568.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:* --> */}
                    <img src="images/back.jpg" alt="back exercise machine"></img>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>
                <div class="recipe">
                    <p> Recipe </p>
                </div>

            </div>
        </main>
        </div>
        );
        }

        export default RecipeSearch;