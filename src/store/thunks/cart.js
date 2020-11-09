import { addProduct } from '../slices/cart';

export const addToCart = (product) => async(dispatch, getState) => {
    const { cart: { products } } = getState();

    const newProducts = products.map((el) => el);
    newProducts.push(product);

    window.dispatchEvent(new Event('product-added-to-cart'));

    dispatch(addProduct(newProducts));
}