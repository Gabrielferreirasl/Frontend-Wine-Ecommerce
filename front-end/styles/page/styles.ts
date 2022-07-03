import styled from "styled-components";

export const MainPageStyle = styled.main`
  font-family: Lato,Arial,sans-serif;
  padding-left: 130px;
  padding-bottom: 50px;

  .found-products p {
    padding: 31px 0;
  }

  .found-products span {
    font-weight: 700;
  }

  .product-container {
    background-color: #FFFFFF;
    padding: 12px;
    border-radius: 3px;
    box-shadow: rgb(0 0 0 / 8%) 10px 10px 10px;
    cursor: pointer;
  }

  .loading {
    padding-left: 200px;
    padding-top: 100px;
  }

  .container-info {
    text-align: center;
    font-family: Lato,Arial,sans-serif;
  }

  .discount {
    font-size: 12px;
    line-height: 1.30;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .socio {
    display: flex;
    align-items: baseline;
    gap: 7px;
    justify-content: center;
  }

  h4 {
    margin-bottom: 9px;
    font-size: 1.1em;
  }

  .non-socio {
    color: #666666;
    font-weight: 800;
    margin-top: 0;
  }

  .price-socio {
    color: #b6116e;
    font-weight: 800;
  }

  .price-socio .currency {
    font-size: 15px;
  }

  .price-socio .price {
    font-size: 25px;
  }

  .price-socio .cents {
    font-size: 15px;
  }

  .socio h5 {
    font-size: 16px;
  }

  button {
    margin-top: 15px;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border-style: solid;
    background-color: #7ebc43;
    border-color: #7ebc43;
    color: #FFFFFF;
    font-weight: 600;
    cursor: pointer;
  }

  .discount p {
    color: #666666;
    text-decoration: line-through;
    margin: 0;
  }

  .discount span {
    background-color: rgb(250, 149, 75);
    color: white;
    padding: 0 5px;
    font-size: 11px;
    height: fit-content;
    font-weight: 650;
    border-radius: 3px;
  }

  .container-image {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .container-image img {
    image-rendering: optimizeQuality;
  }

  .all-products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 35px;
    width: 900px;
  }
`;

export const FooterPageStyle = styled.footer`
  display: flex;
  margin-left: 40%;
  margin-top: 10px;
  margin-bottom: 30px;
  gap: 12px;
  color: #b6116e;

  button {
    width: 50px;
    padding: 10px;
    border: 1px solid #b6116e;
    border-radius: 5px;
    color: #b6116e;
    font-weight: bold;
    cursor: pointer;
  }

  .next-btn {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .currentPage button {
    color: white;
    background-color: #b6116e;
    border: 1px solid #b6116e;
  }
`;
