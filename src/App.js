import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <GlobalStyle />         
          <Header />
      <Outlet />
      <Footer />
      
    </div>
  );
}

export default App;
