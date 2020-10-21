import React, { createContext, useReducer } from 'react';

export const FavoriteContext = createContext();

const initialState = { favoriteProducts: [] };

function cartReducer (state, { type, payLoad }) {
    switch(type) {
        case 'add_to_favorites':
            return { favoriteProducts: [...state.favoriteProducts, payLoad] }
        case 'remove_from_favorites':
            return { favoriteProducts: state.favoriteProducts.filter(p => p.uniqueLocalId !== payLoad) }
        default:
            return state;
    }
}

export const FavoriteContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToFavorites = product => {
        dispatch({
            type: 'add_to_favorites',
            payLoad: { ...product, uniqueLocalId: Date.now() }
        })
    }

    const removeFromFavorites = uniqueLocalId => {
        dispatch({
            type: 'remove_from_favorites',
            payLoad: uniqueLocalId
        })
    }

    return(
        <FavoriteContext.Provider value={{...state, addToFavorites, removeFromFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}