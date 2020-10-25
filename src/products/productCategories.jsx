export const categories = [
  { _id: "awwc0000000001", name: "Table" },
  { _id: "awwc0000000002", name: "Chair" },
  { _id: "awwc0000000003", name: "Lamp" },
  { _id: "awwc0000000004", name: "Cabinet" },
  { _id: "awwc0000000005", name: "Planter" },
];

export function getCategories() {
  return categories.filter((c) => c);
}
