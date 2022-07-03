import { IProduct } from "./IProduct";

export interface ICart extends IProduct {
  quantity: number,
}

export interface IAddRemoveAmount extends IProduct {
  amount: number
}
