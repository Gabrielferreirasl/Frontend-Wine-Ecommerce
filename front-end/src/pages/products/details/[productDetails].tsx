import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainDetailsStyle } from "../../../../styles/details/styles";
import Header from "../../../components/Header";
import ProductDescription from "../../../components/ProductDescription";
import { IProduct } from "../../../interfaces/IProduct";
import { IResponseAPI } from "../../../interfaces/IResponseAPI";

const Details = ({ product }: { product: null | IProduct }) => {
  const router = useRouter();

  const isThroughProps = router.query.product;

  useEffect(() => {
    if (!product) {
      router.push("/products/1");
    }
  }, [router, product]);

  return (
    <>
      <Header />
      <MainDetailsStyle>
        {product && (
          <div className="main-content">
            <div className="conatiner-goBack">
              <button type="button" onClick={() => router.back()}>
                {"< Voltar"}
              </button>
            </div>
            <div className="container-img-product">
              <Image
                src={product?.image}
                alt="wine"
                width="326px"
                height="459px"
              />
            </div>
            <div>
              <ProductDescription product={product} />
            </div>
          </div>
        )}
      </MainDetailsStyle>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const BASE_URL = "https://wine-back-test.herokuapp.com";
  let product;
  if (context.query.product) {
    product = JSON.parse(context.query.product.toString());
  } else if (context.query.productDetails) {
    const [name, id] = context.query.productDetails.toString().split("-");
    const data = await fetch(`${BASE_URL}/products?&name=${name}`);
    const apiResponse: IResponseAPI = await data.json();
    product = apiResponse.items.find((p) => p.id === Number(id));
  }

  return {
    props: {
      product,
    },
  };
};

export default Details;
