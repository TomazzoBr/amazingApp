import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import { ProductsInterface } from "./interfaces/ProductsInterface";

function App() {
  const [products, setProducts] = useState<ProductsInterface[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json`
      );
      const result = await response.json();
      setProducts(result.items);
    };
    fetchData();
  });

  const handleSearch = (event: any) => {
    const value = event.target.value.toLowerCase();
    let result = [];
    result = products.filter((product) => {
      return (
        (product.title.search(value) ||
          product.description.search(value) ||
          product.price.toString().search(value) ||
          product.email.search(value)) !== -1
      );
    });
    setProducts(result);
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full flex h-14 p-1">
        <Header setSearch={setSearch} handleSearch={handleSearch} />
      </div>
      <div className="w-full justify-center items-center h-5/6">
        <ProductsList products={products} />
      </div>
    </div>
  );
}

export default App;
