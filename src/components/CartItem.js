import React from "react";
import {ListGroup, Badge} from "react-bootstrap";

function CartItem({product, selectProduct, selectAmount}) {
    return <ListGroup.Item><span>{product.brand} {product.model} ({product.price} грн)</span>
    <Badge className={'ml-4'} bg='primary'
        onClick={() => selectAmount(product.id, true)}>+</Badge>
        <b>{product.amount}</b>
         <Badge className={'ml-4'} bg='danger'
        onClick={() => selectAmount(product.id, false)}>-</Badge>
        <Badge className={'ml-4'} bg='secondary'
        onClick={() => selectProduct(product.id, false)}>Удалить</Badge>
    </ListGroup.Item>
}

export default CartItem;