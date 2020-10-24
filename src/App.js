import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./components/index";
import NewIn from "./components/newIn";
import Bestsellers from "./components/bestsellers";
import Products from "./components/products";
import NotFound from "./components/notFound";
import logo from "./logo.svg";
import "./App.css";
import ProductCategory from "./components/productCategory";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main className="container-fluid">
        <Switch>
          <Route path="/index" component={HomePage} />
          <Route path="/new-in" component={NewIn} />
          <Route path="/bestsellers" component={Bestsellers} />
          <Route path="/products" component={Products} />
          <Route path="/productcategory" component={ProductCategory} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/index" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
