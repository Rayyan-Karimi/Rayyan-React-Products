import React from "react";

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <div>
      <form className="flex flex-col justify-center items-center gap-3 m-4">
        <input
          type="text"
          value={filterText}
          className="border border-black w-2/5 rounded-2xl p-2 text-center"
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          Only show products in stock
        </label>
      </form>
    </div>
  );
}
