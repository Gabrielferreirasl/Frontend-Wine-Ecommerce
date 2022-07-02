import { ICart } from "../../interfaces/ICart";
import { IResponseAPI } from "../../interfaces/IResponseAPI";
import { RemoveFilteredProductsAction, REMOVE_FILTERED_PRODUCTS, SetFilteredProductsAction, SetInitialCartFromLSAction, SET_FILTERED_PRODUCTS, SET_INITIAL_CART_FROM_LS } from "../actions/ecommerceActions";

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
| RemoveFilteredProductsAction
| SetInitialCartFromLSAction;

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
    case SET_INITIAL_CART_FROM_LS:
      return {
        ...state,
        cart: action.payload, 
      }
  default:
    return state;
  }
};

export default ecommerce;
