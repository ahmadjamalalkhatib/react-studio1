import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React, { Component }  from 'react';
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

    const[cart, updateStateCart] = useState([])
    const addToCart = (i) => {
        const currCart = Object.assign({}, cart)
        if (currCart[i]) {
            currCart[i] = currCart[i] + 1
        } else {
            currCart[i] = 1
        }
        console.log(cart[i])
        updateStateCart(currCart)
    }

    const totalPrice = () => {
        let tot = 0
        for (var key in cart) {
            tot = cart[key] * bakeryData[key].price
        }
        return tot
    }

  return (
    <div className="App">
      <h1>Welcome to My Bakery </h1> {/* TODO: personalize your bakery (if you want) */}
        <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{width: "70%"}}>
            <Row xs={1} md={2} className="g-4">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <Col>
            <BakeryItem name = {item.name} desc={item.desc} price={item.price} image={item.image} index = {index} item = {item} addToCart={addToCart}/>
            </Col>
        ))}
            </Row>
        </div>

      <div style={{width: "30%"}}>
        <h2>Cart</h2>
          {
              Object.entries(cart)
                  .map(([key, value]) =>
                      <div> {value}x {bakeryData[key].name} </div>)
          }
          <div> Total: {totalPrice()} </div>


      </div>
        </div>
    </div>
  );
}

export default App;
