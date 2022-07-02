import { ICart } from "../../interfaces/ICart";
import { IResponseAPI } from "../../interfaces/IResponseAPI";
import { SetFilteredProductsAction, SET_FILTERED_PRODUCTS } from "../actions/ecommerceActions";

type EcommerceState = {
  filter: IResponseAPI | null,
  cart: ICart[]
}

const INITIAL_STATE = {
  filter: null,
  cart: [],
};

type Actions = SetFilteredProductsAction;

const ecommerce = (state: EcommerceState = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case SET_FILTERED_PRODUCTS:
    return {
      ...state,
      filter: action.payload,
    };
  default:
    return state;
  }
};

export default ecommerce;
