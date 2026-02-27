import { Route } from "react-router-dom";
import { DefaultLayout } from "./layout";
import { NotFoundPage, PreviewPage } from "@/pages";
import { appRoutes, type ITmplCompProps } from "@/shared";
import type { JSX } from "react";

function DefaultRoutes({ children }: ITmplCompProps): JSX.Element {
  return (
    <Route path={appRoutes.pref} element={<DefaultLayout />}>
      <Route path={appRoutes.preview} element={<PreviewPage />} />
      <Route path={appRoutes.notFound} element={<NotFoundPage />} />
      {children}
    </Route>
  );
}

export default DefaultRoutes;
