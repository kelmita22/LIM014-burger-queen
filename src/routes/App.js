import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Menu from '../components/Menu';
import Cart from '../components/Cart';
import Chef from "../components/Chef";
import ChefOrder from "../components/ChefOrder";
import WaiterOrder from "../components/WaiterOrder";
import Layout from "../components/Layout";
/* import NotFound from "../components/NotFound"; */
import "../scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Layout >
          <Route path="/chef" component={Chef} />
          <Route path="/chefOrder" component={ChefOrder} />
          <Route path="/waiter" component={Menu} />
          <Route path="/cart" component={Cart} />
          <Route path="/waiterOrder" component={WaiterOrder} />
        </Layout>
       {/*  <Route path="/notfound" component={NotFound} /> */}
      </Switch>
    </BrowserRouter>

  );
}

export default App;
