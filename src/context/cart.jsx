import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = { cartProducts: [] };

function cartReducer (state, { type, payLoad }) {
    switch(type) {
        case 'add_to_cart':
            return { cartProducts: [...state.cartProducts, payLoad] }
        case 'remove_from_cart':
            return { cartProducts: state.cartProducts.filter(p => p.uniqueLocalId !== payLoad) }
        default:
            return state;
    }
}

export const CartContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = product => {
        dispatch({
            type: 'add_to_cart',
            payLoad: { ...product, uniqueLocalId: Date.now() }
        })
    }

    const removeFromCart = uniqueLocalId => {
        dispatch({
            type: 'remove_from_cart',
            payLoad: uniqueLocalId
        })
    }

    return(
        <CartContext.Provider value={{...state, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}