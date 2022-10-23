import 'login.css';

function App() {
    return (
    <div>
        <h1 class="title login">
            SalusWell
        </h1>

        <button class="signup" onclick="document.location='signup.html'"> Sign up </button>
    
        <main class = "login">
            <h2>Login</h2>

            <form>
                <label for="username">Username:</label><br>
                <input type="text" id="username"><br><br>
                <label for="password">Password:</label><br>
                <input type="text" id="password"><br><br>
                <input type="submit" value="Log in">
            </form>

            <br>
            <a class="forgot" href="#forgot"> forgot password</a>

        </main>
    </div>
    );
  }