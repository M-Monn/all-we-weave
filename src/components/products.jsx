import React, { Component } from "react";
import { getProducts } from "../products/weaveProducts";
import { getCategories } from "../products/productCategories";
import CategoryList from "./common/categoryList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import PriceRange from "./common/priceRange";

class Products extends Component {
  state = {
    products: [],
    categories: [],
    currentPage: 1,
    pageSize: 12,
  };

  componentDidMount() {
    //to get all products
    const categories = [
      { _id: "", name: "All Categories" },
      ...getCategories(),
    ];
    this.setState({ products: getProducts(), categories });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  render() {
    // object destructure
    const { length: count } = this.state.products;
    const {
      pageSize,
      currentPage,
      selectedCategory,
      products: allProducts,
      categories,
    } = this.state;

    // check if there is a product in the database
    if (count === 0) return <p>There is not product in the database</p>;

    const filtered =
      selectedCategory && selectedCategory._id
        ? allProducts.filter((p) => p.category._id === selectedCategory._id)
        : allProducts;

    const products = paginate(filtered, currentPage, pageSize);

    return (
      <div className="container-fluid mt-4 overflow-auto mr-0 ml-0">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb bg-transparent">
          <ol className="breadcrumb bg-transparent">
            <li className="breadcrumb-item">
              <Link to="/index">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Products
            </li>
          </ol>
        </nav>
        {/* Category List */}
        <div className="row mb-5 mt-4">
          <div className="col-md-10 text-left">
            Filtered by:
            <CategoryList
              items={categories}
              selectedItem={selectedCategory}
              onSelectItem={this.handleCategorySelect}
            />
          </div>
          <div className="col-md-2 text-right">
            <PriceRange />
          </div>
        </div>

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
          itemsCount={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Products;
