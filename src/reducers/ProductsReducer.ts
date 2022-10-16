import { IProductsState, ProductsActionEnum } from '../types';

const DefaultState: IProductsState = {
  loading: false,
  data: [],
  errorMessage: '',
};

export const ProductsReducer = (state = DefaultState, action: any) => {
  switch (action.type) {
    case ProductsActionEnum.PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case ProductsActionEnum.PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: 'Something went wrong, an error occurred',
      };
    case ProductsActionEnum.PRODUCTS_SUCCESS:
      return {
        loading: false,
        errorMessage: '',
        data: action.payload,
      };
    default:
      return state;
  }
};
