import React from "react";
import { Card } from "react-bootstrap";
import cardImg from "../assets/knightimg.jpg";
import cardImg1 from "../assets/7.png";
import cardImg2 from "../assets/9.png";
import cardImg3 from "../assets/10.png";
import cardImg4 from "../assets/6.png";
const lowerCardLayout = () => {
  return (
    <Card style={{ width: "100%" }} className="lower-card">
      <Card.Img variant="top" src={cardImg} />
      <div className="card-upper-logo">
        <img src={cardImg4} alt="" className="card-upper-logoImg " />
      </div>
      <div className="middle-logos-mainDiv ">
        <div className="card-middle-logos ">
          <div className="middle-logo ">
            <img src={cardImg1} alt="" className="middle-logoImg " />
          </div>
          <div className="middle-logo ">
            <img src={cardImg2} alt="" className="middle-logoImg " />
          </div>
          <div className="middle-logo">
            <img src={cardImg3} alt="" className="middle-logoImg " />
          </div>
        </div>
        <hr
          style={{
            height: "3px",
            border: "none",
            margin: "0",
            backgroundColor: "#B3005E",
          }}
        />
      </div>

      <Card.Body style={{ backgroundColor: "#000839", color: "white" }}>
        <div className="card-body-mainDiv">
          <Card.Title className="card-title ">FROG PLATE</Card.Title>
          <Card.Text className="card-text ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default lowerCardLayout;
