import React, {useContext} from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import {productsContext} from '../../../context/products';
import { CartContext } from '../../../context/cart'

import { IoIosStar } from "react-icons/io";
import { FavoriteContext } from '../../../context/favorites';

export const SingleProduct = ({ history: { push }, match: { params: { id } } }) => {

    const productsList = useContext(productsContext);
    const { addToCart } = useContext(CartContext);
    const { addToFavorites } = useContext(FavoriteContext);

    const product = productsList.find(item => item.id == id);

    return(
        <Container>
            {product && (
                <Popup>
                    <Close onClick={() => push('/products')}>X</Close>
                    <Image border={product.color} src={product.image} alt={product.name} />
                    <h1>{product.name}</h1>
                    <h2>${product.price}</h2>
                    <p>{product.desc}</p>
                    <Button onClick={() => addToCart(product)}>Add to cart</Button>
                    <StyledLink onClick={() => addToFavorites(product)}>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <Star><IoIosStar/></Star>
                    </StyledLink>
                </Popup>
            )}
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
const Popup = styled.div`
    width: 96%;
    padding: 40px;
    text-align: center;
    max-width: 600px;
    color: black;
    border-radius: 15px;
    background: white;
    position: relative;
`

const Image = styled.img`
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 100%;

    ${p => p.border && css`
        border: 2px solid ${p.border}
    `}
`

const Close = styled.button`
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: red;
    color: white;
    border: none;
    position: absolute;
    top: -15px;
    right: -15px;
`

const Button = styled.button`
    padding: 5px 10px;
    margin-right: 100px;
    background: black;
    border: none;
    color: white;
    border-radius: 5px;
    text-transform: uppercase;
`

const StyledLink = styled(Link)`
    color: #C72E2E;
    font-size: 20px;
`

const Star = styled(Link)`
    color: black;
    font-size: 20px;
`