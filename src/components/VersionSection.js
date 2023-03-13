import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./LowerCardLayout";
const VersionSection = () => {
  return (
    <Row className="version-section" style={{ marginTop: "3rem" }}>
      <div style={{ color: "white" }}>
        <h6>FORMER VERSIONS</h6>
        <p style={{ color: " rgb(255, 255, 255, 0.6)" }}>
          keeping track on card changes
        </p>
      </div>
      <Row className="version-section-row">
        <Col
          className="lower-card-col col-6"
          sm={4}
          md={true}
          lg={true}
          xl={true}
          xxl={true}
        >
          <div className="lower-card-div">
            <Card />
          </div>
        </Col>
        <Col
          className="lower-card-col col-6"
          sm={4}
          md={true}
          lg={true}
          xl={true}
          xxl={true}
        >
          <div className="lower-card-div">
            <Card />
          </div>
        </Col>
        <Col
          className="lower-card-col col-6"
          sm={4}
          md={true}
          lg={true}
          xl={true}
          xxl={true}
        >
          <div className="lower-card-div">
            <Card />
          </div>
        </Col>
        <Col
          className="lower-card-col col-6"
          sm={4}
          md={true}
          lg={true}
          xl={true}
          xxl={true}
        >
          <div className="lower-card-div">
            <Card />
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default VersionSection;
