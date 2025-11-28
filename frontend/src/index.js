import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Inputs from "./Inputs";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Inputs />
  </StrictMode>
);
