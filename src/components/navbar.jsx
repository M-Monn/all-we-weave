import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import $ from "jquery";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).click(function (event) {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-xs navbar-light sticky-top">
        <div>
          <button
            className="navbar-toggler no-outline"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="../img/hamburger.svg" />
          </button>
          <Link className="navbar-brand" to="/index">
            <img src="../img/all-we-weave-logo.png" />
          </Link>
        </div>
        <div className="search-bar">
          <form>
            <input type="search" placeholder="Search" aria-label="Search" />
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
            </svg>
          </form>
        </div>
        <div className="nav-right">
          <NavLink to="">
            <img src="../img/heart.svg" />
          </NavLink>
          <NavLink to="">
            <img src="../img/question.svg" />
          </NavLink>
          <NavLink to="">
            <img src="../img/user2.svg" />
          </NavLink>
          <NavLink to="">
            <img src="../img/shopping-bag.svg" />
          </NavLink>
        </div>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-left">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/new-in">
                New In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bestsellers">
                Bestsellers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
