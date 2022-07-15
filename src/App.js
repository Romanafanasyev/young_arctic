import side_bar from './img/side_bar.png'
import top_bar from './img/top_bar.png'
import NavBar from "./components/NavBar";
import styled from "styled-components"
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
padding: 0;
background: white;
`

function App() {
  return (
    <BrowserRouter>
      <AppWrapper className="App-wrapper">
          <NavBar/>
          <AppRouter/>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
