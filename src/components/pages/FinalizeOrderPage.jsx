import React from "react";
import FinalizeOrderPageHeaderLabels from "../bootstrapComponents/FinalizeOrderPageHeaderLabels";
import SideNavBar from "../bootstrapComponents/SideNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import AssignTableNumberComponent from "../bootstrapComponents/AssignTableNumberComponent";
import PickupTypeComponent from "../bootstrapComponents/PickupTypeComponent";
import DeliveryTypeComponent from "../bootstrapComponents/DeliveryTypeComponent";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function FinalizeOrderPage() {
    const navigate = useNavigate();
     const location = useLocation();
     const data = location.state;

         const navigateToHomeOrderPage = () => {
           navigate("/");
         };

          const navigateToPendingPage = () => {
            navigate("/pendingpage");
          };


  const [orderDiscount, setOrderDiscount] = React.useState("");

             const handleChange = (event) => {
               setOrderDiscount(event.target.value);
             };
     

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideNavBar />
        <main className="col ps-md-2 pt-2">
          <div className="page-header pt-3">
            <h2>FINALIZE ORDER PAGE</h2>
          </div>

          <Container className="p-3 mb-2 bg-secondary text-white">
            <Row>
              <Col sm={8}>
                <h3>
                  Order #
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Order Type: <u> {data?.orderType} </u>
                </h3>
                <FinalizeOrderPageHeaderLabels />

                {/* ------------Content HERE--------------------- */}

                <p style={{ marginLeft: 250, marginTop: 45 }}>
                  Order Subtotal:
                </p>
              </Col>

              <Col sm={4}>
                <h3>
                  Order Details for <u> {data?.orderType} </u>
                </h3>
                <p>
                  ------------------------------------------------------------
                </p>

                {/* DROPDOWN BUTTON FOR DISCOUNT */}
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
                    value={orderDiscount}
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
                      Select Order Discount
                    </MenuItem>
                    <MenuItem value={"Preparing"} sx={{ color: "white" }}>
                      5%
                    </MenuItem>
                    <MenuItem value={"Done"} sx={{ color: "white" }}>
                      10%
                    </MenuItem>
                    <MenuItem value={"Done"} sx={{ color: "white" }}>
                      15%
                    </MenuItem>
                    <MenuItem value={"Done"} sx={{ color: "white" }}>
                      20%
                    </MenuItem>
                    <MenuItem value={"Done"} sx={{ color: "white" }}>
                      20% (Senior)
                    </MenuItem>
                    <MenuItem value={"Done"} sx={{ color: "white" }}>
                      20% (PWD)
                    </MenuItem>
                  </Select>
                </FormControl>
                {/* <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Select Discount
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">5%</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">10%</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">15%</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">20%</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                          20% (Senior)
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-6">
                          20% (PWD)
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </Form> */}

                <div>
                  {data?.orderType === "Dine In" && (
                    <AssignTableNumberComponent />
                  )}
                  {data?.orderType === "Pickup" && <PickupTypeComponent />}
                  {data?.orderType === "Delivery" && <DeliveryTypeComponent />}
                </div>

                <p>Discount Total: </p>
                <p>Order Total: </p>

                <Button
                  onClick={navigateToHomeOrderPage}
                  variant="danger"
                  type="submit"
                >
                  Cancel Order
                </Button>
                <Button
                  onClick={navigateToPendingPage}
                  variant="success"
                  type="submit"
                  style={{ marginLeft: 15 }}
                >
                  Confirm Order
                </Button>
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
