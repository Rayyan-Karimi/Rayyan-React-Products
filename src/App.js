import "./App.css";
import FilterableProductTable from "./FilterableProductTable";

function Hero() {
  return (
    <div className="py-6 text-center shadow-lg font-bold text-lg">
      <h2>Product Table</h2>
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <div>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </div>
  );
}

export default App;
