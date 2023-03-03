import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Routers from "./components/Routers";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={setupStore}>
    <Routers />
  </Provider>
);
reportWebVitals();
