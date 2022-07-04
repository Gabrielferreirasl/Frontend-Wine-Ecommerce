import { useState } from "react";
import { MainCartStyle } from "../../../styles/cart/styles";
import Header from "../../components/Header";
import ProductCart from "../../components/ProductCart";
import { clearCart } from "../../redux/actions/ecommerceActions";
import { useAppDispatch, useAppSelector } from "../../redux/AppHooks";

const Home = () => {
  const cart = useAppSelector((state) => state.ecommerce.cart);
  const dispatch = useAppDispatch();

  const getTotal = () => {
    return cart
      .reduce((sum, product) => sum + product.quantity * product.price, 0)
      .toFixed(2)
      .replace(".", ",");
  };

  return (
    <>
      <Header />
      <MainCartStyle>
        {!cart.length ? (
          <h1 className="empty-cart">Carrinho Vazio...</h1>
        ) : (
          <>
            {cart.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
            <div className="finish">
              <div className="total">
                <span>Total R$ </span>
                <span>{getTotal().split(",")[0]}</span>
                <span>{`,${getTotal().split(",")[1]}`}</span>
              </div>
              <button onClick={() => dispatch(clearCart())} type="button">
                Finalizar Pedido
              </button>
            </div>
          </>
        )}
      </MainCartStyle>
    </>
  );
};

export default Home;
