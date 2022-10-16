import { combineReducers } from 'redux';
import { CategoriesReducer } from './CategoriesReducer';
import { ProductsReducer } from './ProductsReducer';
import { ProductReducer } from './ProductReducer';
import { BasketReducer } from './BasketReducer';

export const rootReducer = combineReducers({
  categories: CategoriesReducer,
  products: ProductsReducer,
  product: ProductReducer,
  basket: BasketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
