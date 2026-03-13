import { Outlet } from "react-router-dom";
import { AnimeUi, EAnimeTmplType } from "@/shared";
import type { JSX } from "react";
import styles from "./layout.module.scss";

export function DefaultLayout(): JSX.Element {
  return (
    <div className={styles["default-layout"]}>
      <div className={styles["dl-box"]}>
        <AnimeUi
          tmplType={EAnimeTmplType.Page}
          withLeave
        >
          <Outlet />
        </AnimeUi>
      </div>
    </div>
  );
}
