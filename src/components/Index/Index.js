import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import MicroFrontend from "../MicroFrontend/MicroFrontend";
import { addToCart as addToCartAction } from '../../store/thunks/cart';

const {
  REACT_APP_PRODUCT_HOST: productsHost,
} = process.env;

function Product(products) {
  return <MicroFrontend host={productsHost} name="Product" data={products} />;
}

const Index = () => {
    const dispatch = useDispatch();

    const addToCart = useCallback((e) => {
        dispatch(addToCartAction(e.detail));
    }, [])

    useEffect(() => {
        window.addEventListener('add-to-cart', addToCart);
    }, [addToCart]);

    useEffect(() => {
        return () => {
            window.removeEventListener('add-to-cart', addToCart);
        }
    })

    const products = useSelector(
        (state) => state.products.products
    );

    return Product(products)
}

export default Index;