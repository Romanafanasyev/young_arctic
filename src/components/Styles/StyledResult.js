import styled from "styled-components";

const Ul = styled.ul`
  position: absolute;
  width: 100%;
  list-style-type: none;
  padding: 0;
  top: 400px;
  left:220px;
  overflow: hidden;
`;

const Div = styled.div`
  
  &.Header {
    position: absolute;
    width: 100%;
    top: 200px;
    left: 220px;
    display: block;
    color: black;
    text-align: left;
    padding: 14px 16px;
    margin: 10px;
    text-decoration: none;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    background: lightcyan;
  }
`;

const Li = styled.li`
  float: left;
  width: 40%;
  margin-right: 100px;


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
    background-color: #8673A1;
    border: 1px solid white;
    color:white;
  }

  & div {
    width: 100%;
    color: black;
    text-align: center;
    padding: 14px 16px;
    margin: 10px;
    text-decoration: none;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    background: #9D81BA;
  }

  & h1 {
    font-size: 20px;
    border-bottom: 1px solid white;
  }

  & p {
    font-size: 15px;
    font-weight: normal;
    text-align: left;
  }
  & p.salary {
    position: relative;
    top:75px;
    font-size: 25px;
    font-weight: normal;
    text-align: right;
  }
`;

export {Ul, Li, Div};
