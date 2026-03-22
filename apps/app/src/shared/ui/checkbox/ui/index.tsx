import { useId, memo, type JSX } from "react";
import type { ICheckboxUiProps } from "./types";
import styles from "./styles.module.scss";

function CheckboxUi({
  checked,
  addClass = "",
  text = "",
  onChange,
}: ICheckboxUiProps): JSX.Element {
  const checkKey = `checkbox-ui-${useId()}`;

  return (
    <div className={`${styles["checkbox-ui"]} ${addClass}`}>
      <label htmlFor={checkKey} className={styles["container"]}>
        <input
          id={checkKey}
          name={checkKey}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <div className={styles["checkmark"]} />
      </label>
      <h6 className={styles["text"]}>{text}</h6>
    </div>
  );
}

export default memo(CheckboxUi);
