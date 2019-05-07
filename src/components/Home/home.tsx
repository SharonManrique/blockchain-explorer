import React from "react";
import "./home.scss";
import { TransactionForm } from "./TransactionForm";
function Home() {
  return (
    <div className="Homepage">
      <div className="Homepage-title">Blockchain Explorer</div>
      <div className="Homepage-description">This is my explorer</div>
      <TransactionForm onSubmitHandler={console.log} />
    </div>
  );
}

export default Home;
