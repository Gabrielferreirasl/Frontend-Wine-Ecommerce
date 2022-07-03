import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../../components/Header";
import { IProduct } from "../../../interfaces/IProduct";
import { IResponseAPI } from "../../../interfaces/IResponseAPI";

const Details = ({ product }: { product: null | IProduct}) => {
  const router = useRouter();
  
  const isThroughProps = router.query.product;

  useEffect(() => {
    if (!product) {
      router.push('/products/1')
    }
  }, [router, product]);

  return (
    <>
      <Header />
      <main>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const BASE_URL = 'https://wine-back-test.herokuapp.com';
  let product;
  if (context.query.product) {
    product = JSON.parse(context.query.product.toString())
  } else if (context.query.productDetails) {
    const [name, id] = context.query.productDetails.toString().split('-');
    const data = await fetch(`${BASE_URL}/products?&name=${name}`)
    const apiResponse: IResponseAPI = await data.json();
    product = apiResponse.items.find((p) => p.id === Number(id));
  }

  return {
    props: {
      product,
    },
  }
}

export default Details;
