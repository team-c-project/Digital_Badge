import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens/Home/Home";
import { SignUp } from "./screens/SignUp/SignUp";
<<<<<<< HEAD
import { Badge } from "./screens/Badge/Badge";
import { Issuers } from "./screens/Issuers/Issuers";

>>>>>>> 9035aadfd408a6b02b79e22bd02ecdb7439dfd99

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Issuers/>
  </StrictMode>,
);
