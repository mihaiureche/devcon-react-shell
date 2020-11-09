import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { reducer as products } from './slices/products';
import { reducer as cart } from './slices/cart';

const logger = createLogger();

const reduxMiddleware = [...getDefaultMiddleware()];
if (localStorage && localStorage.getItem('useReduxLogger') === 'true') {
  reduxMiddleware.push(logger);
}
const store = configureStore({
  reducer: {
    products,
    cart
  },
  middleware: reduxMiddleware,
});

export default store;
