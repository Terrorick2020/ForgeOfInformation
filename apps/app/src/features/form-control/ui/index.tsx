import { useSettings } from "../model";
import { InputTxtUi } from "@/shared";
import { memo, type JSX } from "react";
import type { IFormControlProps } from "./types";
import styles from "./styles.module.scss";

function FormControl({
  label,
  addClass = "",
  errTxt = "",
  isErr = false,
  ...props
}: IFormControlProps): JSX.Element {
  const { keyId } = useSettings();

  return (
    <form action="" className={`${styles["form-control"]} ${addClass}`}>
      <label
        htmlFor={keyId}
        className={styles["form-control__label"]}
      >{label}</label>
      <InputTxtUi
        addClass={styles["inp-add-class"]}
        addId={keyId}
        {...props}
      />
      <div
        className={styles["form-control__err"]}
        style={{maxHeight: isErr ? 200 : 0 }}
      >
        <p>{errTxt}</p>
      </div>
    </form>
  );
}

export default memo(FormControl);
