import { createSlice } from '@reduxjs/toolkit';

export const {
    reducer,
    actions: { addProduct }
} = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total: null
    },
    reducers: {
        addProduct: (state, action) => {
            return {
                ...state,
                products: action.payload
            }
        }
    }
});