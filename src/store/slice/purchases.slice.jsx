import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setLoading } from './loading.slice';

export const purchasesslice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (state, action) => {
            const purchases = action.payload
            return purchases
        }
    }

})

export const getPurchasesthunk = () => (dispatch) => {
    dispatch(setLoading(true));
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', getConfig())
        .then((res) => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setLoading(false)));
}

export const { setPurchases } = purchasesslice.actions;

export default purchasesslice.reducer;
