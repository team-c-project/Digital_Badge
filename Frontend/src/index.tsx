import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens/Home/Home";
import { SignUp } from "./screens/SignUp/SignUp";
import { Badge } from "./screens/Badge/Badge";
import { Issuers } from "./screens/Issuers/Issuers";
import { Verification } from "./screens/Verification";
import { UserDownload } from "./screens/UserDownload";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <UserDownload/>
  </StrictMode>,
);
