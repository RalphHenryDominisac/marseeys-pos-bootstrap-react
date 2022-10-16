import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import SideNavBar from '../bootstrapComponents/SideNavBar';
import DateTime from "../DateTime";
import CategoryButton from '../bootstrapComponents/CategoryButton';
import OrderSidePage from './OrderSidePage';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axiosInstance from "../../helpers/axios";
import { useState, useEffect } from "react";
import OrderTypeButtons from "../bootstrapComponents/OrderTypeButtons";
import SubTotalAndProceedButton from "../bootstrapComponents/SubTotalAndProceedButton";
import CartUpperLabels from '../bootstrapComponents/CartUpperLabels';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";










export default function HomeOrderPage() {

  const [menuCategories, setMenuCategories ] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const [orderNumber, setOrderNumber] = useState();
  const [orderType, setOrderType] = useState();

  
  


   const navigate = useNavigate();

   const navigateToFinalizeOrderPage = () => {
     navigate("/finalizeorderpage", {
       state: {
       // orderNumber,
        orderType,
        //  totalPrice,
        // cartItems,
       //  orderComment,
       },
     });
   };


    
  



 useEffect(() => { 
      console.log("I am hrer");
    if(menuCategories.length === 0){
        axiosInstance.get('/menu/categories').then((response) => {
          setMenuCategories(response.data);

           console.log(response.data);
  
        }).catch((error) => {
          console.log("Error: ", error)
        })
    }
 }, []);

 function getMenuItems(name){
       axiosInstance.get('/menu/' + name).then((response) =>{
             setMenuItems(response.data);
              console.log(response.data);
       }).catch((error)=>{
        console.log("Error: ", error)
       })
 }

 function addToCart(item){
    console.log(item);
    const exist = cartItems.find((x) => x.id === item.id);
    if(exist){
      setCartItems(
        cartItems.map((x) => x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x )
      );    
    }else{
       setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
    console.log(cartItems);
 };







  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <SideNavBar />
          <main className="col ps-md-2 pt-2">
            <div className="page-header pt-3">
              <h2>
                <DateTime />
              </h2>
            </div>

            <Container className="p-3 mb-2 bg-secondary text-white">
              <Row>
                <Col sm={8}>
                  <p className="lead">
                    {menuCategories.map((category) => (
                      <Button
                        key={category.id}
                        onClick={getMenuItems.bind(this, category.name)}
                        style={{marginRight: 3, marginBottom: 5}}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </p>

                  <div className="row">
                    <div className="col-12">
                      <p>
                        {menuItems.map((item) => (
                          <Button
                            key={item.id}
                            onClick={addToCart.bind(this, item)}
                          >
                            {item.name} <br /> Php {item.price}
                          </Button>
                        ))}
                      </p>
                    </div>
                  </div>
                </Col>
                {/* ------------------------OrderSidePage start-------------------------------------------------------- */}
                {/* <OrderSidePage cart={cartItems} updateCartItems={setCartItems} /> */}
                {/* OrderSidePage transferred here: */}

                <Col sm={4}>
                  Order # (auto generated num) :
                  <OrderTypeButtons
                    onClickFunction={(e) => setOrderType(e.target.value)}
                  />
                  <CartUpperLabels />
                  {cartItems.map((item) => (
                    <p key={item.id}>
                      {item.name} (Php {Number(item.price).toFixed(2)}) &nbsp;
                      &nbsp;&nbsp;
                      <button
                        onClick={() => {
                          cartItems.updateCartItems((prevState) => ({
                            ...prevState,
                            qty: this.qty - 1,
                          }));
                        }}
                      >
                        -
                      </button>
                      {item.qty}
                      <button
                        onClick={() => {
                          cartItems.updateCartItems((prevState) => ({
                            ...prevState,
                            qty: this.qty + 1,
                          }));
                        }}
                      >
                        +
                      </button>
                      &nbsp; &nbsp; Php{" "}
                      {Number(item.price * item.qty).toFixed(2)}
                    </p>
                  ))}
                  {/* <SubTotalAndProceedButton /> */}
                  <p>
                    Order Subtotal: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;
                    <button onClick={navigateToFinalizeOrderPage}>
                      Proceed
                    </button>
                  </p>
                </Col>
                {/* ------------------------OrderSidePage end-------------------------------------------------------- */}
              </Row>
            </Container>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
