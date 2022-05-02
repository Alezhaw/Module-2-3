import React from "react";
import {Card, Col} from "react-bootstrap";

function ShopProduct({product}) {

    return <> 
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card>
        <Card.Img variant="top" src={product.imgSrc} />
        <Card.Body>
            <Card.Title>{product.brand} {product.model} </Card.Title>
            <Card.Text>
                 {product.description}
            <br></br>Price: <b>{product.price}грн</b>
            </Card.Text>
           
        </Card.Body>
    </Card>
</Col></>
}

export default ShopProduct;