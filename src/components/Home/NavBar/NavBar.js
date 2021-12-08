import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="NavBar1">
        <Container>
          <Navbar.Brand href="#home">
            <span className="eros">EROS</span>
            <span className="ads">ADS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto pt-1">
              <Nav.Link href="#features" className="item1">
                Contact & Support
              </Nav.Link>
              <Nav.Link href="#pricing" className="item2">
                Pricing
              </Nav.Link>
              <Nav.Link href="#pricing" className="item3">
                F.A.Q.
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
