import {configureStore} from '@reduxjs/toolkit';
import { productsApi } from './services/ProductsApi';
import AuthSlice from './features/Auth/AuthSlice';
import { fakeStoreApi } from './services/fakestoreapi';
import CartSlice from './features/Cart/CartSlice';

const Store = configureStore({
    reducer:{
        auth:AuthSlice,
        cart:CartSlice,
        [productsApi.reducerPath]:productsApi.reducer,
        [fakeStoreApi.reducerPath]:fakeStoreApi.reducer
    },
    middleware:(gdm) => gdm().concat(productsApi.middleware, fakeStoreApi.middleware)

})

export default Store