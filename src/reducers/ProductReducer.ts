import { IProductsState, ProductActionEnum } from '../types';

const DefaultState: IProductsState = {
  loading: false,
  data: [],
  errorMessage: '',
};

export const ProductReducer = (state = DefaultState, action: any) => {
  switch (action.type) {
    case ProductActionEnum.PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case ProductActionEnum.PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: 'Something went wrong, an error occurred',
      };
    case ProductActionEnum.PRODUCT_SUCCESS:
      return {
        loading: false,
        errorMessage: '',
        data: action.payload,
      };
    default:
      return state;
  }
};
