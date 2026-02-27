import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { rootDivsName } from "./shared/config";
import { App } from "./app";

createRoot(document.getElementById(rootDivsName.root)!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
