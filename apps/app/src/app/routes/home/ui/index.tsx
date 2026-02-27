import {
  HomeDownloadsPage,
  HomeChatPage,
  HomeProfilePage,
  HomeStoragePage,
} from "@/pages";

import { Route } from "react-router-dom";
import { HomeLayout } from "./layout";
import { appRoutes } from "@/shared";
import type { JSX } from "react";

const homePathes = appRoutes.home;

function HomeRoutes(): JSX.Element {
  return (
    <Route path={homePathes.glob} element={<HomeLayout />}>
      <Route
        path={homePathes.local.downloads}
        element={<HomeDownloadsPage />}
      />
      <Route path={homePathes.local.chat} element={<HomeChatPage />} />
      <Route path={homePathes.local.profile} element={<HomeProfilePage />} />
      <Route path={homePathes.local.storage} element={<HomeStoragePage />} />
    </Route>
  );
}

export default HomeRoutes;
