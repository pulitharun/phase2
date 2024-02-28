import { configureStore } from '@reduxjs/toolkit';
import authReducer from './loginslice'
import { ProductReducer } from './productslice';
import { CustomerIdReducer } from './customerslice';
import { cartReducer } from './cartslice';
import { OrderReducer } from './orderslice';

export const store = configureStore({
    reducer:{
          auth:authReducer,
          product:ProductReducer,
          customerid:CustomerIdReducer,
          cart:cartReducer,
          order:OrderReducer
    }
})
export default store;