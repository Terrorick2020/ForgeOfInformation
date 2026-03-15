import { InnerBlockUi, EIBUiInnerType, LogoUi, IconButtonUi } from "@/shared";
import { navBarLinks, userHref, useSettings } from "../model";
import { Link } from "react-router-dom";
import type { JSX } from "react";
import styles from "./styles.module.scss";
import ThemeSvgr from "@/shared/assets/icons/theme.svg?react";
import UserSvgr from "@/shared/assets/icons/user.svg?react";

function HomeNavBar(): JSX.Element {
  const { navKey, getLinkAddClass, handleToggleTheme } = useSettings();

  return (
    <header className={styles["home-nav-bar"]}>
      <InnerBlockUi innerType={EIBUiInnerType.Inline}>
        <div className={styles["home-nav-bar__ctx"]}>
          <LogoUi />
          <nav className={styles["navigate"]}>
            <ul className={styles["navigate__list"]}>
              {navBarLinks.map((item, index) => (
                <Link
                  key={`${navKey}-${index}`}
                  className={`${styles["link"]} ${styles[getLinkAddClass(item.href)]}`}
                  to={item.href}
                >
                  <li className={styles["link__txt"]}>{item.title}</li>
                  <span className={styles["link__decor"]} />
                </Link>
              ))}
            </ul>
          </nav>
          <div className={styles["btns"]}>
            <IconButtonUi
              addClass={styles["btns__item"]}
              icon={<ThemeSvgr />}
              onClick={handleToggleTheme}
            />
            <Link to={userHref}>
              <IconButtonUi
                addClass={styles["btns__item"]}
                icon={<UserSvgr />}
              />
            </Link>
          </div>
        </div>
      </InnerBlockUi>
    </header>
  );
}

export default HomeNavBar;
