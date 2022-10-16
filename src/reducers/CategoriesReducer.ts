import { CategoriesActionEnum, ICategoriesState } from '../types';

const DefaultState: ICategoriesState = {
  loading: false,
  data: [],
  errorMessage: '',
};

export const CategoriesReducer = (state = DefaultState, action: any) => {
  switch (action.type) {
    case CategoriesActionEnum.CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case CategoriesActionEnum.CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: 'Something went wrong, an error occurred',
      };
    case CategoriesActionEnum.CATEGORIES_SUCCESS:
      return {
        loading: false,
        errorMessage: '',
        data: action.payload,
      };
    default:
      return state;
  }
};
