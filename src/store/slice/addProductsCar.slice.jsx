import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setLoading } from './loading.slice';

export const addProductsCarslice = createSlice({
    name: 'addProductCar',
    initialState: [],
    reducers: {
        setAddProductCar: (state, action) => {
            const addProductCar = action.payload
            return addProductCar
        }
    }
})

export const addProducCarthunk = () => (dispatch) => {
    dispatch(setLoading(true));
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
        .then((res) => dispatch(setAddProductCar(res.data)))
        .finally(() => dispatch(setLoading(false)));
}

export const AddPurchasesthunk = (purchases) => (dispatch) => {
    dispatch(setLoading(true));
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart', purchases , getConfig())
        .then(() => dispatch(addProducCarthunk()))
        .catch(()=>alert('Hubo un error'))
        .finally(() => dispatch(setLoading(false)));
}

export const  purchaseCartthunk = () => (dispatch) => {
    dispatch(setLoading(true));
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases',{},getConfig())
        .then(() => dispatch(addProducCarthunk()))
        .finally(() => dispatch(setLoading(false)));
}

export const updatePurchasesthunk = (id, quantity) => (dispatch) => {
    dispatch(setLoading(true));
    const body = {
        "quantity": quantity,
    }
    axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}/`, body, getConfig())
        .then(() => dispatch(addProducCarthunk()))
        .finally(() => dispatch(setLoading(false)));
}



export const {setAddProductCar } = addProductsCarslice.actions;

export default addProductsCarslice.reducer;
