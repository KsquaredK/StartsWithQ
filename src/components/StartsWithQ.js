import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { FindWordProvider } from "./FindWord/FindWordProvider"
import { Login } from "./auth/login";
import { Register } from "./auth/register";
import Footer from "./nav/Footer.js"
import "./StartsWithQ.css";

/* +++++++ PSEUDO-CODE ++++++++  
export function: if user is in local storage, render navbar and application views,
else redirect to login (with routes to those two auth modules)
*/



export const StartsWithQ = () => (
  <>
  <FindWordProvider>
    <Route
      render={() => {
        if (localStorage.getItem("startswithq_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
              <Footer />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  </FindWordProvider>

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>

  </>
);

// Mock authentication process:
// When the application first renders, it checks for a startswithq-user item in local storage.
// If the item is there, the user is authenticated and the application renders.
// If the item is not there, render the Login form instead.
// When the user fills out the form and clicks the submit button, query the API to see if a user with the specified email already exists.
// If the user already exists, ref the startswithq_user_customer item in local storage as current user id, and display Starts With Q.
// If the user does not exist, alert user, and redirect to register page..
