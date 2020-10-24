import React from "react";
import _ from "lodash";

const LoadMore = (props) => {
  const { itemsCount, loadToShow, onLoadMore } = props;
  return (
    <button
      type="button"
      className="btn btn-outline-primary mb-5"
      onClick={() => {
        onLoadMore();
      }}
    >
      LoadMore
    </button>
  );
};

export default LoadMore;
