import {
  BasketAction,
  BasketActionEnum,
  CategoriesAction,
  CategoriesActionEnum,
  IProductBasketItem,
  ProductAction,
  ProductActionEnum,
  ProductsAction,
  ProductsActionEnum,
} from '../types';
import categories from '../mockData/categories.json';
import items from '../mockData/items.json';
import { DELAY_WAIT_SERVER } from '../constans';
import { Dispatch } from 'redux';

export const GetCategories =
  () => async (dispatch: Dispatch<CategoriesAction>) => {
    try {
      dispatch({
        type: CategoriesActionEnum.CATEGORIES_LOADING,
      });

      // эмуляция ожидания бэка
      setTimeout(() => {
        dispatch({
          type: CategoriesActionEnum.CATEGORIES_SUCCESS,
          payload: categories,
        });
      }, DELAY_WAIT_SERVER);
    } catch (e) {
      dispatch({
        type: CategoriesActionEnum.CATEGORIES_FAIL,
      });
    }
  };

export const GetProducts =
  (category_id: string) => async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({
        type: ProductsActionEnum.PRODUCTS_LOADING,
      });
      // эмуляция полечения данных с бэка
      const productList = items.filter(
        // eslint-disable-next-line camelcase
        (item) => item.category_id === +category_id,
      );
      // эмуляция ожидания бэка
      setTimeout(() => {
        dispatch({
          type: ProductsActionEnum.PRODUCTS_SUCCESS,
          payload: productList,
        });
      }, DELAY_WAIT_SERVER);
    } catch (e) {
      dispatch({
        type: ProductsActionEnum.PRODUCTS_FAIL,
      });
    }
  };

export const GetProduct =
  (category_id: number | string, product_id: number | string) =>
  async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({
        type: ProductActionEnum.PRODUCT_LOADING,
      });
      // эмуляция полечения данных с бэка
      const productList = items.filter(
        // eslint-disable-next-line camelcase
        (item) => item.category_id === +category_id && item.id === +product_id,
      );
      // эмуляция ожидания бэка
      setTimeout(() => {
        dispatch({
          type: ProductActionEnum.PRODUCT_SUCCESS,
          payload: productList,
        });
      }, DELAY_WAIT_SERVER);
    } catch (e) {
      dispatch({
        type: ProductActionEnum.PRODUCT_FAIL,
      });
    }
  };

export const SetBasketData =
  ({
    productsList,
    totalPrice,
  }: {
    productsList: IProductBasketItem[];
    totalPrice: number;
  }) =>
  (dispatch: Dispatch<BasketAction>) => {
    dispatch({
      type: BasketActionEnum.ADD_DATA_TO_BASKET,
      payload: {
        productsList,
        totalPrice,
      },
    });
  };
