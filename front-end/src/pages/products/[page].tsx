import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Filters from "../../components/Filters";
import Header from "../../components/Header";
import { IResponseAPI } from "../../interfaces/IResponseAPI";
import { useAppSelector } from "../../redux/AppHooks";

import ProductCard from "../../components/ProductCard";
import { MainPageStyle } from "../../../styles/page/styles";

const Page = ({ data }: { data: IResponseAPI }) => {
  const { isFallback } = useRouter();
  const filter = useAppSelector((state) => state.ecommerce.filter);
  const infoData: IResponseAPI = filter || data;

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Filters />
        <MainPageStyle>
          {isFallback ? (
            <h2 className="loading">Carregando...</h2>
          ) : (
            <>
              <div className="found-products">
                <p>
                  <span>{infoData.totalItems}</span> produtos encontrados
                </p>
              </div>
              <div className="all-products-container">
                {infoData.items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </MainPageStyle>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const LIMIT_STATIC_PAGES = 4;
  const paths = [];

  for (let index = 1; index <= LIMIT_STATIC_PAGES; index += 1) {
    paths.push({ params: { page: index.toString() } });
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params;
  const BASE_URL = "https://wine-back-test.herokuapp.com/";

  const response = await fetch(`${BASE_URL}products?page=${page}&limit=9`);
  const data: IResponseAPI = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

export default Page;
