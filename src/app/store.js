import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const { cart } = store.getState();
  try {
    localStorage.setItem('cart', JSON.stringify(cart.items));
  } catch (e) {
    console.warn('Could not persist cart to localStorage', e);
  }
});
