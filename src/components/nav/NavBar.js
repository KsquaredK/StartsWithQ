import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import "./NavBar.css"

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  const Logout = () => {
    localStorage.removeItem("startswithq_user")
}

  return (
    <div>
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
              <NavLink onClick={Logout} className="text-white" href="/">Logout</NavLink>
            </NavItem>
            <NavbarText style={{color: '#E6E7BB', textDecoration: 'none'}}>your wordgame superpower</NavbarText>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
);
}







