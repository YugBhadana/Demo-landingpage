import React from "react";
import { Row, Col } from "react-bootstrap";
import brandIcon from "../assets/layer-650@3x.png";
import footerImg from "../assets/16.png";
import { BsFacebook, BsTwitter, BsTelegram, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <Row className="footer">
      <Row className="footer-brandIcon">
        {/* <div> */}
        <img src={brandIcon} style={{ width: "15rem" }} alt="" />
        {/* </div> */}
      </Row>
      <Row>
        <Col className="footer-left">
          <Row className="footer-left-row1">
            <Col className="footer-left-col"> HOME</Col>
            <Col className="footer-left-col">MARKET</Col>
            <Col className="footer-left-col">CARDS</Col>
            <Col className="footer-left-col">BATTLE</Col>
            <Col className="footer-left-col">EVENTS</Col>
            <Col className="footer-left-col">FAQ's</Col>
          </Row>
          <Row className="footer-left-row2">
            <div>C 2020 All rights reserved</div>{" "}
          </Row>
        </Col>
        <Col>
          <div className="footer-middle">
            <div>
              <img src={footerImg} style={{ width: "10rem" }} alt="" />
            </div>
          </div>
        </Col>
        <Col>
          <div className="footer-right">
            <Row
              className="footer-right-row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>Terms & Conditions | Privacy Policy</div>
              <Row>
                <Col>
                  <BsFacebook />
                </Col>
                <Col>
                  <BsTwitter />
                </Col>
                <Col>
                  <BsTelegram />
                </Col>
                <Col>
                  <BsInstagram />
                </Col>
              </Row>
            </Row>

            {/* <div
              style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
            >
              <BsFacebook />
              <BsTwitter />
              <BsTelegram />
              <BsInstagram />
            </div> */}
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default Footer;
