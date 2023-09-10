import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import RoutingTable from "./navigation/RoutingTable.tsx";
import { store } from "./state/app/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={RoutingTable} />
    </Provider>
  </React.StrictMode>
);
