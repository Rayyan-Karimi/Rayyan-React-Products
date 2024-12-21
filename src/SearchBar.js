import React from "react";

export default function SearchBar() {
  return (
    <div>
      <form className="flex flex-col justify-center items-center gap-3 m-4">
        <input type="text" className="border border-black w-2/5 rounded-2xl p-2 text-center" placeholder="Search..." />
        <label>
          <input type="checkbox" /> Only show products in stock
        </label>
      </form>
    </div>
  );
}
