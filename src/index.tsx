import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Inicial } from "./screens/Inicial";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Inicial />
  </StrictMode>,
);