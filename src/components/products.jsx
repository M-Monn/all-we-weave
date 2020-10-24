import React, { Component } from "react";
import LoadMore from "./common/pagination";
import { getProducts } from "../products/weaveProducts";
import { getCategories } from "../products/productCategories";
import CategoryList from "./common/categoryList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

class Products extends Component {
  state = {
    products: [],
    categories: [],
    currentLoad: 1,
    loadToShow: 12,
  };

  componentDidMount() {
    const categories = [{ _id: "" }, ...getCategories()];
    this.setState({ products: getProducts(), categories });
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleLoadMore = (load) => {
    console.log(load);
  };

  render() {
    // object destructure
    const { length: count } = this.state.products;
    // check if there is a product in the database
    if (count === 0) return <p>There is not product in the database</p>;
    return (
      <div className="container-fluid mt-4 overflow-auto mr-0 ml-0">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb bg-transparent">
          <ol class="breadcrumb bg-transparent">
            <li class="breadcrumb-item">
              <Link to="/index">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Products
            </li>
          </ol>
        </nav>
        {/* Category List */}
        <CategoryList
          items={this.state.categories}
          selectedItem={this.state.selectedCategory}
          onItemSelect={this.handleCategorySelect}
        />

        {/* Product Display */}
        <div className="row">
          {this.state.products.map((product) => (
            <div className="col-md-3 text-left mb-5">
              <div className="img-fluid">
                {product.numberInStock === 0 ? (
                  <div className="outofstock">Out Of Stock</div>
                ) : null}
                <img src={product.image} className="w-100" />
              </div>
              <div className="mt-4">
                <h5>{product.title}</h5>
                <p>{product.dimension}</p>
                <h6>${product.price}</h6>
              </div>
            </div>
          ))}
        </div>
        {/* load more */}
        <LoadMore
          itemsCount={count}
          loadToShow={this.state.loadToShow}
          onLoadMore={this.handleLoadMore}
        />
      </div>
    );
  }
}

export default Products;
