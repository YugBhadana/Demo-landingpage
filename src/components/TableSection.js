import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import tableIcon1 from "../assets/13.png";
import tableIcon2 from "../assets/14.png";
import tableIcon3 from "../assets/15.png";
const TableSection = () => {
  return (
    <Container className="table-section">
      <Row className="table-row">
        <Col>
          <div
            className="table-menu"
            style={{
              color: " rgb(255, 255, 255, 0.6)",
            }}
          >
            FULL ILLUSTRATION
          </div>
        </Col>
        <Col
          className="table-menu"
          style={{
            color: " rgb(255, 255, 255, 0.6)",
          }}
        >
          TRADE HISTORY
        </Col>
        <Col
          className="table-menu"
          style={{
            color: " rgb(255, 255, 255, 0.6)",
          }}
        >
          CARD FOR SALE
        </Col>
        <Col
          className="table-menu"
          style={{
            borderBottom: "3px solid #FFEA20",
            color: "#FFFFFF",
          }}
        >
          STATS
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Lvl</th>
              <th>Cards</th>
              <th>
                <img src={tableIcon1} alt="" style={{ width: "2rem" }} />
              </th>
              <th>
                <img src={tableIcon2} alt="" style={{ width: "2rem" }} />
              </th>
              <th>
                <img src={tableIcon3} alt="" style={{ width: "2rem" }} />
              </th>
              <th>Abilities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
              <td>2</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default TableSection;
