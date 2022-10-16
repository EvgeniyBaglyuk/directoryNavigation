export interface ICategoriesItem {
  id: number;
  title: string;
}
export interface ICategoriesState {
  loading: boolean;
  data: ICategoriesItem[];
  errorMessage: string;
}
export interface IProductItem {
  category_id: number;
  id: number;
  price: number;
  quantity: number;
  title: string;
}
export interface IProductsState {
  loading: boolean;
  data: IProductItem[];
  errorMessage: string;
}
export interface IProductBasketItem {
  product: IProductItem;
  quantity: number;
}
export interface IBasketState {
  productsList: IProductBasketItem[];
  totalPrice: number | null;
}

export enum CategoriesActionEnum {
  CATEGORIES_FAIL = 'CATEGORIES_FAIL',
  CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS',
  CATEGORIES_LOADING = 'CATEGORIES_LOADING',
}

interface IFetchCategoriesFailAction {
  type: CategoriesActionEnum.CATEGORIES_FAIL;
}
interface IFetchCategoriesLoadingAction {
  type: CategoriesActionEnum.CATEGORIES_LOADING;
}
interface IFetchCategoriesSuccessAction {
  type: CategoriesActionEnum.CATEGORIES_SUCCESS;
  payload: ICategoriesItem[];
}
export type CategoriesAction =
  | IFetchCategoriesFailAction
  | IFetchCategoriesLoadingAction
  | IFetchCategoriesSuccessAction;

export enum ProductsActionEnum {
  PRODUCTS_FAIL = 'PRODUCTS_FAIL',
  PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS',
  PRODUCTS_LOADING = 'PRODUCTS_LOADING',
}

interface IFetchProductsFailAction {
  type: ProductsActionEnum.PRODUCTS_FAIL;
}
interface IFetchProductsLoadingAction {
  type: ProductsActionEnum.PRODUCTS_LOADING;
}
interface IFetchProductsSuccessAction {
  type: ProductsActionEnum.PRODUCTS_SUCCESS;
  payload: IProductItem[];
}
export type ProductsAction =
  | IFetchProductsFailAction
  | IFetchProductsLoadingAction
  | IFetchProductsSuccessAction;

export enum ProductActionEnum {
  PRODUCT_FAIL = 'PRODUCT_FAIL',
  PRODUCT_SUCCESS = 'PRODUCT_SUCCESS',
  PRODUCT_LOADING = 'PRODUCT_LOADING',
}

interface IFetchProductFailAction {
  type: ProductActionEnum.PRODUCT_FAIL;
}
interface IFetchProductLoadingAction {
  type: ProductActionEnum.PRODUCT_LOADING;
}
interface IFetchProductSuccessAction {
  type: ProductActionEnum.PRODUCT_SUCCESS;
  payload: IProductItem[];
}
export type ProductAction =
  | IFetchProductFailAction
  | IFetchProductLoadingAction
  | IFetchProductSuccessAction;

export enum BasketActionEnum {
  ADD_DATA_TO_BASKET = 'ADD_DATA_TO_BASKET',
}

interface IFetchBasketSuccessAction {
  type: BasketActionEnum.ADD_DATA_TO_BASKET;
  payload: {
    productsList: IProductBasketItem[];
    totalPrice: number | null;
  };
}

export type BasketAction = IFetchBasketSuccessAction;
