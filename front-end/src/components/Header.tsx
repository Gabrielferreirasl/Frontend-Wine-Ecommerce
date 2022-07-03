import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeaderStyle, SearchInput } from "../../styles/header/styles";
import { getLocalStorage } from "../helpers/LSHelpers";
import { ICart } from "../interfaces/ICart";
import { IResponseAPI } from "../interfaces/IResponseAPI";
import {
  setFilteredProducts,
  setInitialCartFromLS,
} from "../redux/actions/ecommerceActions";
import { useAppDispatch } from "../redux/AppHooks";
import HeaderLinks from "./HeaderLinks";

import profileLogo from "../../public/profileLogo.png";
import searchLogo from "../../public/searchLogo.png";
import buttonSearchLogo from "../../public/buttonSearch.png";
import HeaderCart from "./HeaderCart";

const Header: NextPage = () => {
  const [textSearch, setTextSearch] = useState<string>("");
  const [searchbar, setSearchbar] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cartLS: ICart[] = getLocalStorage("cart");
    if (cartLS) {
      dispatch(setInitialCartFromLS(cartLS));
    }
  }, [dispatch]);

  const handleFilter = () => {
    fetch(
      `https://wine-back-test.herokuapp.com/products?&limit=9&name=${textSearch}`
    )
      .then((data) => data.json())
      .then((data: IResponseAPI) => dispatch(setFilteredProducts(data)));
  };

  return (
    <HeaderStyle>
      <div className="header-main">
        <div>
          <Image
            className="logo"
            src="https://img.wine.com.br/logo/wine/black/wine.svg"
            alt="wine"
            width="100px"
            height="45px"
          />
        </div>
        <HeaderLinks />
        <div className="header-interactive">
          <Image
            className="searchbar"
            role="button"
            onClick={() => setSearchbar(!searchbar)}
            src={searchLogo}
            alt="wine"
            width="53px"
            height="53px"
          />
          <Image src={profileLogo} alt="wine" width="53px" height="50px" />
          <HeaderCart />
        </div>
      </div>
      {searchbar && (
        <SearchInput>
          <input
            placeholder="Pesquisar"
            type="text"
            onChange={(ev) => setTextSearch(ev.target.value)}
          />
          <Image
            role="button"
            onClick={() => handleFilter()}
            src={buttonSearchLogo}
            width="32px"
            height="5px"
            alt="search"
          />
        </SearchInput>
      )}
    </HeaderStyle>
  );
};

export default Header;
