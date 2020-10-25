import React from "react";

const PriceRange = (props) => {
  const { price } = props;
  return (
    <div className="dropdown-holder ml-3">
      <button
        className="btn dropdown-toggle p-0"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sorted by
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="drop-down-item">Price: Low to High</a>
      </div>
    </div>
  );
};

export default PriceRange;
