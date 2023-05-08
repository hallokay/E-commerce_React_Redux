import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../fetures/cartSlice'
import authReducer from '../fetures/authSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});