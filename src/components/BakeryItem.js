// TODO: create a component that displays a single bakery item
import Card from 'react-bootstrap/Card';
import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function BakeryItem({image, name, price, desc, index, item, addToCart}) {
    return (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Subtitle> {price} </Card.Subtitle>
                    <Card.Text> {desc} </Card.Text>
                    <Button onClick={()=>{addToCart(index)}}> Add to Cart </Button>
                </Card.Body>
            </Card>
);
    console.log("item")
}
export default BakeryItem;