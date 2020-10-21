import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const SingleProductsListItem = ({image, name, price, id, view}) => {
    return(
        <Cart to={`/products/${id}`} className={`product-card-list-item--${view}`}>
            <img alt={name} src={image} />
            <h4>{name}</h4>
            <h3>${price}</h3>
        </Cart>
    )
}

const Cart = styled(Link)`
    width: calc((100% - 60px) / 3);
    margin: 0 10px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 15px;
    color: black;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


    img {
        width: 100%;
        height: 150px;
        border-radius: 10px;
        object-fit: contain;
    }

    &.product-card-list-item--list {
        width: calc(100% - 20px);
        img{
            width: 100px;
            height: 100px;
        }
    }
    
`