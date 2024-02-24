import { render } from "@testing-library/react";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../Utils/store";

test("Logo should load on renderimg header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check if logo is loaded
  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check if logo is loaded
  const onlineStatus = header.getAllByTestId("online-status");

  expect(onlineStatus[0].className).toBe("login-btn-green");
});

test("Cart should have 0 items on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check if logo is loaded
  const cart = header.getAllByTestId("cart1");

  expect(cart[0].children[0].innerHTML).toBe("cart - 0 items");
});
