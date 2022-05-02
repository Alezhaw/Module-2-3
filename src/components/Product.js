import React from "react";
import {Button, Card, Col} from "react-bootstrap";

function Product({product, selectProduct}) {
    return product.visible ? <Col xs={12} sm={6} md={4} lg={3}>
    <Card>
        <Card.Img variant="top" src={product.imgSrc} />
        <Card.Body>
            <Card.Title>{product.brand} {product.model} </Card.Title>
            <Card.Text>
                Price: <b>{product.price}грн</b>
            </Card.Text>
            {product.selected ?
                <Button variant="danger" onClick={() => selectProduct(product.id, false)}>Удалить из корзины</Button> :
                <Button variant="success" onClick={() => selectProduct(product.id, true)}>Добавить в корзину</Button>
            } 
        </Card.Body>
    </Card>
</Col> : '' ;
}

export default Product;