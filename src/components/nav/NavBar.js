import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = (props) => {
 

  const Logout = () => {
    localStorage.removeItem("startswithq_user")
}
  return (
    <nav className="container">
      <ul className="navbar">
        <li className="navbar__item active">
          <Link className="navbar__link" to="/">
            New Search
          </Link>
        </li>
        <li className="navbar__item active">
        <Link className="navbar__link" to="/library/q">
            Q Library
          </Link>
        </li>

        <li className="navbar__item active">
          <Link className="navbar__link" to="/library/x">
            X Library
          </Link>
        </li>

        <li className="navbar__item active">
          <Link className="navbar__link" to="/library/z">
            Z Library
          </Link>
        </li>

        <li onClick={Logout} className="navbar__item">
          <Link className="navbar__link" to="/">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
);
  }

