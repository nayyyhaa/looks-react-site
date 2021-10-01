import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//styles
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={AboutUs} />
          <Route path="/work" component={OurWork} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
