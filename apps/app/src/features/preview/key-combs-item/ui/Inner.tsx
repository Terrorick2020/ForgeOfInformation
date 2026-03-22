import type { IKeysCombItemInner } from "@/shared";
import type { JSX } from "react";
import styles from "./Inner.module.scss";

function PKCItemInner({
  descreeption,
  required,
  additional,
}: IKeysCombItemInner): JSX.Element {
  const reqStr = required.join("+");
  const addStr = additional.join("/");
  const sepStr = reqStr && addStr ? "+" : "";

  return (
    <li className={styles["list-inner-item"]}>
      <div className={styles["content"]}>
        <h6>
          <span className={styles["descreeption"]}>{descreeption}</span>
          <span className={styles["combination"]}>
            {reqStr}{sepStr}{addStr}
          </span>
        </h6>
      </div>
    </li>
  );
}

export default PKCItemInner;
