import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Define your root reducer

const persistConfig = {
  key: 'root',
  storage,
  // Add any additional configuration options for redux-persist if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
