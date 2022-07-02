import { Dispatch } from "redux";
import { IResponseAPI } from "../../interfaces/IResponseAPI";

export const SET_FILTERED_PRODUCTS = 'SET_FILTERED_PRODUCTS';
export type SetFilteredProductsAction = {
  type: typeof SET_FILTERED_PRODUCTS;
  payload: IResponseAPI;
};

export const setFilteredProducts = (payload: IResponseAPI) => (
  dispatch: Dispatch<SetFilteredProductsAction>
) => {
  dispatch({
    type: SET_FILTERED_PRODUCTS,
    payload,
  });
};

export const REMOVE_FILTERED_PRODUCTS = 'REMOVE_FILTERED_PRODUCTS';
export type RemoveFilteredProductsAction = {
  type: typeof REMOVE_FILTERED_PRODUCTS;
};

export const removeFilteredProducts = () => (
  dispatch: Dispatch<RemoveFilteredProductsAction>
) => {
  dispatch({
    type: REMOVE_FILTERED_PRODUCTS,
  });
};