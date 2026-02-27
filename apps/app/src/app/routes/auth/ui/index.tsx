import { Route } from "react-router-dom";
import { AuthLayout } from "./layout";
import { AuthConfirmPage, AuthSignInPage } from "@/pages";
import { appRoutes } from "@/shared";
import type { JSX } from "react";

const authPathes = appRoutes.auth;

function AuthRoutes(): JSX.Element {
  return (
    <Route path={authPathes.glob} element={<AuthLayout />}>
      <Route path={authPathes.local.confirm} element={<AuthConfirmPage />} />
      <Route path={authPathes.local.signIn} element={<AuthSignInPage />} />
    </Route>
  );
}

export default AuthRoutes;
