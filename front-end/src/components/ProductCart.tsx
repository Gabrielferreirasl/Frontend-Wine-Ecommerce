import Image from "next/image";
import { useEffect, useState } from "react";
import { AddOrRemoveBtnCartStyle } from "../../styles/cart/styles";
import { ICart } from "../interfaces/ICart";
import {
  addProductToCart,
  changeProductQuantity,
} from "../redux/actions/ecommerceActions";
import { useAppDispatch } from "../redux/AppHooks";

const ProductCart = ({ product }: { product: ICart }) => {
  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    const NUMBER = Number(value);
    if (NUMBER && NUMBER !== 0) {
      dispatch(changeProductQuantity({ ...product, amount: NUMBER }));
    }
  };

  const getTotal = () => {
    return (product.quantity * product.price).toFixed(2).replace(".", ",");
  };

  return (
    <ul className="product-container">
      <li>
        <Image src={product.image} alt="wine" width="115px" height="176px" />
      </li>
      <div className="container-product-info">
        <div className="container-exclude">
          <h3>{product.name}</h3>
          <button
            onClick={() =>
              dispatch(
                changeProductQuantity({
                  ...product,
                  amount: 0,
                })
              )
            }
            type="button"
          >
            x
          </button>
        </div>
        <div className="container-changeQuantity">
          <AddOrRemoveBtnCartStyle>
            <button
              disabled={product.quantity === 1}
              onClick={() =>
                dispatch(
                  changeProductQuantity({
                    ...product,
                    amount: product.quantity - 1,
                  })
                )
              }
              type="button"
            >
              -
            </button>
            <input
              onChange={(ev) => handleChange(ev.target.value)}
              type="text"
              value={product.quantity}
            />
            <button
              onClick={() =>
                dispatch(addProductToCart({ ...product, amount: 1 }))
              }
              type="button"
            >
              +
            </button>
          </AddOrRemoveBtnCartStyle>
          <span>{`R$ ${getTotal()}`}</span>
        </div>
      </div>
    </ul>
  );
};

export default ProductCart;
