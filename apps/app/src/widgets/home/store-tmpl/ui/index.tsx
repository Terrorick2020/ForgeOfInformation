import {
  InnerBlockUi,
  EIBUiInnerType,
  EIBUiBoxType,
  IconButtonUi,
} from "@/shared";

import { ScrollBlock } from "@/features";
import type { JSX } from "react";
import type { ISTmplProps } from "./types";
import styles from "./styles.module.scss";

function HomeStoreTmpl({
  children,
  panelCtx,
  panelAdd,
}: ISTmplProps): JSX.Element {
  return (
    <InnerBlockUi innerType={EIBUiInnerType.Inline}>
      <main className={styles["home-store-tmpl"]}>
        <article className={styles["panel"]}>
          <InnerBlockUi innerType={EIBUiInnerType.Block}>
            <div className={styles["panel__ctx"]}>
              <InnerBlockUi boxType={EIBUiBoxType.Local}>
                <div className={styles["assets"]}>
                  {panelCtx}
                </div>
              </InnerBlockUi>
            </div>
            <div className={styles["panel__add"]}>
              <InnerBlockUi
                boxType={EIBUiBoxType.Local}
                innerType={EIBUiInnerType.Inline}
              >
                <div>
                  <IconButtonUi
                    addClass=""
                    icon={<></>}
                  />
                  {panelAdd}
                </div>
              </InnerBlockUi>
            </div>
          </InnerBlockUi>
        </article>
        <article className={styles["body"]}>
          <ScrollBlock addClass={styles["add-scrl-class"]}>
            <div className={styles["scrl-body"]}>{children}</div>
          </ScrollBlock>
        </article>
      </main>
    </InnerBlockUi>
  );
}

export default HomeStoreTmpl;
