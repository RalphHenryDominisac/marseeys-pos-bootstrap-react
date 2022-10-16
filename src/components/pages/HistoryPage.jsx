import React from "react";
import SideNavBar from "../bootstrapComponents/SideNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PendingPageUpperLabels from "../bootstrapComponents/PendingPageUpperLabels";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function HistoryPage() {
  const navigate = useNavigate();

  // const navigateToOrderSummaryPage = () => {
  //   navigate("/ordersummarypage");
  // };
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavBar />
        <main className="col ps-md-2 pt-2">
          <div className="page-header pt-3">
            <h2>HISTORY PAGE</h2>
          </div>

          <Container className="p-3 mb-2 bg-secondary text-white">
            <Row>
              <Col sm={8}>
            
                {/* ------------Content HERE--------------------- */}
              </Col>

              <Col sm={4}> </Col>
            </Row>
          </Container>

          {/* <hr> */}
          <div className="row">
            <div className="col-12"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
