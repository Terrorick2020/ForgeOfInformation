import { Outlet } from "react-router-dom";
import type { JSX } from "react";
import styles from "./layout.module.scss";

export function AuthLayout(): JSX.Element {
  return (
    <div className={styles["auth-layout"]}>
      <Outlet />
    </div>
  );
}
