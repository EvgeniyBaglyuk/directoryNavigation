import { BasketActionEnum, IBasketState } from '../types';

const DefaultState: IBasketState = {
  productsList: [],
  totalPrice: null,
};

export const BasketReducer = (state = DefaultState, action: any) => {
  switch (action.type) {
    case BasketActionEnum.ADD_DATA_TO_BASKET:
      return {
        productsList: action.payload.productsList,
        totalPrice: action.payload.totalPrice,
      };
    default:
      return state;
  }
};
