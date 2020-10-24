import React from "react";

const CategoryList = ({
  items = [],
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <div className="row mb-5 mt-4">
      <div className="col-md-10 text-left">
        Filtered by:
        <div className="dropdown-holder ml-3">
          <button
            class="btn dropdown-toggle p-0"
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
                onClick={() => onItemSelect(item)}
                className={
                  item === selectedItem
                    ? "dropdown-item active"
                    : "dropdown-item"
                }
                key={items[valueProperty]}
                href="#"
              >
                {item[textProperty]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryList.defaultProps = {
  textProperty: "name",
  valueProptery: "_id",
};
export default CategoryList;
