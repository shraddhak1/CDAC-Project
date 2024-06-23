import "./SignUp.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  useEffect(() => {
    document.title = "SighUp";
  }, []);
  return (
    <div className="App">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h3>Sign Up</h3>
        <hr></hr>
        <input type="text" placeholder="Phone No" id="phone" />
        <input type="text" placeholder="Username" id="username" />
        <input type="password" placeholder="Password" id="password" />
        <button type="submit" onClick={Link}>
          Sign Up
        </button>
        <button type="button">Login</button>
      </form>
    </div>
  );
}

export default SignUp;
