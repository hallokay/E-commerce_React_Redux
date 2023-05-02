import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalQuality: 0,
    itemsList: [],
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action) {
            const newItem = action.payload

            const existItem = state.itemsList.find((item) => item.id == newItem.id)
            if(existItem) {
                existItem.quantity++
                existItem.totalPrice += newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity:1,
                    totalPrice: newItem.name,
                    cover:newItem.cover,
                })
                state.totalQuality++
            }

        }
    }
})

export const { addToCart } = CartSlice.actions
export default CartSlice.reducer;