import { Outlet } from "react-router-dom";
import { EProfileRoles } from "@libs/config";
import { PermGuard } from "@/shared";
import type { JSX } from "react";
import styles from "./layout.module.scss";

export function HomeLayout(): JSX.Element {
  return (
    <PermGuard
      permList={[EProfileRoles.User, EProfileRoles.Admin]}
      realPerm={EProfileRoles.Admin}
      sucRes={
        <div className={styles["home-layout"]}>
          <Outlet />
        </div>
      }
      errRes={<>Написать блок превышения полномочий</>}
    />
  );
}
