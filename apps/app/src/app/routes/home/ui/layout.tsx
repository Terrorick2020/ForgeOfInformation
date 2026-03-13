import { Outlet } from "react-router-dom";
import { EProfileRoles } from "@libs/config";
import { HomeNavBar } from '@/widgets';
import { PermGuard } from "@/features";
import type { JSX } from "react";
import styles from "./layout.module.scss";

export function HomeLayout(): JSX.Element {
  return (
    <PermGuard
      permList={[EProfileRoles.User, EProfileRoles.Admin]}
      sucRes={
        <div className={styles["home-layout"]}>
          <HomeNavBar />
          <div className={styles["home-layout__ctx"]}>
            <Outlet />
          </div>
        </div>
      }
      errRes={<>Написать блок превышения полномочий</>}
    />
  );
}
