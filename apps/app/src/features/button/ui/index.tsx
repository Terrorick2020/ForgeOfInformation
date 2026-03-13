import { SpinnerUi } from '@/shared';
import { memo, type JSX } from "react";
import type { IButtonProps } from "./types";
import styles from "./styles.module.scss";

function Button({
  title,
  startIcon,
  endIcon,
  addClass = "",
  isLoad = false,
  disabled = false,
  ...props
}: IButtonProps): JSX.Element {
  return (
    <div className={`${styles["button"]} ${addClass}`}>
      <button
        className={styles["button__ctx"]}
        disabled={disabled || isLoad}
        {...props}
      >
        {startIcon && <span>{startIcon}</span>}
        <span className={styles["btn-txt"]}>{title}</span>
        {endIcon && !isLoad && <span>{endIcon}</span>}
        {isLoad && <SpinnerUi addClass={styles["spin-add-class"]} />}
      </button>
    </div>
  );
}

export default memo(Button);
