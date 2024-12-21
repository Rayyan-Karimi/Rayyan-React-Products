import React from "react";
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

export default function ProductTable({ products }) {
  let lastCategory = null;
  const rows = [];

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory
          key={product.category}
          category={product.category}
        ></ProductCategory>
      );
    }
    rows.push(<ProductRow key={product.name} product={product}></ProductRow>);
    lastCategory = product.category;
  });

  return (
    <div className="flex justify-center items-center">
      <table className="mt-8 w-1/3 border border-black">
        <thead className="font-semibold border border-indigo-800">
          <tr>
            <td className="min-w-[16.66%]">Name</td>
            <td className="min-w-[16.66%]">Price</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
