import React from "react";

export class Total extends React.Component {
  render() {
    return (
      <div>
        <h1>Total Cash: {this.props.total} $</h1>
      </div>
    );
  }
}
