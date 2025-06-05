import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens/Home/Home";
import { SignUp } from "./screens/SignUp/SignUp";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SignUp/>
  </StrictMode>,
);
