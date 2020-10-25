import React, { Component } from "react";
import { getProducts } from "../products/weaveProducts";
import { getCategories } from "../products/productCategories";
import CategoryList from "./common/categoryList";
import LoadMore from "./loadMore";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";

class Products extends Component {
  state = {
    products: [],
    categories: [],
    currentPage: 1,
    pageSize: 12,
  };

  componentDidMount() {
    const categories = [{ _id: "" }, ...getCategories()];
    this.setState({ products: getProducts(), categories });
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    // object destructure
    const { length: count } = this.state.products;
    const { pageSize, currentPage, products: allProducts } = this.state;

    // check if there is a product in the database
    if (count === 0) return <p>There is not product in the database</p>;

    const products = paginate(allProducts, currentPage, pageSize);

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
          {products.map((product) => (
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

        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Products;
