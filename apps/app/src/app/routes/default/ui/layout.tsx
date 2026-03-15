import { Outlet } from "react-router-dom";
import { useSettings } from "../model";
import { AnimeUi, EAnimeTmplType } from "@/shared";
import { Notifi } from "@/features";
import type { JSX } from "react";
import styles from "./layout.module.scss";

export function DefaultLayout(): JSX.Element {
  const { vertPosit, horPosit } = useSettings();

  return (
    <div className={styles["default-layout"]}>
      <div className={styles["dl-box"]}>
        <AnimeUi tmplType={EAnimeTmplType.Page} withLeave>
          <Notifi verPosit={vertPosit} horPosit={horPosit}>
            <Outlet />
          </Notifi>
        </AnimeUi>
      </div>
    </div>
  );
}
