import './styles.css';

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";


import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Recipe from 'layouts/recipe';


function RecipeSearch({color}) {
    return (
        <DashboardLayout>
            <div>
                <h1> Recipe </h1>
                <div class="grid">
                    <div class="recipe">
                        {/* // https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad.jpg */}
                        <img src="images/Big-Italian-Salad.jpg" alt="salad"></img>
                    </div>
                    <div class="recipe">
                        {/* // https://www.dailynews.com/wp-content/uploads/2022/04/GettyImages-1293479617.jpg?w=1024  */}
                        <img src="images/Salad-2.png" alt="salad"></img>
                    </div>
                    <div class="recipe">
                        {/* // https://peasandcrayons.com/wp-content/uploads/2018/05/honey-garlic-tofu-recipe-5.jpg  */}
                        <img src="images/tofu.png" alt="TOFUUU"></img>
                    </div>
                    <Button class="recipe" href="recipe.html">
                        {/* // https://cookingformysoul.com/wp-content/uploads/2022/05/triple-berry-smoothie-feat-min.jpg */}
                        <img src="images/smoothie.jpg" alt="smoothie"></img>
                    </Button>
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
            </div>
        </DashboardLayout>
    );
}

export default RecipeSearch;