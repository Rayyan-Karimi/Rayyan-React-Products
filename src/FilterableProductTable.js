import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable({ products }) {
  const [filtertext, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterByCategory, setFilterByCategory] = useState('')
  return (
    <div>
      <SearchBar
        filtertext={filtertext}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
        onFilterByCategory={setFilterByCategory}
      />
      <ProductTable
        products={products}
        filtertext={filtertext}
        inStockOnly={inStockOnly}
        filterByCategory={filterByCategory}
      />
    </div>
  );
}
