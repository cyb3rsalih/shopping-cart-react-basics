import React from "react";

import { Product } from "./Product";
import { Total } from "./Total";
import { ProductForm } from "./ProductForm";
export class ProductList extends React.Component {
  state = {
    total: 0,
    productList: [
      { name: "Android", price: 121 },
      { name: "Apple", price: 423 },
      { name: "Nokia", price: 12 }
    ]
  };

  createProduct = product => {
    this.setState({ productList: [...this.state.productList, product] });
  };
  showProduct = name => {
    alert("You see " + name);
  };

  buyProduct = price => {
    this.setState({ total: this.state.total + price });
  };

  render() {
    var products = this.state.productList.map(p => (
      <Product
        name={p.name}
        price={p.price}
        handleBuy={this.buyProduct}
        handleShow={this.showProduct}
      />
    ));

    return (
      <div>
        <ProductForm handleCreate={this.createProduct} />
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}
