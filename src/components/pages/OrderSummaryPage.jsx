import React from 'react';
import SideNavBar from "../bootstrapComponents/SideNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OrderSummaryPageUpperLabels from "../bootstrapComponents/OrderSummaryPageUpperLabels";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Stack from "@mui/material/Stack";
import PaymentMethodButtons from '../bootstrapComponents/PaymentMethodButtons';
import CashMethodFields from '../bootstrapComponents/CashMethodFields';
import EWalletMethodFields from '../bootstrapComponents/EWalletMethodFields';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";





export default function OrderSummaryPage() {
    const paymentMethod = ["Cash", "E-wallet"];
    const [myPaymentMethod, setMyPaymentMethod] = useState("");

      const navigate = useNavigate();

   const navigateToCreateReceiptPage = () => {
     navigate("/createreceiptpage");
   };
    

  const [orderStatus, setOrderStatus] = React.useState("");

   const handleChange = (event) => {
     setOrderStatus(event.target.value);
   };





  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavBar />
        <main className="col ps-md-2 pt-2">
          <div className="page-header pt-3">
            <h2>ORDER SUMMARY for Order # </h2>
          </div>

          <Container className="p-3 mb-2 bg-secondary text-white">
            <Row>
              <Col sm={8}>
                <OrderSummaryPageUpperLabels />
                {/* ------------Content HERE--------------------- */}

                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Subtotal:
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Discount Total:
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Total:
                </p>
              </Col>

              <Col sm={4}>
                {/* DROPDOWN BUTTON FOR ORDER STATUS */}
                {/* <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Select Order Status
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Preparing
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Done</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </Form> */}
                <FormControl
                  sx={{
                    m: 1,
                    width: 200,
                    backgroundColor: "#252836",
                    borderRadius: 3,
                    ml: 10,
                    height: 42,
                    mt: -5,
                  }}
                >
                  <Select
                    value={orderStatus}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      "&:hover": {
                        "&& fieldset": {
                          border: "1px solid white",
                        },
                      },
                      borderRadius: 3,
                      width: 200,
                      height: 42,
                      fontFamily: "Barlow Condensed",
                      color: "white",
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: "#3F4351",
                          },
                          "& .MuiMenuItem-root:hover": {
                            backgroundColor: "#3F4351",
                          },
                          "& .MuiMenuItem-root.Mui-selected:hover": {
                            backgroundColor: "#3F4351",
                          },
                          backgroundColor: "#252836",
                        },
                      },
                    }}
                  >
                    <MenuItem value="" sx={{ color: "white" }}>
                      Select Order Status
                    </MenuItem>
                    <MenuItem value={"Preparing"} sx={{ color: "white" }}>
                      Preparing
                    </MenuItem>
                    <MenuItem value={"Done"} sx={{ color: "white" }}>
                      Done
                    </MenuItem>
                  </Select>
                </FormControl>

                <p>Order Type: </p>
                <p>Table Number: (dine in only, add a condition)</p>
                <p>PAYMENT METHOD:</p>
                <Stack spacing={2} direction="row">
                  {paymentMethod.map((method) => (
                    <PaymentMethodButtons
                      title={method.toLocaleUpperCase()}
                      key={method}
                      onClick={() => setMyPaymentMethod(method)}
                    />
                  ))}
                </Stack>
                <div>
                  {myPaymentMethod === "Cash" && <CashMethodFields />}
                  {myPaymentMethod === "E-wallet" && <EWalletMethodFields />}
                </div>

                <button onClick={navigateToCreateReceiptPage}>
                  Finalize Payment
                </button>
              </Col>
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
