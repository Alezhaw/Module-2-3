import React, {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


function Cart({selectProduct, selectAmount}) {
    const products = useSelector((state) => state.data.products);
    const [cartProducts, setCartProducts] = useState([])
    const [total, setTotal] = useState(0);

    useEffect(() => {
       setCartProducts(products.filter(el => el.selected))
      
    }, [products])

   
    useEffect(() => {
        setTotal(cartProducts.reduce((acc,el) => acc +el.price * el.amount, 0));
      
    }, [cartProducts])

    return <>
    {cartProducts.length ? <ListGroup className={"mb-3"}>
        <ListGroup.Item as="li" active>
            Корзина
        </ListGroup.Item>
        {cartProducts.map(product => <CartItem key={product.id} product={product} selectProduct={selectProduct} selectAmount={selectAmount}/>)}
        <h2>Сумма:</h2>
        <p><b className={'text-danger'}>{total}грн</b></p>
    </ListGroup> : ''}
    </>
}

export default Cart;