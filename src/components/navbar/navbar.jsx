import './navbar.css';

function Navbar() {
    return (
    <header className="navbar">
        <a href="home.html" title="Home Page" className="active"> Home </a>
        <a href="recipe.html" title="Recipe Page"> Recipes </a>
        <a href="fitness.html" title="Fitness Page"> Fitness </a>
        <a href="patient_notes.html" title="Patient Notes"> Patient Notes </a>
        <a href="schedule.html" title="Schedule"> Schedule </a>
    </header>
    );
  }

export default Navbar