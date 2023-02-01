import { configureStore } from '@reduxjs/toolkit'
import  addProductsCarslice from './slice/addProductsCar.slice'
import  loadingslice  from './slice/loading.slice'
import  productsslice  from './slice/products.slice'
import  purchasesslice  from './slice/purchases.slice'


export default configureStore({
    reducer: {
        loading : loadingslice,
        products : productsslice,
        purchases : purchasesslice,
        addProductCar: addProductsCarslice
    }
})
