import {
  InnerBlockUi,
  EIBUiInnerType,
  EIBUiBoxType,
  IconButtonUi,
} from "@/shared";

import { ScrollBlock, Search, HomeStorageCtx } from "@/features";
import { useContext, type JSX } from "react";
import type { ISTmplProps } from "./types";
import styles from "./styles.module.scss";
import TwoUpDownSvgr from "@/shared/assets/icons/two-up-down.svg?react";
import HamburgerSvgr from "@/shared/assets/icons/hamburger.svg?react";

function HomeStoreTmpl({
  children,
  mainAdd = undefined,
  asideAdd = undefined,
}: ISTmplProps): JSX.Element {
  const context = useContext(HomeStorageCtx);

  return (
    <InnerBlockUi innerType={EIBUiInnerType.Inline}>
      <div className={styles["home-store-tmpl"]}>
        <section className={styles["panel"]}>
          <InnerBlockUi innerType={EIBUiInnerType.Block}>
            <div className={styles["panel__ctx"]}>
              <main className={styles["main"]}>
                <InnerBlockUi boxType={EIBUiBoxType.Local}>
                  <div className={styles["main__box"]}>
                    <Search
                      addClass={styles["add-h-class"]}
                      placeholder="Поиск"
                      value={context.searchValue}
                      onChange={context.onSearchChange}
                    />
                    {mainAdd}
                    <IconButtonUi
                      addClass={styles["add-h-class"]}
                      icon={<TwoUpDownSvgr />}
                      onClick={context.toggleSortDir}
                    />
                  </div>
                </InnerBlockUi>
              </main>
              <aside
                className={`${styles["aside"]} ${asideAdd ? styles["aside-add"] : ""}`}
              >
                <IconButtonUi icon={<HamburgerSvgr />} />
                {asideAdd}
              </aside>
            </div>
          </InnerBlockUi>
        </section>
        <section className={styles["body"]}>
          <ScrollBlock addClass={styles["add-scrl-class"]}>
            <div className={styles["scrl-body"]}>{children}</div>
          </ScrollBlock>
        </section>
      </div>
    </InnerBlockUi>
  );
}

export default HomeStoreTmpl;
