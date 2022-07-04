import styled from "styled-components";

export const MainCartStyle = styled.main`
  padding: 20px;
  display: block;
  margin-top: 50px;
  margin-left: 30%;
  font-family: Lato,Arial,sans-serif;
  width: max-content;
  margin-bottom: 30px;

  .empty-cart {
    margin-top: 50px;
    color: #666666;
    margin-left: 50%;
    width: max-content;
  }

  .product-container {
    display: flex;
    flex-direction: row;
    width: 600px;
    margin-bottom: 90px;
    list-style: none;
    justify-content: center;
  }

  .container-exclude {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
  }

  .container-exclude button {
    border: 1px solid #666666;
    border-radius: 50%;
    font-weight: 600;
    background-color: transparent;
    height: 25px;
    width: 25px;
  }

  .container-exclude button:hover {
    cursor: pointer;
    color: white;
    background-color: #c81a79;
  }

  .container-product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .container-changeQuantity {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .container-changeQuantity span {
    font-weight: 700;
    font-size: 18px;
    color: #c81a79;
  }

  .finish {
    display: flex;
    margin-top: 50px;
    justify-content: space-evenly;
    align-items: center;
  }

  .finish span{
    font-weight: 700;
    font-size: 20px;
  }

  .total {
    color: #c81a79;
  }

  .total span:nth-child(1) {
    color: #666666;
    font-size: 25px;
  }

  .total span:nth-child(2) {
    font-size: 40px;
  }

  .total span:nth-child(3) {
    font-size: 35px;
  }

  .finish button {
    background-color: #7ebc43;
    border: #7ebc43 solid 1px;
    border-radius: 3px;
    color: white;
    font-weight: 600;
    padding: 13px 25px;
    width: 200px;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const AddOrRemoveBtnCartStyle = styled.div`
  display: flex;
  gap: 50px;
  background-color: #7ebc43;
  border-color: #7ebc43;
  border-radius: 5px;
  width: fit-content;
  border-style: solid 2px;
  padding: 8px 15px;
  color: white;
  font-weight: 600;
  font-size: 20px;

  input {
    background-color: transparent;
    border-style: none;
    width: 30px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
    border-style: none;
    background-color: transparent;
    font-size: 20px;
    font-weight: 600;
    color: white;
  }
`;
