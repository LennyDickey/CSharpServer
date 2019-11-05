import React from "react";
import Product from "./components/products";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from "./components/Index";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Cards from "./components/Cards";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Index} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cards" component={Cards} />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
