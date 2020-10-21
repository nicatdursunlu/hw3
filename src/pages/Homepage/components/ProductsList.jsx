import React, { useContext } from 'react';
import styled from 'styled-components';

import { productsContext } from '../../../context/products';
import { ThemeContext } from '../../../context/theme';

import {SingleProductsListItem} from './SingleProductsListItem';

export const ProductsList = () => {

    const products = useContext(productsContext);
    const { view } = useContext(ThemeContext);
 
    return(

        <Lists>
            {products.map(item =>(
                <SingleProductsListItem
                    view={view}
                    key={item.id}
                    {...item}
                />
            ))}
            
        </Lists>
    )
}

const Lists = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px -10px;
`