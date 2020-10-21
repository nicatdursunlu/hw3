import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../../context/theme';

export const ProductsViewSwitcher = () => {

    const { view, changeView } = useContext(ThemeContext);


    return (
        <Container>
            <Button
                className={view === 'grid' ? 'active' : ''}
                onClick={() => changeView('grid')}>Grid view</Button>
            <Button
                className={view === 'list' ? 'active' : ''}
                onClick={() => changeView('list')}>List view</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    margin: 20px 0;
`

const Button = styled.button`
    width: 50%;
    border: 2px solid lightgrey;
    border-radius: 10px;
    background: white;
    padding: 8px 15px;
    transition: all .3s ease;
    text-transform: uppercase; 
    cursor: pointer;
    color: black;
    font-weight: bold;

    &:focus {
        outline: none;
    }

    &.active {
        border-color: blue;
    }
`
