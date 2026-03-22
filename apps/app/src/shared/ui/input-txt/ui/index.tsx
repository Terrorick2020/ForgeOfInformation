import { memo, type JSX } from "react";
import type { IInputTxtUiProps } from "./types";
import styles from "./styles.module.scss";

function InputTxtUi({
  addClass = "",
  addId = "",
  ref = undefined,
  startIcon = null,
  endIcon = null,
  ...props
}: IInputTxtUiProps): JSX.Element {
  return (
    <div className={`${styles["input-txt-ui"]} ${addClass}`}>
      {startIcon && <span>{startIcon}</span>}
      <input id={addId} ref={ref} {...props} />
      {endIcon && <span>{endIcon}</span>}
    </div>
  );
}

export default memo(InputTxtUi);
