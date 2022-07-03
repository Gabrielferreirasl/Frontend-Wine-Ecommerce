import styled from "styled-components";

export const MainDetailsStyle = styled.main`
  padding: 20px;
  margin-top: 60px;
  font-family: Lato,Arial,sans-serif;

  .conatiner-goBack button {
    margin-left: 10%;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
    width: max-content;
  }

  .product-info {
    width: 500px;
    margin-right: 100px;
  }

  .container-img-product {
    display: flex;
    align-items: center;
  }

  .container-product-details {
    display: flex;
  }

  .main-content {
    display: flex;
    justify-content: space-around;
  }

  .region-links {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .region-links a {
    color: #c81a79;
    font-weight: 500;
  }

  .region-links a:nth-child(5) {
    color: #666666;
  }

  .region-links span {
    font-size: 20px;
    font-weight: 200;
    color: #666666;
  }

  .description {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .non-member-price {
    font-weight: 600;
    color: #666666;
    margin-top: 2px;
  }

  .container-sommelierComment p {
    color: #666666;
  }

  .price-member{
    color: #c81a79;
    font-weight: 900;
    font-size: 30px;
  }

  .price-member span:nth-child(2) {
    font-size: 50px;
  }

  .price-member span:nth-child(3) {
    font-size: 40px;
  }
`;

export const AddOrRemoveBtnStyle = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 50px;
  background-color: #7ebc43;
  border-color: #7ebc43;
  border-radius: 5px;
  width: fit-content;
  border-style: solid 2px;
  padding: 15px 20px;
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

  .add-remove-btns {
    display: flex;
    gap: 30px;
  }

  .add-remove-btns button {
    border-radius: 50%;
    border-style: solid 1px;
    border-color: white;
    align-items: center;
  }
`;
