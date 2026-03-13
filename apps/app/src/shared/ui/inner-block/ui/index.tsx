import { memo, type JSX } from "react";
import { EIBUiBoxType, EIBUiInnerType, type IInnerBlockUiProps } from "./types";
import styles from "./styles.module.scss";

function InnerBlockUi({
  children,
  addClass="",
  boxType = EIBUiBoxType.Glob,
  innerType = EIBUiInnerType.Full,
}: IInnerBlockUiProps): JSX.Element {
  return (
    <div className={`${styles["inner-block-ui"]} ${styles[boxType]} ${addClass}`}>
      <div className={styles[innerType]}>{children}</div>
    </div>
  );
}

export default memo(InnerBlockUi);
