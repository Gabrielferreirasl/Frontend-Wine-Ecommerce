import styled from 'styled-components';

export const HeaderStyle = styled.header`
  box-shadow: 0 3px 3px rgb(0 0 0 / 8%);
  font-family: Lato,Arial,sans-serif;
  font-size: 1rem;
  font-weight: 450;

  .header-main {
    display: flex;
    height: 90px;
    color: #666;
    background-color: #FFFFFF;
    justify-content: space-around;
    align-items: center;
    
  }

  .links {
    display: flex;
    justify-content: space-around;
    width: 30%;
  }

  .links a {
    padding: 27px 4px 32px;
  }

  .logo {
    padding: 15px;
  }

  .header-interactive {
    display: flex;
    justify-content: space-around;
    width: 18%;
  }

  .header-main .activate {
    color: #b6116e;
    border-bottom: 4px solid #b6116e;
  }

  .searchbar:hover{
    cursor: pointer;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f5f5f5;
  padding: 12px;

  img:hover {
    cursor: pointer;
  }
  
  input {
    font-family: inherit;
    width: 68%;
    margin-right: 20px;
    border: 0;
    outline: 0;
    font-size: 1.3rem;
    color: #666;
    padding: 7px 9px;
    transition: border-color 0.2s;
    color: #b6116e;
    border-bottom: 1px solid #b6116e;
  }
`;