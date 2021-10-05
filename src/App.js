import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//styles
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={AboutUs} />
          <Route path="/work" exact component={OurWork} />
          <Route path="/work/:id" component={MovieDetails} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
