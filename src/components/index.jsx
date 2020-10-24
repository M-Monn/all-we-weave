import { Carousel } from "bootstrap";
import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      // Carousel Slide
      <div
        id="carouselCaptions"
        className="carousel slide mt-4"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselCaptions" data-slide-to="1"></li>
          <li data-target="#carouselCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row m-0">
              <div className="col-md-7 p-0">
                <img
                  src="../img/banner-slider-1.jpg"
                  className="d-block w-100 img-fluid"
                  alt="All We Weave"
                />
              </div>
              <div className="col-md-5 p-0">
                <div className="carousel-custom-caption d-md-block">
                  <h1>Confort Of Nature</h1>
                  <p>
                    All We Weave is What You Need! <br />
                    Our items are made of sustainable nature products. <br />
                    <br />
                    Check out our new in items
                    <div className="btn1">
                      <a href="">
                        New In
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-arrow-right"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row m-0">
              <div className="col-md-7 p-0">
                <img
                  src="../img/banner-slider-1.jpg"
                  className="d-block w-100"
                  alt="All We Weave"
                />
              </div>
              <div className="col-md-5 p-0">
                <div className="carousel-custom-caption d-md-block">
                  <h1>Confort Of Nature</h1>
                  <p>
                    All We Weave is What You Need! <br />
                    Our items are made of sustainable nature products. <br />
                    <br />
                    Check out our new in items
                    <div className="btn1">
                      <a href="">
                        New In{" "}
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-arrow-right"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row m-0">
              <div className="col-md-7 p-0">
                <img
                  src="../img/banner-slider-1.jpg"
                  className="d-block w-100"
                  alt="All We Weave"
                />
              </div>
              <div className="col-md-5 p-0">
                <div className="carousel-custom-caption d-md-block">
                  <h1>Confort Of Nature</h1>
                  <p>
                    All We Weave is What You Need! <br />
                    Our items are made of sustainable nature products. <br />
                    <br />
                    Check out our new in items
                    <div className="btn1">
                      <a href="">
                        New In{" "}
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-arrow-right"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      // End Carousel Slides
    );
  }
}

export default HomePage;
