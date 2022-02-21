import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import { ProductsInterface } from "./interfaces/ProductsInterface";

function App() {
  const [products, setProducts] = useState<ProductsInterface[]>([]);
  const [filteredProd, setFilteredProd] = useState<ProductsInterface[]>([]);
  // console.log(filteredProd);

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

  return (
    <div className="w-screen h-screen">
      <div className="w-full flex h-14 p-1">
        <Header setFilteredProd={setFilteredProd} products={products} />
      </div>
      <div className="w-full justify-center items-center h-5/6">
        <ProductsList
          filteredProd={filteredProd.length ? filteredProd : products}
        />
      </div>
    </div>
  );
}

export default App;
