import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.scss";
import VersionSection from "./VersionSection";
import Table from "./TableSection";
import CardLayout from "./UpperCardLayout";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Container fluid>
        <Row className="top-header">
          <Col
            sm={5}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className="top-header-left col-5"
          >
            <div className="top-header-left-div">
              <h4 className="top-header-leftfont">FROG PLATE</h4>
              <span style={{ color: "yellow" }}>LEGENDARY</span>
            </div>
          </Col>
          <Col
            sm={true}
            md={true}
            lg={true}
            xl={true}
            xxl={true}
            className="top-header-right col-5"
          >
            <h6 className="top-header-rightfont">EQUIPMENT</h6>
          </Col>
        </Row>
      </Container>
      <Container
        className="home-container"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2017/09/14/11/25/water-2748695_960_720.png")',
        }}
      >
        <Row className="upper-section" style={{ margin: "3rem 0rem" }}>
          <Col
            className="upper-section-left"
            // sm={6}
            md={5}
            lg={3}
            xl={3}
            xxl={3}
          >
            <div className="upper-section-left-cardDiv">
              <CardLayout />
              <Row style={{ marginTop: "2rem" }}>
                <Col>
                  <Button
                    className="upper-section-left-Buttons"
                    style={{
                      backgroundColor: "#30E3DF",
                    }}
                  >
                    Buy
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="upper-section-left-Buttons"
                    style={{
                      backgroundColor: "#FF8E00",
                    }}
                  >
                    Sell
                  </Button>
                </Col>
                <div className="upper-section-left-textDiv">
                  <span>Last Trade Price : $11.23</span>
                </div>
              </Row>
            </div>
          </Col>
          <Col
            className="upper-section-right"
            // sm={true}
            md={true}
            lg={true}
            xl={true}
            xxl={true}
          >
            <Row className="upper-section-right-Row">
              <div>
                <h6
                  className="upper-section-right-heading"
                  style={{ color: "white" }}
                >
                  LORE
                </h6>
                <p
                  className="upper-section-right-text"
                  style={{ color: "rgba(	255, 255, 255 , 0.7)" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <Row className="upper-section-right-boxDiv">
                <Col sm={true} md={3} lg={2} className="col-6">
                  <div className="upper-section-right-boxText">
                    <b>Rarity :</b>
                    <p>
                      <span style={{ color: "yellow" }}>Legendary</span> 1/4000
                    </p>
                  </div>
                </Col>
                <Col sm={6} md={3} lg={2} className="col-6">
                  <div className="upper-section-right-boxText">
                    <b>Card Type :</b>{" "}
                    <p style={{ color: "#0096FF" }}>Summon</p>
                  </div>
                </Col>
                <Col sm={6} md={true} lg={true} className="col-6">
                  <div className="upper-section-right-boxText">
                    <b> Card in Circulation :</b>
                    <p>4000</p>
                  </div>
                </Col>
                <Col sm={6} md={true} lg={true} className="col-6">
                  <div className="upper-section-right-boxText">
                    <b>Total Supply Cap :</b>
                    <p>10000</p>
                  </div>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
        <Table />
        <VersionSection />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
