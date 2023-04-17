import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <image />
          <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
const image = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    `url(${require(`./bg.jpg${props.backgroundImage}`).default})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical alignment because of flex direction column
  align-items: center; //horizontal alignment because of flex direction column
`;

export default App;
