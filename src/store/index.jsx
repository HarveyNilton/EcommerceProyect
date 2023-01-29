import { configureStore } from '@reduxjs/toolkit'
import  loadingslice  from './slice/loading.slice'
import  productsslice  from './slice/products.slice'


export default configureStore({
    reducer: {
        loading : loadingslice,
        products : productsslice
    }
})
