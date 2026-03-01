import { Outlet } from "react-router-dom";
import { PermGuard } from "@/features";
import { EProfileRoles } from "@libs/config";
import type { JSX } from "react";
import styles from './layout.module.scss';

export function AdminLayout(): JSX.Element {
  return (
    <PermGuard
      permList={[EProfileRoles.Admin]}
      sucRes={
        <div className={styles["admin-layout"]}>
          <Outlet />
        </div>
      }
      errRes={<>Написать блок превышения полномочий</>}
    />
  );
}
