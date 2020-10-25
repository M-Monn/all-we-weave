import * as categoriesAPI from "./productCategories";

const products = [
  {
    _id: "aww0000000001",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Rtangle Cross Legs Table",
    category: {
      _id: "awwc0000000001",
      name: "Table",
    },
    dimension: "120x40x50 cm",
    price: 100,
    numberInStock: 3,
  },
  {
    _id: "aww0000000002",
    image: require("../img/aww-rounded-table.jpg"),
    title: "Rounded Table With Storage",
    category: {
      _id: "awwc0000000001",
      name: "Table",
    },
    dimension: "120x40x50 cm",
    price: 120,
    numberInStock: 1,
  },
  {
    _id: "aww0000000003",
    image: require("../img/aww-armed-chair.jpg"),
    title: "Armed Chair",
    category: {
      _id: "awwc0000000002",
      name: "Chair",
    },
    dimension: "120x40x50 cm",
    price: 69,
    numberInStock: 0,
  },
  {
    _id: "aww0000000004",
    image: require("../img/aww-rounded-basket-table.jpg"),
    title: "Rounded Basket Table",
    category: {
      _id: "awwc0000000001",
      name: "Table",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000005",
    image: require("../img/aww-planter-basket.jpg"),
    title: "Planter Basket",
    category: {
      _id: "awwc0000000005",
      name: "Planter",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000006",
    image: require("../img/aww-swinger-chair.jpg"),
    title: "Singer Chair",
    category: {
      _id: "awwc0000000002",
      name: "Chair",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000007",
    image: require("../img/aww-table-lamp.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000008",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000009",
    image: require("../img/aww-coffee-table.jpg"),
    title: "Coffee Table",
    category: {
      _id: "awwc0000000001",
      name: "Table",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000010",
    image: require("../img/aww-laundary-basket.jpg"),
    title: "Laundary Basket",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000011",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww00000000012",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww00000000013",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000014",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000015",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000016",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000017",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000018",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000019",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Table Lamp",
    category: {
      _id: "awwc0000000003",
      name: "Lamp",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
  {
    _id: "aww0000000020",
    image: require("../img/aww-retangle-table.jpg"),
    title: "Cabinet",
    category: {
      _id: "awwc0000000004",
      name: "Cabinet",
    },
    dimension: "30x40x120 cm",
    price: 89,
    numberInStock: 5,
  },
];

export function getProducts() {
  return products;
}

// export function getProduct(id) {
//   return products.find((p) => p._id === id);
// }
