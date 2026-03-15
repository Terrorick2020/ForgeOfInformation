import { memo, type JSX } from "react";
import type { IIconButtonProps } from "./types";
import styles from "./styles.module.scss";

function IconButtonUi({
  icon,
  addClass = "",
  ...props
}: IIconButtonProps): JSX.Element {
  return (
    <button className={`${styles["icon-button-ui"]} ${addClass}`} {...props}>
      {icon}
    </button>
  );
}

export default memo(IconButtonUi);
