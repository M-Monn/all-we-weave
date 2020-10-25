import React from "react";

const CategoryList = ({
  items = [],
  textProperty,
  valueProperty,
  onSelectItem,
  selectedItem,
}) => {
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
        Category
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {items.map((item) => (
          <a
            onClick={() => {
              onSelectItem(item);
            }}
            className={
              item === selectedItem ? "dropdown-item active" : "dropdown-item"
            }
            key={item[valueProperty]}
          >
            {item[textProperty]}
          </a>
        ))}
      </div>
    </div>
  );
};

CategoryList.defaultProps = {
  textProperty: "name",
  valueProptery: "_id",
};
export default CategoryList;
