import { memo, type JSX } from "react";
import type { IIconButtonProps } from "./types";
import styles from "./styles.module.scss";

function IconButtonUi({
  icon,
  onChange,
  addClass = "",
  withDwnld = false,
  ...props
}: IIconButtonProps): JSX.Element {
  return (
    <button className={`${styles["icon-button-ui"]} ${addClass}`} {...props}>
      {icon}
      {withDwnld && <input type="file" title="" onChange={onChange} />}
    </button>
  );
}

export default memo(IconButtonUi);
