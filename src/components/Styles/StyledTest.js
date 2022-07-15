import styled from "styled-components";

const Div = styled.div`
  
  &.quiz {
    position: absolute;
    width: 30%;
    padding: 0;
    top: 200px;
    left: 40%;
    background: lightcyan;
    overflow: hidden;
  }
  
  &.quiz-questions-item_question{
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  &.quiz-indicator{
    margin-bottom: 10px;
  }
  
  &.quiz-questions{
    //background: green;
  }
`;

const Button = styled.button`
    margin-left: 230px;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 10px;
    background: inherit;

    &:hover:not(.active) {
      background-color: #8673A1;
      border: 1px solid white;
      color:white;
    }
`;

const Ul = styled.ul`
  //position: absolute;
  //width: 100%;
  list-style-type: none;
  padding: 0;
  //top: 200px;
  //left:220px;
  //overflow: hidden;
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

export {Ul, Li, Div, Button};
