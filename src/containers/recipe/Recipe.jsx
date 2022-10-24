import 'recipe.css';
import '../components/narbar/navbar.jsx';

function Recipe() {
    return (
        <div>
        
        <h1 class="title">
            SalusWell
        </h1>

        <main>
            <h2> RECIPE NAME</h2>
            <div class="grid">
                <div class="recipeImage">
                    // https://cookingformysoul.com/wp-content/uploads/2022/05/triple-berry-smoothie-feat-min.jpg
                    <img src="images/smoothie.jpg" alt="smoothie"></img>
                </div>
                
                <div class="ingredients">
                    <p>Ingredients: </p>
                    <ul>
                        <li>Strawberries</li>
                        <li>Blueberries</li>
                        <li>Raspberries</li>
                        <li>Plant-Based milk of your choice</li>
                        <li>Optional: Non-Dairy Yogurt</li>
                    </ul>
                </div>
                <div class="steps">
                    <p>Steps: </p>
                    <ol>
                        <li>Wash all fruit</li>
                        <li>Add all ingredients into blender</li>
                        <li>Enjoy!</li>
                    </ol>
                </div>


            </div>
        </main>
        </div>
        );
        }
        export default Recipe;