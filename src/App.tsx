import React from "react";
import Web3 from "web3";
import { EtherBlock, EtherPrice, Transactions, Home } from "./components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function RenderExplorer() {
  return (
    <Router>
      <div>
        <div>
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
          </ul>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/block" exact component={EtherBlock} />
        <Route path="/transactions" exact component={Transactions} />
        <Route path="/price" exact component={EtherPrice} />
      </div>
    </Router>
  );
}

export default RenderExplorer;
