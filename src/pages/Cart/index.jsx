import React, { useContext } from 'react';
import { Layout } from '../../commons';

import styled from 'styled-components';

import { CartContext } from '../../context/cart';


export const Cart = () => {

    const {cartProducts, removeFromCart} = useContext(CartContext);

    return(
        <Layout>
            <h1>Cart</h1>
            {cartProducts.length == 0 ? 
                (<h2>Cart is empty</h2>)
            :
            cartProducts.map(({ uniqueLocalId, name, price, image, desc }) => (
                <Container key={ uniqueLocalId }>
                    <img src={image} alt={name} />
                    <CartDescription>
                        <h3>{name} -- ${price}</h3>
                        <p>{desc}</p>            
                        <Button onClick={() => removeFromCart(uniqueLocalId)}>Remove From Cart</Button>
                    </CartDescription>
                </Container>
            ))}
        </Layout>
    )
}

const Container = styled.div`
    width: 520px;
    padding: 20px;
    border-radius: 10px;
    margin-right: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    display: flex;
    margin-bottom: 40px;

    img {
        width: 180px;
        height: 120px;
        padding-right: 80px;
        border-radius: 5px;
    }
`

const CartDescription = styled.div`

`

const Button  = styled.button`
    padding: 5px 10px;
    background: red;
    border: none;
    color: white;
    border-radius: 5px;
    text-transform: uppercase;
`