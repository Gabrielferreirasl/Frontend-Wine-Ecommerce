import type { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import { IResponseAPI } from "../interfaces/IResponseAPI";
import { removeFilteredProducts, setFilteredProducts } from "../redux/actions/ecommerceActions";
import { useAppDispatch } from "../redux/AppHooks";

const Filters: NextPage = () => {
  const [filterByPrice, setFilterByPrice] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const BASE_URL = 'https://wine-back-test.herokuapp.com';

  useEffect(() => {
    if (!filterByPrice) {
      dispatch(removeFilteredProducts())
    } else {
      fetch(`${BASE_URL}/products?filter=${filterByPrice}&limit=9`)
      .then((data) => data.json())
      .then((data: IResponseAPI) => dispatch(setFilteredProducts(data)))
    }
  }, [filterByPrice, dispatch]);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target.name === filterByPrice) {
      return setFilterByPrice(null)
    }
    setFilterByPrice(ev.target.name)
  }

  return (
    <section>
      <h3>Refine sua busca</h3>
      <p>Por preço</p>
      <ul>
        <li>
          <input
            type="checkbox"
            name="0-40"
            checked={'0-40' === filterByPrice}
            id="filter-by-price-40"
            onChange={(ev) => handleChange(ev)}
          />
          <label htmlFor="filter-by-price-40">Até R$40</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="40-60"
            checked={'40-60' === filterByPrice}
            id="filter-by-price-40-60"
            onChange={(ev) => handleChange(ev)}
          />
          <label htmlFor="filter-by-price-40-60">R$40 A R$60</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="100-200"
            checked={'100-200' === filterByPrice}
            id="filter-by-price-100-200"
            onChange={(ev) => handleChange(ev)}
          />
          <label htmlFor="filter-by-price-100-200">R$100 A R$200</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="200-500"
            checked={'200-500' === filterByPrice}
            id="filter-by-price-200-500"
            onChange={(ev) => handleChange(ev)}
          />
          <label htmlFor="filter-by-price-200-500">R$200 A R$500</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="500-0"
            checked={'500-0' === filterByPrice}
            id="filter-by-price-500"
            onChange={(ev) => handleChange(ev)}
          />
          <label htmlFor="filter-by-price-500">Acima de R$500</label>
        </li>
      </ul>
    </section>
  );
};

export default Filters;
