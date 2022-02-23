import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import { ProductsInterface } from "./interfaces/ProductsInterface";
import { getProducts } from "./services/ApiClient";

function App() {
  const [products, setProducts] = useState<ProductsInterface[]>([]);
  const [filteredProd, setFilteredProd] = useState<ProductsInterface[]>([]);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    getProducts().then((products) => {
      if (!mount) {
        setProducts(products);
        setFilteredProd(products);
        setMount(true);
      }
      setProducts(products);
    });
  });

  return (
    <div className="w-screen h-screen">
      <div className="w-full flex h-14 p-1">
        <Header setFilteredProd={setFilteredProd} products={products} />
      </div>
      <div className="w-full justify-center items-center h-5/6">
        <ProductsList filteredProd={filteredProd} />
      </div>
    </div>
  );
}

export default App;
