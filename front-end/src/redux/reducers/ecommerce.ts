import { setLocalStorage } from "../../helpers/LSHelpers";
import { ICart } from "../../interfaces/ICart";
import { IResponseAPI } from "../../interfaces/IResponseAPI";
import {
  AddProductToCartAction,
  ADD_PRODUCT_TO_CART,
  ChangepProductQuantityAction,
  CHANGE_PRODUCT_QUANTITY,
  RemoveFilteredProductsAction,
  REMOVE_FILTERED_PRODUCTS,
  SetFilteredProductsAction,
  SetInitialCartFromLSAction,
  SET_FILTERED_PRODUCTS,
  SET_INITIAL_CART_FROM_LS,
} from "../actions/ecommerceActions";

type EcommerceState = {
  filter: IResponseAPI | null;
  cart: ICart[];
};

const INITIAL_STATE = {
  filter: null,
  cart: [],
};

type Actions =
  | SetFilteredProductsAction
  | RemoveFilteredProductsAction
  | SetInitialCartFromLSAction
  | AddProductToCartAction
  | ChangepProductQuantityAction;

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
      };
    case ADD_PRODUCT_TO_CART: {
      let cart;
      const { amount, ...product } = action.payload;
      const isOnCart = state.cart.find((p) => product.id === p.id);

      if (isOnCart) {
        cart = state.cart.map((productFromCart) => {
          if (productFromCart.id === product.id) {
            return { ...product, quantity: productFromCart.quantity + amount };
          }
          return productFromCart;
        });
      } else {
        cart = [...state.cart, { ...product, quantity: amount }];
      }

      setLocalStorage("cart", cart);
      return {
        ...state,
        cart,
      };
    }
    case CHANGE_PRODUCT_QUANTITY: {
      let cart;
      const { amount, ...product } = action.payload;

      cart = state.cart
        .map((productFromCart) => {
          if (productFromCart.id === product.id) {
            return { ...product, quantity: amount };
          }
          return productFromCart;
        })
        .filter(({ quantity }) => quantity > 0);

      setLocalStorage("cart", cart);
      return {
        ...state,
        cart,
      };
    }

    default:
      return state;
  }
};

export default ecommerce;
