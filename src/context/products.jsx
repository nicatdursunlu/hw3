import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrouserRouter as Router, Route, Switch } from 'react-router-dom';

export const productsContext = createContext();

export const ProductsContextProvider = ({ children }) => {

  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //     const res = await fetch('http://localhost:3000/products');
  //     const data = await res.json();
  //     setProducts(data);
  // }

  // useEffect(() => {
  //     getProducts();
  // }, [])

  const [data, setData] = useState({ products: [] });
  console.log(data);

  const getData = async (url) => {
    const response = await fetch(url);
    const newData = await response.json();
    setData(data => ({
      ...newData,
      products: [...data.products, ...newData.products]
    }));
    console.log(data);
  };

  useEffect(() => {
    getData('./products.json')
    // getData('./../public/products.json')

  }, []);

  return (
    <productsContext.Provider value={data.products}>
      {children}
    </productsContext.Provider>
  )
}