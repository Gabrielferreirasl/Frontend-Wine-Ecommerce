import { IProduct } from "../interfaces/IProduct";

const PageProductDetails = ({ product }: { product: IProduct }) => {
  const [priceNonMember, centsNonMember] = product.priceNonMember
    .toFixed(2)
    .replace(".", ",")
    .split(",");

  const [priceMember, centsMember] = product.priceMember
    .toFixed(2)
    .replace(".", ",")
    .split(",");

  return (
    <div className="container-info">
      <h4>{product.name}</h4>
      <div className="discount">
        <p>{`R$ ${`${priceNonMember},${centsNonMember}`}`}</p>
        <span>{`${product.discount}% OFF`}</span>
      </div>
      <div className="socio">
        <h5>SÓCIO WINE</h5>
        <div className="price-socio">
          <span className="currency">R$ </span>
          <span className="price">{priceMember}</span>
          <span className="cents">{`,${centsMember}`}</span>
        </div>
      </div>
      <p className="non-socio">{`NÃO SÓCIO R$ ${`${priceNonMember},${centsNonMember}`}`}</p>
    </div>
  );
};

export default PageProductDetails;
