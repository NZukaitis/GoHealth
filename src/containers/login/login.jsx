import './login.css';

function Login() {
    return (
        <div>
            <h1 class="title login">
                GoHealthi
            </h1>

            <div class="signupLogin">
                <button class="signup" onclick="document.location='signup.html'"> Sign up </button>

                <div class = "login section">
                    <h2>Login</h2>

                    <form>
                        <label for="username">Username:</label><br></br>
                        <input type="text" id="username"></input><br></br><br></br>
                        <label for="password">Password:</label><br></br>
                        <input type="text" id="password"></input><br></br><br></br>
                        <input type="submit" value="Log in"></input>
                    </form>

                    <br></br>
                    <a class="forgot" href="#forgot"> forgot password</a>

                </div>
            </div>
        </div>
    );
  }

export default Login;