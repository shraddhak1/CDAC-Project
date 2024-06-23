import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import SignUp from "./SignUp";
import "./Login.css";
import React from "react";
import { useEffect } from "react";
import Dashboard from "./Dashboard";
import Electric from "./Electric";

function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Login"
            element={
              <div>
                {" "}
                <div class="background">
                  <div class="shape"></div>
                  <div class="shape"></div>
                </div>
                <form>
                  <h3>Login</h3>
                  <hr></hr>
                  <label for="username">Username</label>
                  <input
                    type="text"
                    placeholder="Email or Phone"
                    id="username"
                  />
                  <label for="password">Password</label>
                  <input type="password" placeholder="Password" id="password" />
                  <button type="submit">Login</button>
                  <button type="button">Sign Up</button>
                </form>
              </div>
            }
          ></Route>
          <Route path="/SignUP" exact Component={SignUp}></Route>
          <Route path="/Dashboard" exact Component={Dashboard}></Route>\
          <Route path="/Repair" exact Component={Electric}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Login;
