import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from './loading.slice';

export const productsslice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload
            return products
        }

    }
})

export const getProductsthunk = () => (dispatch) => {
    dispatch(setLoading(true));
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then((res) => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setLoading(false)));
}

export const filterProductsthunk = (id) => (dispatch) => {
    dispatch(setLoading(true));
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
        .then((res) => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setLoading(false)));
}

export const filterforNamethunk = (newSearch) => (dispatch) => {
    dispatch(setLoading(true));
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${newSearch}`)
        .then((res) => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setLoading(false)));
}

export const { setProducts } = productsslice.actions;

export default productsslice.reducer;
