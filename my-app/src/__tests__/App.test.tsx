import React from "react";
import renderer from "react-test-renderer";

import App from "../App";
import { Provider } from "react-redux";
import store from "../store/store";

describe("<App />", () => {
  test("should display the initial status of the app, with random products in the list", async () => {
    const app = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(app).toMatchSnapshot();
  });
});
