import React, { createContext, useReducer } from 'react';
import cartReducer from './cartReducer';

const initialState = {
  items: [],
};

export const CartContext = createContext({
  state: initialState,
  dispatch: () => {},
});

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
