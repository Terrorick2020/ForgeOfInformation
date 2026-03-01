import { DefaultRoutes, AdminRoutes, HomeRoutes, AuthRoutes } from "./routes";
import { Store, Theme, Router } from "./providers";
import type { JSX } from "react";
import "./styles/index.scss";

export default function Combiner(): JSX.Element {
  return (
    <Store>
      <Theme />
      <Router>
        {DefaultRoutes({
          children: [AuthRoutes(), AdminRoutes(), HomeRoutes()],
        })}
      </Router>
    </Store>
  );
}
