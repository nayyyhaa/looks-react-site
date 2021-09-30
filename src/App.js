import React from "react";
//styles
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <h1 className="title-text">Looks PortFolio</h1>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
