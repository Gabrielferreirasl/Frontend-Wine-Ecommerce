import { GetStaticPaths, GetStaticProps } from "next";
import Filters from "../../components/Filters";
import Header from "../../components/Header";
import { IResponseAPI } from "../../interfaces/IResponseAPI";

const Page = () => {
  return (
    <>
      <Header />
      <Filters />
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
    fallback: true
  };
}

export const getStaticProps: GetStaticProps = async (context) => { 
  const { page } = context.params;
  const BASE_URL = 'https://wine-back-test.herokuapp.com/'

  const response = await fetch(`${BASE_URL}products?page=${page}&limit=9`);
  const data: IResponseAPI = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

export default Page;
