import React from "react";

export class Product extends React.Component {
  state = {
    total: 0
  };

  buy = () => {
    this.setState({ total: this.state.total + 1 });
    this.props.handleBuy(this.props.price);
  };

  sell = () => {
    this.setState({ total: this.state.total - 1 });
    this.props.handleBuy(-this.props.price);
  };

  show = () => {
    this.props.handleShow(this.props.name);
  };

  render() {
    return (
      <div>
        <p>
          {this.props.name} - {this.props.price}
        </p>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.sell}>Sell</button>
        <button onClick={this.show}>Show</button>
        <h3>{this.state.total} Items</h3>
        <hr />
      </div>
    );
  }
}
