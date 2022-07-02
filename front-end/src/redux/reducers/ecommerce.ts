import { ICart } from "../../interfaces/ICart";
import { IResponseAPI } from "../../interfaces/IResponseAPI";

type EcommerceState = {
  filter: IResponseAPI | null,
  cart: ICart[]
}

const INITIAL_STATE = {
  filter: null,
  cart: [],
};

type Actions = ''

const ecommerce = (state: EcommerceState = INITIAL_STATE, action: Actions) => {
  switch (action) {
    
  default:
    return state;
  }
};

export default ecommerce;
