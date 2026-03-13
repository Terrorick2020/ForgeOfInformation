import { Link } from "react-router-dom";
import { appRoutes } from "@/shared";
import type { JSX } from "react";
import type { ITmplUiProps } from "@/shared";
import styles from "./styles.module.scss";
import LogoSvgr from "./logo.svg?react";

function LogoUi({
  addClass = "",
}: Omit<ITmplUiProps, "children">): JSX.Element {
  return (
    <div className={`${styles["logo-ui"]} ${addClass}`}>
      <Link className={styles["logo-ui__svgr"]} to={appRoutes.preview}>
        <LogoSvgr />
      </Link>
      <div className={styles["logo-ui__txt"]}>
        <h5>ИнфоКузница</h5>
        <p>Обработка информации</p>
      </div>
    </div>
  );
}

export default LogoUi;
