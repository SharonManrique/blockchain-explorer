import React from "react";
import Web3 from "web3";
import "./App.scss";

export const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/637fa9f2c8704cb0a09b249f1d085815"
  )
);

interface State {
  block: Object | null;
}

interface Props {}

export class getEtherBlock extends React.Component<Props, State> {
  private timer?: number;
  constructor(props: Props) {
    super(props);
    this.state = {
      block: {}
    };
  }

  public componentDidMount() {
    this.getBlock();
    this.timer = window.setInterval(() => this.getBlock(), 7000);
  }

  public componentWillUnmount() {
    clearInterval(this.timer);
  }
  private async getBlock() {
    try {
      const block = await web3.eth.getBlock("latest");
      this.setState({ block: block });
    } catch (e) {
      console.error(e);
    } finally {
    }
  }

  public render() {
    return <div>{JSON.stringify(this.state.block, null, 1)}</div>;
  }
}

export default getEtherBlock;
