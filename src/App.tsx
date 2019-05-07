import React, { Component } from "react";
import Web3 from "web3";
import {
  EtherBlock,
  EtherPrice,
  Transactions,
  Home,
  Accounts,
  NoAccounts
} from "./components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.scss";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        false ? <Component {...props} /> : <Redirect to="/noAccounts" />
      }
    />
  );
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="Header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/block">Ether Block Info</Link>
              </li>
              <li>
                <Link to="/transactions">Transactions</Link>
              </li>
              <li>
                <Link to="/price">Ether Price</Link>
              </li>
              <li>
                <Link to="/accounts">Your Account</Link>
              </li>
            </ul>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/block" exact component={EtherBlock} />
          <Route path="/transactions" exact component={Transactions} />
          <Route path="/price" exact component={EtherPrice} />
          <Route path="/noAccounts" exact component={NoAccounts} />
          <PrivateRoute path="/accounts" exact component={Accounts} />
        </div>
      </Router>
    );
  }
}

export default App;
