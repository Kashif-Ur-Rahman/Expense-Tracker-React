import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './transactionSlice';
import cartReducer from './cartSlice'; // Ensure this import is present

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    cart: cartReducer, // Add the cart reducer here
  },
});

