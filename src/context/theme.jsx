import React, { useContext, useState, createContext } from 'react';
import styled from 'styled-components';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    
    const [view, setView] = useState('grid');
    const changeView = (viewType) => setView(viewType);
    
    return(
        <ThemeContext.Provider value={{
            view,
            changeView
        }}>
            { children }
        </ThemeContext.Provider>
    )
}