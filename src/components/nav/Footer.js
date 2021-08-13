import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import "./Footer.css";


export const Footer = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

return (
    <div className="container">
      <Navbar className="footer" color="#FFFFFF" light expand="md"> 
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{color: '#333333', textDecoration: 'none'}} href="/">New Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: '#333333', textDecoration: 'none'}} href="/library/q">Q Library</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: '#333333', textDecoration: 'none'}} href="/library/x">X Library</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: '#333333', textDecoration: 'none'}} href="/library/z">Z Library</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
);
}

export default Footer;