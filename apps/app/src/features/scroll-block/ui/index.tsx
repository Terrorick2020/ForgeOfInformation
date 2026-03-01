import { useScroll } from "../model";
import type { JSX, CSSProperties } from "react";
import type { ITmplUiProps } from "@/shared";
import styles from "./styles.module.scss";

function ScrollBlock({ children, addClass = "" }: ITmplUiProps): JSX.Element {
  const { boxRef, isScrble } = useScroll();

  return (
    <div className={`${styles["scroll-block-ui"]} ${addClass}`}>
      <div
        className={`${styles["content"]} ${isScrble ? styles["scrollable"] : ""}`}
      >
        <div ref={boxRef} className={styles["content__box"]}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ScrollBlock;
