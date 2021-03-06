import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import "./NavBar.css"
// import logo from "../assets/logo.png";


export const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  const Logout = () => {
    localStorage.removeItem("startswithq_user")
}

  return (
    <div className="top-nav"> 
      <Navbar color="#C3B2CB" light expand="md">
        <NavbarBrand className="title" href="/">Starts With Q</NavbarBrand>  
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="/">New Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/library/q">Q Library</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/library/x">X Library</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/library/z">Z Library</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="empty-link" color="#C3B2CB" href="/library/z"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={Logout} className="text-white" id="logout" href="/">Logout</NavLink>
            </NavItem>
            <NavbarText style={{color: '#E6E7BB', textDecoration: 'none'}}>your wordgame superpower</NavbarText>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
);
}



      // <div className="nav-logo">
      //       <img src={logo} alt="Starts With Q thumbnail logo" width="5%" height="5%" />
      //     </div>




