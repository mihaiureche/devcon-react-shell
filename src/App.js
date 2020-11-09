import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider, useSelector } from 'react-redux';
import './App.css';

import store from './store';
import Index from './components/Index/Index';
import MicroFrontend from './components/MicroFrontend/MicroFrontend';

const {
  REACT_APP_CART_HOST: cartHost,
} = process.env;

function CartMicro(products) {
  return <MicroFrontend host={cartHost} name="Cart" data={products} />;
}

const Header = () => {
  return (
    <>
      <div className="banner">
        <img width="300" src="logo-white.png" alt="DevCon 2020" />
        <img width="100" src="softvision-white.png" alt="DevCon 2020" />
      </div>
      <div>
        <Link to={'/'} className={'App-link'}>Products</Link> | 
        <Link to={'/cart'} className={'App-link'}>Cart</Link>
      </div>
    </>
  );
}

const Cart = () => {
  const products = useSelector(
    (state) => state.cart.products
  );

  return (
    <>{CartMicro(products)}</>
  )
}

const App = () => {
  return (
    <div className="App">
        <Provider store={store}>
          <Router>
            <>
              <Header />
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/cart" component={Cart} />
              </Switch>
            </>
          </Router>
        </Provider>
    </div>
  );
}

export default App;
