import React from "react";
import { Container, Nav, Navbar, Button, Row, Col } from "react-bootstrap";
import "../App.scss";
import brandIcon from "../assets/layer-650.png";
import navIcon1 from "../assets/5.png";
import navIcon2 from "../assets/4.png";
import navIcon3 from "../assets/3.png";
import navIcon4 from "../assets/2.png";
import navIcon5 from "../assets/1.png";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#000839" }}
      variant="dark"
    >
      <Container fluid>
        <Col>
          <Navbar.Brand href="#home">
            <img src={brandIcon} alt="brandIcon" />
          </Navbar.Brand>
        </Col>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Col>
            <Nav className="me-auto nav ">
              <Nav.Link href="#market">
                <div className="nav-icon">
                  <img src={navIcon1} alt="market" />
                  <h6>MARKET</h6>
                </div>
              </Nav.Link>
              <Nav.Link href="#card">
                {" "}
                <div className="nav-icon">
                  <img src={navIcon2} alt="card" />
                  <h6>CARD</h6>
                </div>
              </Nav.Link>
              <Nav.Link href="#battle">
                {" "}
                <div className="nav-icon">
                  <img src={navIcon3} alt="battle" />
                  <h6>BATTLE</h6>
                </div>
              </Nav.Link>
              <Nav.Link href="#events">
                {" "}
                <div className="nav-icon">
                  <img src={navIcon4} alt="events" />
                  <h6>EVENTS</h6>
                </div>
              </Nav.Link>
              <Nav.Link href="#faq">
                {" "}
                <div className="nav-icon">
                  <img src={navIcon5} alt="faq" />
                  <h6>FAQ'S</h6>
                </div>
              </Nav.Link>
            </Nav>
          </Col>
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
              <div>
                <Button
                  variant="outline-info"
                  size="sm"
                  style={{ borderRadius: "1.5rem" }}
                >
                  LOGIN
                </Button>
              </div>
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
