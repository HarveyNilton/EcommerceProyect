import { createSlice } from '@reduxjs/toolkit';

export const loadingslice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        setLoading: (state, action) => {
            const loading = action.payload
            return loading
        }
    }
})

export const {setLoading} = loadingslice.actions;

export default loadingslice.reducer;
