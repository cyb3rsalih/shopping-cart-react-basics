import React from "react";

export class ProductForm extends React.Component {
  state = [];

  submitProduct = e => {
    e.preventDefault();
    alert("Name " + this.refs.name.value + " - $" + this.refs.price.value);

    const productName = this.refs.name.value;
    const productPrice = parseInt(this.refs.price.value);

    const product = { name: productName, price: productPrice };

    this.props.handleCreate(product);

    this.refs.name.value = "";
    this.refs.price.value = "";
  };

  render() {
    return (
      <form onSubmit={this.submitProduct}>
        <br />
        <input type="text" placeholder="Product Name" ref="name" />
        <br />
        <input type="text" placeholder="Product Price" ref="price" />
        <br />
        <button>Create Product</button>
        <hr />
      </form>
    );
  }
}
