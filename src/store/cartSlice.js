import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        totalAmount: 0,
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);

            if(existingItem){
                existingItem.quantity++;
            
            }else{
                state.cart.push({
                    ...newItem,
                    quantity: 1,
                });
            }
            state.totalAmount += newItem.price;

        }
    }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;