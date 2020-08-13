import React from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button  } from  'react-bootstrap'
import "./Navbar.css"

const TopNav = () => {
  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{color: "white"}}>
          <Nav.Link href="/" style={{color: "white", textAlign: "left"}}>About</Nav.Link>
          <Nav.Link href="/education" style={{color: "white", textAlign: "left"}}>Education</Nav.Link>
          <Nav.Link href="/experience" style={{color: "white", textAlign: "left"}}>Experience</Nav.Link>
          <Nav.Link href="/portfolio" style={{color: "white", textAlign: "left"}}>Portfolio</Nav.Link>
        </Nav>
        <Form inline>
        <Navbar.Brand href="/">Michael Srithapin</Navbar.Brand>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
