import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
     
          <Header />
      <Outlet />
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
