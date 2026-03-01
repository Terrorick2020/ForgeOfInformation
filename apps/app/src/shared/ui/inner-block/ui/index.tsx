import type { JSX } from "react";
import { EIBUiBoxType, EIBUiInnerType, type IInnerBlockUiProps } from "./types";
import styles from "./styles.module.scss";

function InnerBlockUi({
  children,
  boxType = EIBUiBoxType.Glob,
  innerType = EIBUiInnerType.Full,
}: IInnerBlockUiProps): JSX.Element {
  return (
    <div className={`${styles["inner-block-ui"]} ${styles[boxType]}`}>
      <div className={styles[innerType]}>{children}</div>
    </div>
  );
}

export default InnerBlockUi;
