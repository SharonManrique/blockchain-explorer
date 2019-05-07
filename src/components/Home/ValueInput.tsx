import React from "react";

interface Props {
  onChangeHandler(e: React.FormEvent<HTMLInputElement>): void;
}

interface State {
  isValid: boolean;
}
export class ValueInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isValid: true
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  private isValid(input: string): boolean {
    return true;
  }

  private onChangeHandler(e: React.FormEvent<HTMLInputElement>): void {
    if (this.isValid(e.currentTarget.value)) {
      this.setState({ isValid: true });
      this.props.onChangeHandler(e);
    } else {
      this.setState({ isValid: false });
    }
  }

  render() {
    return (
      <input
        className={this.state.isValid ? "valid" : "invalid"}
        type="text"
        name="value-input"
        onChange={this.onChangeHandler}
      />
    );
  }
}
