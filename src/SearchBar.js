import React from "react";

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
  onFilterByCategory
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
        <div>
          <label className="m-4">Select by Category</label>
          <select
            className="bg-slate-100 border border-black rounded-lg px-3 text-center"
            onChange={(e) => onFilterByCategory(e.target.value)}
          >
            <option>see options</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
          </select>
        </div>
      </form>
    </div>
  );
}
