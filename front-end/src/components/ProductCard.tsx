import { IProduct } from "../interfaces/IProduct";
import Image from "next/image";
import { useAppDispatch } from "../redux/AppHooks";
import Link from "next/link";
import PageProductDetails from "./PageProductDetails";
import { addProductToCart } from "../redux/actions/ecommerceActions";

const ProductCard = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="product-container">
        <Link
          href={{
            pathname: `/products/details/${product.name}-${product.id}`,
            query: { product: JSON.stringify(product) },
          }}
          rel="noopener noreferrer"
          as={`/products/details/${product.name}-${product.id}`}
        >
          <div className="product-info">
            <div className="container-image">
              <Image
                src={product.image}
                alt="wine"
                width="115px"
                height="176px"
              />
            </div>
            <PageProductDetails product={product} />
          </div>
        </Link>
      </div>
      <div className="container-addBtn">
        <button
          type="button"
          onClick={() => dispatch(addProductToCart({...product, amount: 1}))}
        >
          ADICIONAR
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
