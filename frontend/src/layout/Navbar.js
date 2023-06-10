import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark px-3">
        <div className="container-fluid">
          <div className="navbar-brand">
            Full Stack Application
          </div>

          {isLoggedIn === "true" ? (
            <div>
              <Link className="btn btn-outline-light" to="/">
                Go to Home
              </Link>
              <Link className="btn btn-outline-light mx-3" to="/control">
                Edit Products
              </Link>
            </div>
          ) :
            <div>
              <Link className="btn btn-outline-light" to="/login">
                Go to Home
              </Link>
              <Link className="btn btn-outline-light mx-3" to="/login">
                Edit Products
              </Link>
            </div>
          }

        </div>
      </nav>
    </div>
  );
}
