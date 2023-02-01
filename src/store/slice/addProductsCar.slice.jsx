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

export const {setAddProductCar } = addProductsCarslice.actions;

export default addProductsCarslice.reducer;