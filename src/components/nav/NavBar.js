import React, {useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useEffect } from "react/cjs/react.development";

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

  /*  const {searchLetters, getSearchLetters} = useContext(FindWordContext)
  const [q, setQ] = useState("")
  const [x, setX] = useState("")
  const [z, setZ] = useState("")

  useEffect(() => {    
    getSearchLetters()
    .then(setQ(searchLetters.find((letter) =>  letter.name === "q")))
    .then(setX(searchLetters.find((letter) =>  letter.name === "x")))
    .then(setZ(searchLetters.find((letter) =>  letter.name === "z")))
  }, []) */