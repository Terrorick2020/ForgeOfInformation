import type { JSX } from "react";
import type { ITmplUiProps } from "@/shared";
import styles from "./ui.module.scss";

function FrontBlockUi({ children, addClass = "" }: ITmplUiProps): JSX.Element {
  return (
    <div className={`${styles["front-block-ui"]} ${addClass}`}>{children}</div>
  );
}

export default FrontBlockUi;
