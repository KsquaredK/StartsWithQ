import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
  const Logout = () => {
    localStorage.removeItem("startswithq_user")
}
  return (
    <div className="container">
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          New Search
        </Link>
      </li>
      
      <li onClick={Logout} className="navbar__item">
        <Link className="navbar__link" to="/">
          Logout
        </Link>
        </li>
        
{/*    <li Link className="navbar__link" to "/library">
        ${chosenLetter} Library</Link>
        </li> */}
    </ul>
    </div>
  );
};

/*-------restore full navigation -------------*
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
      </li>   -----------------------*/