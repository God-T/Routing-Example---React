import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            {/* switch order with: most specific one --> generate one*/}
            <Route
              path="/products"
              render={(props) => <Products someProp="someProp" {...props} />}
            />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
            {/* <Route path="/" exact component={Home} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
