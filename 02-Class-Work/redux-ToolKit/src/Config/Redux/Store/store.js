import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducers/todoSlice"
import cartReducer from "../reducers/cartSlice"



export const store = configureStore({
    reducer: {
        todos: todoReducer,
        cart: cartReducer
    }
})