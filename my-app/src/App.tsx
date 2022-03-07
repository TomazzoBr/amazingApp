import { Dispatch, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import { ProductsInterface } from "./interfaces/ProductsInterface";
import { getProducts } from "./services/ApiClient";
import { connect } from "react-redux";

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
  }, [mount]);

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

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    toggleFavouriteModalReducer: () =>
      dispatch({ type: "header/toggleFavouriteModal" }),
    toggleFilterReducer: () => dispatch({ type: "products/toggleFilter" }),
  };
}

function mapStateToProps(
  state: any,
  ownProps: { value: string; flag: boolean }
) {
  return {
    value: ownProps.value,
    flag: ownProps.flag,
  };
}

export default connect(mapDispatchToProps, mapStateToProps)(App);
