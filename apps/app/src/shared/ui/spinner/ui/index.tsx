import type { JSX } from "react";
import type { ITmplUiProps } from "@/shared";
import styles from "./styles.module.scss";

interface ISpinnerUiProps extends Omit<ITmplUiProps, "children"> {}

function SpinnerUi({ addClass = "" }: ISpinnerUiProps): JSX.Element {
  return <div className={`${styles["spinner-ui"]} ${addClass}`} />;
}

export default SpinnerUi;
