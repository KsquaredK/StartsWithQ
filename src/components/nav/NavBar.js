import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          New Search
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="qWords">
          Words With Q
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/xWords">
          Words With X
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/zWords">
          Words With Z
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/employees">
          Logout
        </Link>
        {/* document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "logout") {
            let user = parseInt(localStorage.getItem("gg_user"))
            if (user >= 0) {
                localStorage.clear();
                document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
            }
        }

    }
) */}
      </li>
    </ul>
  );
};