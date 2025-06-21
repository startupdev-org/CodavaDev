import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePageDesktop } from "./screens/HomePageDesktop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomePageDesktop />
  </StrictMode>,
);
