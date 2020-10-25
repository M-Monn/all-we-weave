import React from "react";
import _ from "lodash";

const LoadMore = ({ itemsCount, loadToShow, onLoadMore }) => {
  const loadSize = itemsCount / loadToShow;
  return (
    <div>
      <ul className="li">
        {loadSize.map((load) => (
          <li>{load}</li>
        ))}
      </ul>
      <button className="btn btn-outline-info mt-3 mb-5">Load More</button>
    </div>
  );
};

export default LoadMore;
