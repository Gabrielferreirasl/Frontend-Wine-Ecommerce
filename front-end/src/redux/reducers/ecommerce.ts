import { ICart } from "../../interfaces/ICart";
import { IResponseAPI } from "../../interfaces/IResponseAPI";
import { RemoveFilteredProductsAction, REMOVE_FILTERED_PRODUCTS, SetFilteredProductsAction, SET_FILTERED_PRODUCTS } from "../actions/ecommerceActions";

type EcommerceState = {
  filter: IResponseAPI | null,
  cart: ICart[]
}

const INITIAL_STATE = {
  filter: null,
  cart: [],
};

type Actions =
SetFilteredProductsAction
| RemoveFilteredProductsAction;

const ecommerce = (state: EcommerceState = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case SET_FILTERED_PRODUCTS:
    return {
      ...state,
      filter: action.payload,
    };
    case REMOVE_FILTERED_PRODUCTS:
    return {
      ...state,
      filter: null,
    };
  default:
    return state;
  }
};

export default ecommerce;
