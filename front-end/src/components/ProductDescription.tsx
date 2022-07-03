import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { IProduct } from "../interfaces/IProduct";
import AddOrRemoveProduct from "./AddOrRemoveProduct";

const ProductDescription = ({ product }: { product: IProduct }) => {
  const [priceMember, centsMember] = product.priceMember
    .toFixed(2)
    .replace(".", ",")
    .split(",");

  return (
    <div className="product-info">
      <div className="region-links">
        <a href="#">Vinhos</a>
        <span>{">"}</span>
        <a href="#">{product?.country}</a>
        <span>{">"}</span>
        <a href="#">{product?.region}</a>
      </div>
      <div>
        <h1>{product.name}</h1>
        <div className="description">
          <Image src={product.flag} alt="country" width="20px" height="20px" />
          <p>{product.country}</p>
          <p>{product.type}</p>
          <p>{product.classification}</p>
          <p>{product.size}</p>
          <Rating
            size={30}
            readonly={true}
            ratingValue={0}
            initialValue={product.rating}
          />
          <p>{`(${product.avaliations})`}</p>
        </div>
      </div>
      <div>
        <div className="price-member">
          <span>R$ </span>
          <span>{priceMember}</span>
          <span>{`,${centsMember}`}</span>
        </div>
        <p className="non-member-price">{`NÃO SÓCIO R$ ${product.priceNonMember
          .toFixed(2)
          .replace(".", ",")}/UN`}</p>
      </div>
      <div className="container-sommelierComment">
        <h3>Comentário do Sommelier</h3>
        <p>{product.sommelierComment}</p>
      </div>
      <AddOrRemoveProduct product={product} />
    </div>
  );
};

export default ProductDescription;
