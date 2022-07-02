import { IResponseAPI } from "../../interfaces/IResponseAPI";

export const SET_FILTERED_PRODUCTS = 'SET_FILTERED_PRODUCTS';
export type SetFilteredProductsAction = {
  type: typeof SET_FILTERED_PRODUCTS;
  payload: IResponseAPI;
};
