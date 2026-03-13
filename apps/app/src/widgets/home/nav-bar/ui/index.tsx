import { useId } from "react";
import { InnerBlockUi, EIBUiInnerType, LogoUi, IconButtonUi } from "@/shared";
import { navBarLinks } from "../model";
import { Link } from "react-router-dom";
import type { JSX } from "react";
import styles from "./styles.module.scss";

function HomeNavBar(): JSX.Element {
  const navKey = useId();

  return (
    <div className={styles["home-nav-bar"]}>
      <InnerBlockUi innerType={EIBUiInnerType.Inline}>
        <div className={styles["home-nav-bar__ctx"]}>
          <LogoUi />
          <nav className={styles["navigate"]}>
            <ul>
              {navBarLinks.map((item, index) => (
                <Link key={`${navKey}-${index}`} to={item.href}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
          </nav>
          <div className={styles["btns"]}>
            <IconButtonUi>
              <></>
            </IconButtonUi>
            <IconButtonUi>
              <></>
            </IconButtonUi>
          </div>
        </div>
      </InnerBlockUi>
    </div>
  );
}

export default HomeNavBar;
