import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./contexts/cart.context";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.js";
import "./index.scss";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CartProvider>
            <App />
          </CartProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
