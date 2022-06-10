import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import { BrowserRouter } from "react-router-dom";
import App from "pages/App/App";
import "utils/i18n";
import { AccountProvider } from "context/accountContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
  const worker = require("mocks/browser").default;
  worker.start();
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AccountProvider>
        <App />
      </AccountProvider>
    </BrowserRouter>
  </React.StrictMode>
);
