import styled from "styled-components";

const Ul = styled.ul`
  position: absolute;
  width: 100%;
  list-style-type: none;
  padding: 0;
  top: 200px;
  left:220px;
  overflow: hidden;
`;

const Li = styled.li`
  float: left;
  
  
  & button {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 10px;
    background: inherit;
  }

  & button:hover:not(.active) {
    background-color: mediumorchid;
    border: 1px solid white;
    color:white;
  }

  & div {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    margin: 10px;
    text-decoration: none;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    background: lightcyan;
  }
  
  & h1 {
    font-size: 20px;
  }
  
  & p {
    font-size: 15px;
    font-weight: normal;
    text-align: left;
  }
`;

export {Ul, Li};
