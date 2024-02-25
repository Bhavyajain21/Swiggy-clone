import Body from "../Body";
import { render } from "@testing-library/react";
import store from "../../Utils/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Search Results on home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const searchBtn = body.getByTestId("search-btn");
});
