import { IProduct } from "./IProduct";

export interface IResponseAPI {
  page: number,
  totalPages: number,
  itemsPerPage: number,
  totalItems: number,
  items: IProduct[]
}
