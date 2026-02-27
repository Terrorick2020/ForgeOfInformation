import { Route } from "react-router-dom";
import { AdminLayout } from "./layout";
import { AdminUsersPage } from "@/pages";
import { appRoutes } from "@/shared";
import type { JSX } from "react";

const adminPathes = appRoutes.admin;

function AdminRoutes(): JSX.Element {
  return (
    <Route path={adminPathes.glob} element={<AdminLayout />}>
      <Route path={adminPathes.local.users} element={<AdminUsersPage />} />
    </Route>
  );
}

export default AdminRoutes;
