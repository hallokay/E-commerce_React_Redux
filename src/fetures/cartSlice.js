import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       itemsList: [],
    totalQuantity: 0,
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;

            const existItem = state.itemsList.find((item) => item.id === newItem.id)

            // console.log(existItem.quantity);
            if (existItem) {
                existItem.quantity++
                existItem.totalPrice += newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    cover: newItem.cover,
                })
                state.totalQuantity++;
            }

        },
        removeFromCart(state, action) {
            const id = action.payload
            const exitstingItem = state.itemsList.find((item) => item.id === id)
            if (exitstingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter((item) => item.id !== id)
                state.totalQuantity--
            } else {
                exitstingItem.quantity--
                exitstingItem.totalPrice -= exitstingItem.price
            }
        },

    }
})

export const { addToCart, removeFromCart } = CartSlice.actions
export default CartSlice.reducer;