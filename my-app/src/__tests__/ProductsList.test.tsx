import React from "react";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import dataJSON from "../assets/data.json";

import ProductsList from "../components/ProductsList/ProductsList";
import { Provider } from "react-redux";
import store from "../store/store";

afterEach(cleanup);

describe("<ProductsList />", () => {
  const products = JSON.parse(JSON.stringify(dataJSON.items));
  test("should display the initial status of the products list", async () => {
    const productsComponent = renderer.create(
      <Provider store={store}>
        <ProductsList filteredProd={products.sort()} products={products} />
      </Provider>
    );
    expect(productsComponent).toMatchSnapshot();
  });
});
