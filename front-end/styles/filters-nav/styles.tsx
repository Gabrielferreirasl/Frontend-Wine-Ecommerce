import styled from 'styled-components';

export const SectionStyle = styled.section`
  padding-bottom: 10px;
  padding-left: 10%;

  p, label{
    font-family: Lato,Arial,sans-serif;
    font-size: 1rem;
    font-weight: 50;
    color: #666666;
  }

  h3 {
    padding: 25px 0;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    padding: 10px 0 10px;
  }

  ul li input {
    width: 1.7em;
    height: 1.7em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    outline: none;
    cursor: pointer;
  }

  ul li input:checked {
    background-color: #b6116e;
  }

  label {
    cursor: pointer;
    padding-left: 8px;
  }

`;
