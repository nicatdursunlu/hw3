import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../context/cart';
import { FavoriteContext } from '../context/favorites';

export const Header = () => {

    const {cartProducts} = useContext(CartContext);
    const {favoriteProducts} = useContext(FavoriteContext);

    return(
        <Container>
            <StyledNavLink to="/products">Products</StyledNavLink>
            <StyledNavLink to="/cart">
                Cart ({cartProducts.length})
            </StyledNavLink>
            <StyledNavLink to="/favorites">
                Favorites ({favoriteProducts.length})
            </StyledNavLink>
            
        </Container>
    )
}

const Container = styled.header`
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
`

const StyledNavLink = styled(NavLink)`
    width: 30%;
    border: 2px solid lightgrey;
    padding: 10px;
    border-radius: 10px;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    transition: all .3s ease;
    font-weight: bold;

    &.active {
        border-color: blue;
        color: black;
    }
`