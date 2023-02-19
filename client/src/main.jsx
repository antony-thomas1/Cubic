import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { useAddress, ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { StateContextProvider } from "./context";

// This is the chainId of the dApp.
const activeChainId = ChainId.Goerli;

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Router>
        <StateContextProvider>

          <App />
          
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
