import styled from "styled-components";

const Ul = styled.ul`
  position: absolute;
  width: 100%;
  list-style-type: none;
  padding: 0;
  top: 420px;
  left:220px;
  overflow: hidden;
`;

const A = styled.a`
  color:black;
`;

const Div = styled.div`
  
  &.Header {
    position: absolute;
    width: 100%;
    top: 190px;
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

const Button = styled.button`
  &.btnDiv{
    position: absolute;
    top:360px;
    left:250px;
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
  &.btnDiv_jobs{
    position: absolute;
    top:360px;
    left:350px;
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
}
  
  &:hover:not(.active) {
    background-color: #8673A1;
    border: 1px solid white;
    color:white;
`;

const Li = styled.li`
  float: left;
  width: 70%;
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
    margin-bottom: 15px;
  }
  & p.salary {
    float:right;
    margin-top:20px;
    width:150px;
    font-size: 15px;
    font-weight: normal;
    text-align: right;
  }
`;

export {Ul, Li, Div, Button, A};
