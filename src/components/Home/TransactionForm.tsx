import React from "react";
import { AddressInput } from "./AddressValue";
import { DataInput } from "./DataValue";
import { ValueInput } from "./ValueInput";

interface Props {
  onSubmitHandler(data: State): void;
}
interface State {
  value: number;
  data: string;
  toAddress: string;
  fromAddress: string;
}

export class TransactionForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: "",
      fromAddress: "",
      toAddress: "",
      value: 0
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    this.props.onSubmitHandler(this.state);
  }

  public render() {
    return (
      <form className="TransactionForm" onSubmit={this.onSubmitHandler}>
        <AddressInput />
        <DataInput />
        <ValueInput onChangeHandler={console.log} />
        <button />
      </form>
    );
  }
}
