import React from "react";
import renderer from "react-test-renderer";
import { cleanup, render } from "@testing-library/react";

import App from "../App";
import { Provider } from "react-redux";
import store from "../store/store";

afterEach(cleanup);

describe("<App />", () => {
  test("should display the initial status of the app, wrapped inside the provider and with the redux store", async () => {
    const app = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(app).toMatchSnapshot();
  });
});
