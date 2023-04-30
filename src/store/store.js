import { ConfigureStore } from "@reduxjs/toolkit";
import {}
export const store = ConfigureStore({
    reducer: {
        cart: cartSlice.reducer,
    }

})