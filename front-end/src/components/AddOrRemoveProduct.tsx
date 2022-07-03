import { useState } from "react";
import { AddOrRemoveBtnStyle } from "../../styles/details/styles";
import { IProduct } from "../interfaces/IProduct";
import { addProductToCart } from "../redux/actions/ecommerceActions";
import { useAppDispatch } from "../redux/AppHooks";

const AddOrRemoveProduct = ({ product }: { product: IProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    if (Number(value) !== 0) {
      setQuantity(Number(value));
    }
  };

  return (
    <AddOrRemoveBtnStyle>
      <div className="add-remove-btns">
        <button
          disabled={quantity === 1}
          onClick={() => setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)}
          type="button"
        >
          -
        </button>
        <input
          onChange={(ev) => handleChange(ev.target.value)}
          type="text"
          value={quantity}
        />
        <button onClick={() => setQuantity(quantity + 1)} type="button">
          +
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch(addProductToCart({ ...product, amount: quantity }))
          }
          type="button"
        >
          Adicionar
        </button>
      </div>
    </AddOrRemoveBtnStyle>
  );
};

export default AddOrRemoveProduct;
